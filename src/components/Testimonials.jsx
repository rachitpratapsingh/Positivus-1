import { useState } from "react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a tremendous increase in website traffic and leads as a result of their incredible efforts.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just six months. Truly outstanding work.",
    name: "Sarah Davis",
    role: "CEO at StartupHub",
  },
  {
    text: "We've worked with many agencies but Positivus stands out for their data-driven approach, creative thinking, and transparent reporting at every step.",
    name: "Mike Chen",
    role: "Founder at TechVentures",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Testimonials"
        description="Hear from our satisfied clients about real-world results."
      />
      <div className="bg-[#191919] rounded-3xl px-6 sm:px-10 lg:px-14 py-12">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                i === active
                  ? "border-[#B9FF66]"
                  : "border-[#333] hover:border-[#555]"
              }`}
            >
              <p className="text-white text-sm sm:text-base leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="border-t border-[#333] pt-4">
                <p className="text-[#B9FF66] font-bold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-[#B9FF66] w-7 h-2.5"
                  : "bg-[#444] hover:bg-[#666] w-2.5 h-2.5"
              }`}
            />
          ))}
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="ml-4 text-[#B9FF66] hover:text-white transition-colors text-xl font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
