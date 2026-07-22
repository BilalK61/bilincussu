import { Check } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const differentiators = [
  "Tüm projeler Moodle altyapısı üzerine inşa edilir",
  "Moodle tema, plugin ve entegrasyon uzmanlığı",
  "Her proje için atanmış teknik proje yöneticisi",
  "Teslimattan sonra 12 ay Moodle bakım desteği dahil",
  "KVKK uyumlu, yerli barındırma seçeneği",
  "Mevcut HR / ERP sistemlerinizle tam entegrasyon",
];

export default function InstructorSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-[#0A2540] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
              Neden Bilinç Üssü?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Rakiplerden farkımız ne?
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-100/90">
              Hazır SaaS LMS çözümleri kurumunuza uymayabilir. Biz Moodle&apos;ın
              kanıtlanmış altyapısını kurumunuza özel tema, eklenti ve
              entegrasyonlarla özelleştiriyoruz.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-100/80">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-slate-50"
            >
              Ücretsiz Keşif Görüşmesi Ayarla
            </a>
          </ScrollReveal>

          <ScrollReveal delayClass="animation-delay-200" className="grid grid-cols-2 gap-6">
            {[
              { value: "54+", label: "Teslim edilen proje" },
              { value: "180K+", label: "Aktif kullanıcı" },
              { value: "7 yıl", label: "Sektör deneyimi" },
              { value: "%97", label: "Müşteri memnuniyeti" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs p-5 shadow-inner">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


