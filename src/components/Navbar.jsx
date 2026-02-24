import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-xl text-[#191919]">
          <span className="w-7 h-7 bg-[#191919] rounded-full flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <polygon points="7,1 13,13 1,13" fill="#B9FF66" />
            </svg>
          </span>
          Positivus
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#191919] font-medium text-[15px] hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="border-2 border-[#191919] rounded-full px-6 py-2.5 font-semibold text-sm hover:bg-[#191919] hover:text-white transition-all duration-200">
            Request a quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-[#191919]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-gray-100 bg-white">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#191919] font-medium text-base py-1"
            >
              {link}
            </a>
          ))}
          <button className="self-start border-2 border-[#191919] rounded-full px-6 py-2.5 font-semibold text-sm bg-[#B9FF66]">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
}
