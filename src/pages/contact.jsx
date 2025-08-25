import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", hp: "" });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState({ type: "", text: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setNotice({ type: "", text: "" });

    // minimal client validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNotice({ type: "error", text: "Please fill all required fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ type: "ok", text: "Message sent. We’ll get back to you shortly." });
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        setNotice({ type: "error", text: data?.message || "Failed to send. Try again later." });
      }
    } catch {
      setNotice({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white px-6 py-16 flex items-start justify-center">
      <div className="grid w-full max-w-6xl gap-12 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-black">Let's Talk</h1>
          <p className="mt-8 text-xl font-semibold text-gray-800">
            Got a Project On Mind?
            <br />
            Lets Discuss About The Details.
          </p>

          <div className="mt-10">
            <p className="text-black font-bold">Call Us</p>
            <p className="mt-1 text-2xl font-semibold text-black">+91 226111 0504</p>
          </div>

          <div className="mt-8 flex items-center gap-5 text-xl text-black/80">
            <a href="#" aria-label="Facebook" className="hover:opacity-70"></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70"></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70"></a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="md:pl-12 md:border-l border-black/10 space-y-8">
          {/* honeypot (bots fill it; humans never see it) */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="mt-2 w-full border-b border-black/20 py-2 outline-none focus:border-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="mt-2 w-full border-b border-black/20 py-2 outline-none focus:border-black"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900">Comment or Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className="mt-2 w-full border-b border-black/20 py-2 outline-none focus:border-black resize-y"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white text-sm font-semibold hover:bg-black/90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {notice.text && (
            <p className={`text-sm ${notice.type === "ok" ? "text-green-600" : "text-red-600"}`}>
              {notice.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
