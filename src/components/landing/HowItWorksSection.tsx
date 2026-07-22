import { processSteps } from "@/data/landing";
import { Lightbulb, PenTool, Code, Rocket, ArrowRight, type LucideIcon } from "@/components/icons";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const stepIcons: LucideIcon[] = [Lightbulb, PenTool, Code, Rocket];

export default function HowItWorksSection() {
  return (
    <section id="surec" className="bg-[#0F172A] py-16 text-white sm:py-24 border-y border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Sürecimiz"
            title="Projeden yayına — adım adım"
            subtitle="İlk görüşmeden lansmana kadar şeffaf, öngörülebilir bir süreç."
            variant="dark"
          />
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-200" className="mt-14 grid gap-10 md:grid-cols-4">
          {processSteps.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={item.step} className="relative text-center md:text-left">
                {/* Ok Şeklindeki Bağlantı Çizgisi */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[3.25rem] right-[-1.5rem] top-6 hidden items-center md:flex z-0">
                    <div className="h-0.5 flex-1 border-t border-dashed border-slate-700" />
                    <ArrowRight className="h-4 w-4 -ml-1 text-blue-500" />
                  </div>
                )}

                {/* Yuvarlak Adım Numarası */}
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-base text-white shadow-lg shadow-blue-500/10 border border-blue-400/20">
                  {item.step}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2.5 md:justify-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-950 text-blue-400 border border-blue-900/50">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}



