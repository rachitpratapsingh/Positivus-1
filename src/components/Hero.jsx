export default function Hero() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-12 sm:py-14 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-[#191919] mb-6">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base sm:text-lg text-[#4b4b4b] leading-relaxed max-w-lg mb-8">
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="bg-[#191A2F] text-white rounded-xl px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity duration-200">
            Book a consultation
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <svg
            viewBox="0 0 520 380"
            className="w-full max-w-[520px] h-auto"
            role="img"
            aria-label="Marketing megaphone illustration"
          >
            <ellipse cx="300" cy="210" rx="185" ry="45" fill="none" stroke="#222" strokeWidth="1.5" transform="rotate(26 300 210)" />
            <ellipse cx="300" cy="210" rx="160" ry="35" fill="none" stroke="#222" strokeWidth="1.5" opacity="0.8" transform="rotate(26 300 210)" />
            <ellipse cx="300" cy="210" rx="210" ry="55" fill="none" stroke="#222" strokeWidth="1.5" opacity="0.7" transform="rotate(26 300 210)" />

            <circle cx="130" cy="85" r="16" fill="#000" />
            <circle cx="170" cy="122" r="12" fill="#B9FF66" />
            <circle cx="410" cy="335" r="9" fill="#B9FF66" />

            <path d="M145 250 L160 280 L190 292 L160 304 L145 338 L130 304 L100 292 L130 280 Z" fill="#000" />
            <path d="M316 315 L324 331 L342 336 L324 342 L316 360 L308 342 L290 336 L308 331 Z" fill="#000" />

            <g transform="rotate(-28 286 168)">
              <rect x="190" y="170" width="140" height="52" rx="26" fill="#B9FF66" stroke="#111" strokeWidth="2" />
              <rect x="168" y="170" width="34" height="52" rx="12" fill="#111" />
              <rect x="154" y="176" width="20" height="40" rx="9" fill="#fff" stroke="#111" strokeWidth="2" />

              <ellipse cx="346" cy="196" rx="80" ry="86" fill="#f8f8f8" stroke="#111" strokeWidth="2" />
              <ellipse cx="346" cy="196" rx="66" ry="72" fill="none" stroke="#111" strokeWidth="2" />

              <ellipse cx="298" cy="196" rx="10" ry="30" fill="#111" />
              <ellipse cx="318" cy="196" rx="12" ry="30" fill="#B9FF66" />

              <rect x="244" y="216" width="20" height="100" rx="10" fill="#111" />
            </g>

            <g>
              <circle cx="435" cy="76" r="27" fill="#000" />
              <path d="M442 72c0-6 5-11 11-11 4 0 7 2 9 5 2-3 5-5 9-5 6 0 11 5 11 11 0 10-10 16-20 24-10-8-20-14-20-24Z" fill="#fff" transform="scale(0.62) translate(254 58)" />

              <circle cx="492" cy="86" r="27" fill="#B9FF66" />
              <circle cx="483" cy="86" r="4.2" fill="#000" />
              <circle cx="497" cy="78" r="4.2" fill="#000" />
              <circle cx="497" cy="94" r="4.2" fill="#000" />
              <line x1="486" y1="84.5" x2="494" y2="79.5" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="486" y1="87.5" x2="494" y2="92.5" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />

              <circle cx="472" cy="156" r="27" fill="#000" />
              <polygon points="464,144 485,156 464,168" fill="#fff" />

              <circle cx="488" cy="242" r="27" fill="#B9FF66" />
              <path d="M488 229c-8 0-14 6-14 14 0 11 14 23 14 23s14-12 14-23c0-8-6-14-14-14Zm0 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" fill="#000" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}


