import Link from "next/link";
import { teamIntro, teamMembers } from "@/data/team";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { ArrowRight } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function TeamSection() {
  return (
    <section className="pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="section-label">{teamIntro.label}</p>
          <h1 className="section-title mt-2 max-w-3xl">{teamIntro.title}</h1>

          <div className="mt-6 max-w-3xl space-y-4">
            {teamIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-200" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-300" className="mt-14 rounded-xl border border-slate-200 bg-slate-50/50 p-8 sm:flex sm:items-center sm:justify-between sm:gap-6 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Birlikte çalışalım</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 font-medium">
              Moodle tabanlı LMS projeniz için ekibimizle tanışın. İlk keşif görüşmesi ücretsizdir.
            </p>
          </div>
          <Link href="/#demo" className="pill-btn-primary mt-6 inline-flex shrink-0 items-center gap-2 sm:mt-0">
            Demo İste
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}


