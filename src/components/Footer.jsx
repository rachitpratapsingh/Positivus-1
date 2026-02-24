const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
const socials = [
  { label: "𝕏", href: "#" },
  { label: "in", href: "#" },
  { label: "f", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white px-4 sm:px-6 lg:px-10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-wrap justify-between items-center gap-6 pb-8 border-b border-[#333]">
          {/* Logo */}
          <div className="flex items-center gap-2 font-black text-xl">
            <span className="w-7 h-7 bg-[#B9FF66] rounded-full flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <polygon points="7,1 13,13 1,13" fill="#191919" />
              </svg>
            </span>
            Positivus
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-white underline text-sm hover:text-[#B9FF66] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 bg-[#B9FF66] rounded-full flex items-center justify-center text-[#191919] font-black text-sm hover:bg-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact info & newsletter */}
        <div className="flex flex-wrap justify-between gap-10 py-10 border-b border-[#333]">
          <div>
            <span className="inline-block bg-[#191919] border border-[#B9FF66] rounded-md px-3 py-1 text-[#B9FF66] font-bold text-sm mb-3">
              Contact us:
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email:{" "}
              <a href="mailto:info@positivus.com" className="hover:text-[#B9FF66]">
                info@positivus.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">Phone: 555-567-8901</p>
            <p className="text-gray-400 text-sm">
              123 Digital Ave, Suite 100, New York, NY 10001
            </p>
          </div>

          {/* Newsletter */}
          <div className="bg-[#292929] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 self-start">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-[#555] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#B9FF66] transition w-52"
            />
            <button className="bg-[#B9FF66] text-[#191919] rounded-xl px-5 py-3 text-sm font-bold whitespace-nowrap hover:bg-white transition-colors">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 text-xs text-gray-500">
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <a href="#" className="text-gray-500 underline hover:text-[#B9FF66] transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
