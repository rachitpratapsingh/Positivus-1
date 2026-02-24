import SectionHeader from "./SectionHeader";

const cases = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key terms and a 40% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 200% and generated a 25% increase in online sales.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Case Studies"
        description="Explore our real-world impact through these case studies."
      />
      <div className="bg-[#191919] rounded-3xl grid grid-cols-1 sm:grid-cols-3 overflow-hidden">
        {cases.map((c, i) => (
          <div
            key={i}
            className={`p-8 sm:p-10 flex flex-col gap-6 ${
              i < cases.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-gray-700"
                : ""
            }`}
          >
            <p className="text-white text-sm sm:text-base leading-relaxed">{c.text}</p>
            <a
              href="#"
              className="text-[#B9FF66] font-semibold text-base flex items-center gap-1 hover:gap-3 transition-all duration-200"
            >
              Learn more <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
