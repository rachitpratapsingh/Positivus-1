const logos = ["amazon", "Dribbble", "HubSpot", "notion", "NETFLIX", "zoom"];

export default function LogoBar() {
  return (
    <section className="bg-[#191919] py-7 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 sm:gap-10">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-wide opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
