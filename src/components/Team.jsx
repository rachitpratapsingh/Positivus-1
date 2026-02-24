import SectionHeader from "./SectionHeader";

const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "https://i.pravatar.cc/160?img=5",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    image: "https://i.pravatar.cc/160?img=47",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    image: "https://i.pravatar.cc/160?img=15",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    image: "https://i.pravatar.cc/160?img=32",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
    image: "https://i.pravatar.cc/160?img=12",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    image: "https://i.pravatar.cc/160?img=44",
  },
];

function AvatarBlob({ image, name }) {
  return (
    <div className="relative w-20 h-20 shrink-0">
      <div className="absolute inset-0 bg-[#191919] rounded-[52%_48%_45%_55%/56%_44%_56%_44%] translate-x-1.5 translate-y-1" />
      <div className="absolute inset-0 bg-[#B9FF66] rounded-[52%_48%_45%_55%/56%_44%_56%_44%] rotate-[18deg]" />
      <div className="absolute inset-[14px] rounded-full overflow-hidden border border-[#191919]/20">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale" loading="lazy" />
      </div>
    </div>
  );
}

function TeamCard({ name, role, desc, image }) {
  return (
    <article className="border-2 border-[#191919] rounded-[30px] p-6 bg-white shadow-[0_5px_0_#191919]">
      <div className="relative pb-4 mb-4 border-b border-[#7a7a7a]">
        <span className="absolute right-0 top-0 w-7 h-7 rounded-full bg-black text-[#B9FF66] text-xs font-bold flex items-center justify-center">
          in
        </span>

        <div className="flex items-center gap-4 pr-10">
          <AvatarBlob image={image} name={name} />
          <div>
            <p className="font-bold text-xl leading-tight text-[#191919]">{name}</p>
            <p className="text-[#3b3b3b] text-lg leading-tight mt-1">{role}</p>
          </div>
        </div>
      </div>

      <p className="text-[#3b3b3b] text-base leading-relaxed">{desc}</p>
    </article>
  );
}

export default function Team() {
  return (
    <section className="bg-[#f2f2f2] px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <SectionHeader
        label="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-[#191A2F] text-white rounded-2xl px-10 py-4 text-lg font-medium hover:opacity-90 transition-opacity">
          See all team
        </button>
      </div>
    </section>
  );
}
