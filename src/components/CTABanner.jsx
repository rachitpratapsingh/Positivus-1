export default function CTABanner() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 pb-16 max-w-7xl mx-auto">
      <div className="bg-[#F3F3F3] rounded-3xl px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-black text-[#191919] mb-4">
            Let's make things happen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Contact us today to learn how our digital marketing services can help
            your business grow and succeed online.
          </p>
          <button className="bg-[#191A2F] text-white rounded-xl px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity duration-200">
            Get your free proposal
          </button>
        </div>

        <div className="hidden sm:flex flex-shrink-0">
          <svg
            viewBox="0 0 310 220"
            className="w-[280px] lg:w-[310px] h-auto"
            role="img"
            aria-label="Decorative CTA illustration"
          >
            <ellipse cx="150" cy="98" rx="98" ry="22" fill="none" stroke="#222" strokeWidth="1.2" />
            <ellipse cx="150" cy="110" rx="104" ry="24" fill="none" stroke="#222" strokeWidth="1.2" opacity="0.85" />
            <ellipse cx="150" cy="122" rx="98" ry="22" fill="none" stroke="#222" strokeWidth="1.2" opacity="0.75" />

            <path d="M190 12 L198 34 L220 26 L206 44 L228 56 L202 58 L206 84 L190 64 L172 84 L178 58 L152 56 L174 44 L160 26 L182 34 Z" fill="none" stroke="#222" strokeWidth="1.2" />

            <circle cx="130" cy="92" r="38" fill="#000" />
            <ellipse cx="118" cy="84" rx="6" ry="12" fill="#fff" />
            <ellipse cx="143" cy="84" rx="6" ry="12" fill="#fff" />

            <path d="M210 84 L220 108 L246 110 L226 126 L232 152 L210 136 L188 152 L194 126 L174 110 L200 108 Z" fill="#DCDCDC" />

            <path d="M120 138 L132 164 L160 176 L132 188 L120 214 L108 188 L80 176 L108 164 Z" fill="#B9FF66" />
          </svg>
        </div>
      </div>
    </section>
  );
}
