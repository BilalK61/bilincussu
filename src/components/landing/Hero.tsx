import { ArrowRight, BadgeCheck, ChevronRight } from "@/components/icons";

export default function Hero() {
  return (
    <section className="gradient-hero overflow-hidden pb-28 pt-32 sm:pb-40 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <a
              href="#moodle"
              className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/15"
            >
              <img src="/42LMS-tr.png" alt="42 LMS Logo" className="h-5 w-auto object-contain" />
              Moodle güvencesiyle geliştiriyoruz
              <ChevronRight className="h-3 w-3" />
            </a>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Kurumunuz için{" "}
              <span className="bg-gradient-to-r from-blue-200 to-sky-100 bg-clip-text text-transparent">
                özel LMS
              </span>{" "}
              inşa ediyoruz
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-blue-100/90">
              Şirketlere, üniversitelere ve eğitim kurumlarına — Moodle tabanlı,
              beyaz etiketli ve tam özelleştirilebilir öğrenme yönetim sistemleri.
              Moodle&apos;ın kanıtlanmış altyapısı üzerine kuruma özel tasarlıyor,
              entegre ediyor ve yayına alıyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-md transition hover:bg-blue-50 inline-flex items-center justify-center gap-2">
                Ücretsiz Demo İste
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolyo" className="rounded-xl border border-white/30 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 hover:border-white/50 inline-flex items-center justify-center gap-2">
                Portföyü Gör
              </a>
            </div>
          </div>



          <div className="relative hidden lg:block animate-fade-in-up animation-delay-200">

            <div className="space-y-4">
              <div className="ml-8 rounded-xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">Platform Analitikleri</p>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/40">Canlı</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "12.4K", label: "Aktif Kullanıcı" },
                    { value: "%94", label: "Tamamlama" },
                    { value: "4.8★", label: "Ortalama Puan" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-slate-50/50 p-3 text-center border border-slate-100">
                      <p className="text-lg font-bold text-slate-900">{item.value}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Yeni Çalışan Onboarding", pct: 82 },
                    { label: "Liderlik Geliştirme", pct: 67 },
                    { label: "Uyumluluk Eğitimleri", pct: 95 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex justify-between text-xs text-slate-500">
                        <span>{item.label}</span>
                        <span className="font-semibold text-slate-700">%{item.pct}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mr-8 rounded-xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-100">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-sm">
                    G
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">Garanti BBVA Akademi</p>
                    <p className="text-xs text-slate-500">Moodle tabanlı kurumsal LMS · 12.000+ kullanıcı</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["Moodle", "SCORM", "SSO", "Analitik"].map((tag) => (
                        <span key={tag} className="rounded bg-blue-50/50 px-2 py-0.5 text-xs font-semibold text-blue-600 border border-blue-100/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-8 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">Proje Teslim Edildi</p>
                    <p className="text-xs text-emerald-700">Yeditepe Üniversitesi LMS — 4 ayda yayında</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

