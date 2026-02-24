import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Search engine optimization",
    variant: "light",
  },
  {
    title: "Pay-per-click advertising",
    variant: "white",
  },
  {
    title: "Social Media Marketing",
    variant: "dark",
  },
  {
    title: "Email Marketing",
    variant: "light",
  },
  {
    title: "Content Creation",
    variant: "white",
  },
  {
    title: "Analytics and Tracking",
    variant: "green",
  },
];

const variantStyles = {
  light: {
    card: "bg-[#F3F3F3] border-[#191919]",
    tag: "bg-[#B9FF66] text-[#191919]",
    text: "text-[#191919]",
    iconBg: "bg-[#191919]",
    iconArrow: "text-[#B9FF66]",
    learnText: "text-[#191919]",
  },
  white: {
    card: "bg-white border-[#191919]",
    tag: "bg-[#191919] text-white",
    text: "text-[#191919]",
    iconBg: "bg-[#191919]",
    iconArrow: "text-[#B9FF66]",
    learnText: "text-[#191919]",
  },
  dark: {
    card: "bg-[#191919] border-[#191919]",
    tag: "bg-[#B9FF66] text-[#191919]",
    text: "text-white",
    iconBg: "bg-[#B9FF66]",
    iconArrow: "text-[#191919]",
    learnText: "text-white",
  },
  green: {
    card: "bg-[#B9FF66] border-[#191919]",
    tag: "bg-[#191919] text-white",
    text: "text-[#191919]",
    iconBg: "bg-[#191919]",
    iconArrow: "text-[#B9FF66]",
    learnText: "text-[#191919]",
  },
};

function ServiceCard({ title, variant }) {
  const s = variantStyles[variant];
  const words = title.split(" ");
  const half = Math.ceil(words.length / 2);
  const line1 = words.slice(0, half).join(" ");
  const line2 = words.slice(half).join(" ");

  return (
    <div
      className={`${s.card} border-2 rounded-3xl p-8 flex flex-col justify-between min-h-[220px] shadow-[4px_4px_0_#191919] hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 cursor-pointer`}
    >
      <h3 className={`text-xl sm:text-2xl font-black leading-snug ${s.text}`}>
        <span className={`${s.tag} rounded-md px-2 py-0.5 inline`}>{line1}</span>
        <br />
        {line2}
      </h3>

      <div className="flex items-center justify-end gap-2 mt-6">
        <span
          className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}
        >
          <span className={`${s.iconArrow} text-lg font-bold leading-none`}>→</span>
        </span>
        <span className={`${s.learnText} font-semibold text-base`}>Learn more</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
