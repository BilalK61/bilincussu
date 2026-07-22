import { Mail, Phone, CalendarCheck } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section id="demo" className="border-t border-slate-100 bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="section-label">İletişim</p>
            <h2 className="section-title mt-2">
              Projenizi birlikte başlatalım
            </h2>
            <p className="section-subtitle">
              İhtiyaçlarınızı paylaşın, 24 saat içinde teknik ekibimiz sizi
              arasın. İlk görüşme tamamen ücretsiz.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: CalendarCheck, title: "Ücretsiz keşif görüşmesi", desc: "30 dakikalık teknik ihtiyaç analizi" },
                { icon: Mail, title: "E-posta ile ulaşın", desc: "hello@bilincussu.com" },
                { icon: Phone, title: "Telefon", desc: "+90 (212) 000 00 00" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100/50 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-500 font-medium">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delayClass="animation-delay-200" id="iletisim" className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">


            <h3 className="font-bold text-slate-900 text-lg">Demo talep formu</h3>
            <p className="mt-1 text-sm text-slate-500 font-medium">
              Formu doldurun, ekibimiz en geç 24 saat içinde dönüş yapsın.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="pill-input w-full"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Kurum / Şirket
                  </label>
                  <input
                    type="text"
                    placeholder="Şirket adı"
                    className="pill-input w-full"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  İş E-postası
                </label>
                <input
                  type="email"
                  placeholder="siz@sirket.com"
                  className="pill-input w-full"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Kullanıcı Sayısı (tahmini)
                </label>
                <select className="pill-input w-full appearance-none bg-no-repeat bg-[right_1rem_center]">
                  <option value="">Seçin</option>
                  <option>1 – 500</option>
                  <option>500 – 2.000</option>
                  <option>2.000 – 10.000</option>
                  <option>10.000+</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Projenizi kısaca anlatın
                </label>
                <textarea
                  rows={3}
                  placeholder="İhtiyaçlarınız, mevcut altyapınız veya özel gereksinimleriniz..."
                  className="pill-input w-full resize-none"
                />
              </div>

              <button type="submit" className="pill-btn-primary w-full justify-center mt-2">
                Demo Talep Et — Ücretsiz
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

