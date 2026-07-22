import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-slate-900 leading-tight">{member.name}</h3>
        {member.role && (
          <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">{member.role}</p>
        )}
      </div>
    </article>
  );
}

