import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "@/components/icons";

const PORTFOLIO_URL = "https://bilincussu.4pp.studio/";

export default function CoursesSection() {
  return (
    <section id="portfolyo" className="border-t border-slate-100 bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Portföy"
            title="Referans projemiz"
            subtitle="Moodle tabanlı, kuruma özel tasarladığımız canlı LMS örneğimiz. İncelemek için ziyaret edin."
          />
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-200" className="mt-12">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Sol Kısım - Detaylar */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Moodle", "Kurumsal LMS", "Beyaz Etiket", "SSO"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-blue-50 border border-blue-100/50 px-3 py-1 text-xs font-semibold text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Kurumsal Öğrenme Platformu
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <img
                    src="/gt4t-logo.svg"
                    alt="GT4T LMS logo"
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    GT4T LMS
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-500 font-medium">
                  Moodle&apos;ın kanıtlanmış altyapısı üzerine kurduğumuz, tamamen
                  özelleştirilebilir ve beyaz etiketli öğrenme yönetim sistemi.
                  Canlı örneği inceleyerek neler yapabileceğimizi görün.
                </p>

                <div className="mt-6">
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn-primary inline-flex items-center gap-2"
                  >
                    Portföyü Gör
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Sağ Kısım - Büyük Metrik Kartı */}
              <div className="lg:col-span-5">
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white shadow-md shadow-blue-900/5 min-h-[220px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 backdrop-blur-3xl" />
                  <div>
                    <span className="rounded bg-white/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-xs">
                      Canlı Örnek
                    </span>
                  </div>
                  <div className="relative z-10">
                    <p className="text-3xl font-black tracking-tight">bilincussu.4pp.studio</p>
                    <p className="mt-1 text-sm font-semibold text-blue-100/90">projeyi canlı incele</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
