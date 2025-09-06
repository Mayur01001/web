import React from "react";
import Footer from "../components/footer";

export default function Contact() {
  // ✅ Centralize your details here for easy edits
  const PHONES = [
    { label: "Primary", number: "+91 226111 0504" },
    { label: "Secondary", number: "+91 98765 43210" }, // replace with your real number
  ];
  const EMAILS = {
    general: "info@yourcompany.com",   // replace
    careers: "careers@yourcompany.com" // replace
  };
  const ADDRESS = {
    line1: "123, Sample Street, Andheri West",
    line2: "Mumbai, Maharashtra 400053, India",
    mapLink: "https://www.google.com/maps/place/Navjeevan+Grab,+Swami+Vivekananda+Rd,+MSEB+Colony,+Santacruz+(West),+Mumbai,+Maharashtra+400054/@19.0889912,72.8384174,21z/data=!4m9!1m2!2m1!1sSantacruz+East+reliance+mall+navjeevan+grab!3m5!1s0x3be7c9a596c22257:0x143371b75599232!8m2!3d19.089007!4d72.838538!16s%2Fg%2F1ydpjffzf?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D", // replace with precise link
  };
  const HOURS = [
    { day: "Mon–Fri", time: "10:00 AM – 7:00 PM" },
    { day: "Sat", time: "10:00 AM – 2:00 PM" },
    { day: "Sun", time: "Closed" },
  ];
  const SOCIALS = [
    { name: "Instagram", href: "#"},
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  // Simple inline SVGs so you don’t need any icon library
  const Icon = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12.8 19.86 19.86 0 0 1 .08 4.19 2 2 0 0 1 2.06 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L6.1 9.91a16 16 0 0 0 8 8l1.48-1.08a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v1.2l-10 6.25L2 7.2V6a2 2 0 0 1 2-2zm18 6.3V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.7l10 6.25 10-6.25z"/>
      </svg>
    ),
    map: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5zm.75 5.5h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7.25z"/>
      </svg>
    ),
    link: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L10.4 4.53M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.6-1.53"/>
      </svg>
    ),
  };

  return (
    <div className="bg-white h-0">
      {/* Hero */}
      <section className="w-full px-6 pt-24 pb-12 md:pt-28 md:pb-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-black/10 p-8 md:p-14 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.03),transparent_60%)]">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              Get in Touch
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl">
              We’re here to discuss new projects, collaborations, and opportunities.
              Reach us directly via phone or email — no forms, no friction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid (uses the whole page on desktop) */}
      <section className="w-full px-6 pb-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phones */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              {Icon.phone}
              <h2 className="text-xl font-bold text-black">Call Us</h2>
            </div>
            <ul className="mt-4 space-y-2">
              {PHONES.map((p) => (
                <li key={p.number} className="flex items-center justify-between">
                  <span className="text-gray-700">{p.label}</span>
                  <a className="font-semibold underline underline-offset-4"
                     href={`tel:${p.number.replace(/\s/g, "")}`}>
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* General Email */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              {Icon.mail}
              <h2 className="text-xl font-bold text-black">Email (General)</h2>
            </div>
            <p className="mt-4 text-gray-700">
              For enquiries, proposals, and collaborations:
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
              href={`mailto:${EMAILS.general}`}
            >
              {EMAILS.general} {Icon.link}
            </a>
          </div>

          {/* Careers Email */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              {Icon.mail}
              <h2 className="text-xl font-bold text-black">Email (Careers)</h2>
            </div>
            <p className="mt-4 text-gray-700">
              Send your portfolio and CV:
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
              href={`mailto:${EMAILS.careers}`}
            >
              {EMAILS.careers} {Icon.link}
            </a>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              {Icon.map}
              <h2 className="text-xl font-bold text-black">Office</h2>
            </div>
            <p className="mt-4 text-gray-700">
              {ADDRESS.line1}<br />{ADDRESS.line2}
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
              href={ADDRESS.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              View on Maps {Icon.link}
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              {Icon.clock}
              <h2 className="text-xl font-bold text-black">Hours</h2>
            </div>
            <ul className="mt-4 space-y-2">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-center justify-between text-gray-700">
                  <span>{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="rounded-2xl border border-black/10 p-6 hover:shadow-md transition">
            <h2 className="text-xl font-bold text-black">Social</h2>
            <p className="mt-4 text-gray-700">Follow our work and updates:</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
