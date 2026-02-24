export default function SectionHeader({ label, description }) {
  return (
    <div className="flex flex-wrap items-center gap-6 mb-10">
      <h2 className="bg-[#B9FF66] text-[#191919] rounded-lg px-4 py-1 text-2xl sm:text-3xl lg:text-4xl font-black whitespace-nowrap">
        {label}
      </h2>
      {description && (
        <p className="text-[#191919] text-base sm:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
