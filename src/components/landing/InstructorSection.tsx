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

          <ScrollReveal delayClass="animation-delay-200" className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Tamamen size ait",
                desc: "Beyaz etiketli, kaynak koduna sahip olduğunuz bir platform. Vendor lock-in yok, veriler sizde kalır.",
              },
              {
                title: "Kuruma özel geliştirme",
                desc: "Hazır kalıplar değil; markanıza, süreçlerinize ve kullanıcılarınıza göre tasarlanan bir arayüz.",
              },
              {
                title: "Uçtan uca entegrasyon",
                desc: "Mevcut HR, ERP ve SSO/LDAP sistemlerinizle sorunsuz çalışan, birbirine bağlı bir ekosistem.",
              },
              {
                title: "Kalıcı destek",
                desc: "Teslimattan sonra 12 ay bakım, güncelleme ve teknik destek; her proje için atanmış bir yönetici.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs p-6 shadow-inner">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-emerald-300 border border-white/10">
                  <Check className="h-4.5 w-4.5" strokeWidth={2.5} />
                </div>
                <p className="text-lg font-bold text-white">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-blue-100/90">{item.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


