import { useState } from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "02",
    title: "Research and Strategy Development",
    desc: "We conduct in-depth research on your industry, competitors, and target audience to craft a comprehensive, data-backed strategy aligned with your goals.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Our team of experts executes the strategy with precision, leveraging the latest tools and techniques to drive measurable results.",
  },
  {
    num: "04",
    title: "Monitoring and Optimization",
    desc: "We continuously monitor performance metrics and optimize campaigns to ensure maximum ROI and sustained growth.",
  },
  {
    num: "05",
    title: "Reporting and Communication",
    desc: "You receive regular, transparent reports and we maintain open communication to keep you fully informed of progress and next steps.",
  },
  {
    num: "06",
    title: "Continual Improvement",
    desc: "We analyze results, incorporate learnings, and refine our approach so your business continues to grow beyond the initial campaign.",
  },
];

export default function WorkingProcess() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Our Working Process"
        description="Step-by-step guide to achieving your business goals."
      />
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className={`border-2 border-[#191919] rounded-3xl px-6 sm:px-10 cursor-pointer shadow-[4px_4px_0_#191919] transition-all duration-300 ${
                isOpen ? "bg-[#B9FF66] py-8" : "bg-[#F3F3F3] py-5"
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span className="text-4xl sm:text-5xl font-black text-[#191919] leading-none">
                    {step.num}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-[#191919]">
                    {step.title}
                  </span>
                </div>
                <span className="w-9 h-9 border-2 border-[#191919] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl text-[#191919]">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="mt-5 pt-5 border-t border-[#191919]">
                  <p className="text-[#191919] text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
