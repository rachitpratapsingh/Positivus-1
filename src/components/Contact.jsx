import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [type, setType] = useState("Say Hi");

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Contact Us"
        description="Connect with us to start your digital journey today."
      />
      <div className="bg-[#F3F3F3] rounded-3xl px-6 sm:px-12 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
        {/* Form */}
        <div className="w-full max-w-xl">
          {/* Radio */}
          <div className="flex gap-8 mb-8">
            {["Say Hi", "Get a Quote"].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2.5 cursor-pointer font-semibold text-[#191919] text-sm"
              >
                <input
                  type="radio"
                  name="contact_type"
                  checked={type === opt}
                  onChange={() => setType(opt)}
                  className="w-5 h-5 accent-[#191919]"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Fields */}
          {[
            { label: "Name", placeholder: "Your name", type: "text" },
            { label: "Email *", placeholder: "your@email.com", type: "email" },
          ].map((f) => (
            <div key={f.label} className="mb-5">
              <label className="block text-sm font-semibold text-[#191919] mb-2">
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                className="w-full border-2 border-[#191919] rounded-xl px-4 py-3.5 text-sm font-medium text-[#191919] placeholder-gray-400 bg-white outline-none focus:ring-2 focus:ring-[#B9FF66] transition"
              />
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#191919] mb-2">
              Message
            </label>
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full border-2 border-[#191919] rounded-xl px-4 py-3.5 text-sm font-medium text-[#191919] placeholder-gray-400 bg-white outline-none focus:ring-2 focus:ring-[#B9FF66] transition resize-none"
            />
          </div>

          <button className="bg-[#191919] text-white rounded-full px-10 py-4 text-base font-semibold hover:bg-[#333] transition-colors duration-200">
            Send Message
          </button>
        </div>

        {/* Decoration */}
        <div className="hidden md:flex w-44 h-44 rounded-full bg-gradient-to-br from-[#B9FF66] to-[#e8ffb0] items-center justify-center text-6xl flex-shrink-0 shadow-lg">
          ✦
        </div>
      </div>
    </section>
  );
}
