import { moodleBenefits } from "@/data/landing";
import { Check, ShieldCheck } from "@/components/icons";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

function MoodleMark({ className }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 ${className ?? ""}`}
    >
      <img src="/42LMS-tr.png" alt="42 LMS Logo" className="h-9 w-auto object-contain" />
    </div>
  );
}

export default function MoodleSection() {
  return (
    <section id="moodle" className="border-t border-slate-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <MoodleMark className="mb-6" />

            <SectionHeader
              label="Teknoloji"
              title="Moodle güvencesiyle geliştiriyoruz"
              subtitle="Tüm LMS projelerimizi dünya çapında en yaygın kullanılan açık kaynak öğrenme platformu Moodle üzerine inşa ediyoruz. Kurumsal ihtiyaçlarınıza özel tema, eklenti ve entegrasyonlarla."
            />

            <ul className="mt-8 space-y-3">
              {[
                "Moodle tema ve arayüz özelleştirmesi",
                "Özel plugin ve modül geliştirme",
                "Kurumsal SSO, LDAP ve ERP entegrasyonları",
                "Moodle güncellemeleri ve uzun vadeli bakım desteği",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delayClass="animation-delay-200" className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {moodleBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border-t border-slate-200 pt-6 transition-all duration-300 hover:border-blue-500"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100/50">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{benefit.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal delayClass="animation-delay-300" className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-5 text-center sm:justify-between sm:text-left">
          {[
            { value: "520M+", label: "Dünya genelinde Moodle kullanıcısı" },
            { value: "236", label: "Ülkede aktif kullanım" },
            { value: "146.000+", label: "Kayıtlı Moodle sitesi" },
            { value: "1.500+", label: "Moodle eklentisi" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


