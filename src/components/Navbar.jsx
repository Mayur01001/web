import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Dropdown = ({ label, to, items }) => {
    const isOpen = openDropdown === label;
    const isActive = location.pathname.startsWith(to);

    return (
      <div
        className="relative"
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setOpenDropdown(label);
        }}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
        }}
      >
        <Link
          to={to}
          className={`px-3 py-2 text-[16px] font-medium transition-colors duration-200 ${
            isActive
              ? "text-black border-b-2 border-black"
              : "text-gray-700 hover:text-black"
          }`}
        >
          {label}
        </Link>

        <div
          className={`absolute left-0 top-full bg-white shadow-lg rounded-md py-2 min-w-[200px] transition-all duration-200 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {items.map((item, i) =>
            item.to.includes("#") ? (
              <a
                key={i}
                href={item.to}
                className="block px-4 py-2 text-[15px] text-gray-700 hover:text-black hover:bg-gray-50 transition"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={i}
                to={item.to}
                className="block px-4 py-2 text-[15px] text-gray-700 hover:text-black hover:bg-gray-50 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="w-full flex justify-between items-center py-4 px-4 lg:px-12">
        {/* Company Name aligned to left corner */}
        <Link
          to="/"
          className="font-bold text-lg font-sans leading-none text-left"
          style={{ marginLeft: 0 }}
        >
          ARCHITECT<br />ABUZAR<br />PLASTERWALA
        </Link>

        {/* Mobile Button */}
        <button
          className="w-9 h-9 text-gray-700 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-full h-full" />
          ) : (
            <Bars3Icon className="w-full h-full" />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center text-[16px]">
          <Link
            to="/"
            className={`px-3 py-2 transition ${
              location.pathname === "/"
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Home
          </Link>

          <Dropdown
            label="About Us"
            to="/about"
            items={[
              { label: "People", to: "/about#people" },
              { label: "Clients", to: "/about#clients" },
              { label: "Collaborators", to: "/about#collaborators" },
            ]}
          />

          <Dropdown
            label="Projects"
            to="/projects"
            items={[
              { label: "All Projects", to: "/projects" },
              { label: "Residential", to: "/projects/residential" },
              { label: "Commercial", to: "/projects/commercial" },
              { label: "Institutional", to: "/projects/institutional" },
              { label: "Recreational", to: "/projects/recreational" },
              { label: "Industrial", to: "/projects/industrial" },
              { label: "Villas", to: "/projects/villas" },
              { label: "Interior Design", to: "/projects/interiordesign" },
            ]}
          />

          <Link
            to="/services"
            className={`px-3 py-2 transition ${
              location.pathname === "/services"
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Services
          </Link>

          <Dropdown
            label="Contact"
            to="/contact"
            items={[{ label: "Careers", to: "/careers" }]}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobile && isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {["/", "/about", "/projects", "/services", "/contact"].map(
              (path, i) => (
                <Link
                  key={i}
                  to={path}
                  className="py-2 text-gray-700 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
