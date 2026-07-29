import { testimonials } from "@/data/landing";
import { Star } from "@/components/icons";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Referanslar"
            title="Moodle topluluğu ne diyor?"
            subtitle="Üzerine inşa ettiğimiz Moodle platformu hakkında dünya genelindeki kullanıcılardan gerçek geri bildirimler."
          />
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-200" className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col transition"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-5xl font-serif text-blue-200 leading-none select-none -mb-3">&ldquo;</span>
              <p className="flex-1 text-base leading-relaxed text-slate-700 italic font-medium">
                {t.text}
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-sm font-bold text-white shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-semibold">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

