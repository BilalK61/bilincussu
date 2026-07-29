"use client";

import { useState } from "react";
import { sectors } from "@/data/landing";
import { sectorIconMap } from "@/components/icons";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, ArrowRight } from "@/components/icons";

const sectorDetailsMap: Record<string, string[]> = {
  "Kurumsal Eğitim": [
    "HR ve ERP sistemleri ile tam entegrasyon",
    "Otomatik işe alım (onboarding) süreçleri",
    "Çalışan yetkinlik matrisi ve gelişim yolları",
    "Detaylı uyumluluk ve ROI raporlama modülleri",
  ],
  "Yükseköğretim": [
    "Öğrenci İşleri Bilgi Sistemi (ÖBS) entegrasyonu",
    "Çevrimiçi sınav, ödev ve notlandırma modülleri",
    "Akademik takvim ve ders programı senkronizasyonu",
    "Yüksek trafikli sınav dönemlerine özel sunucu gücü",
  ],
  "Bootcamp & Akademi": [
    "Grup (cohort) tabanlı eğitim ve canlı dersler",
    "Eğitmen değerlendirmesi ve interaktif ödev paneli",
    "Öğrenci ilerleme durumu takibi ve başarı rozetleri",
    "GitHub ve harici geliştirici araçları entegrasyonu",
  ],
  "Sağlık & Klinik": [
    "Tıbbi akreditasyona uygun zorunlu eğitimler",
    "Süreli ve yenilenmesi gereken sertifika takibi",
    "Departman bazlı otomatik eğitim atamaları",
    "KVKK uyumlu güvenli ve izole bulut altyapısı",
  ],
  "Finans & Bankacılık": [
    "BDDK ve SPK mevzuatlarına tam uyumluluk",
    "Kurumsal Active Directory / SSO giriş desteği",
    "Yüksek güvenlik standartları ve pentest onayı",
    "Gelişmiş veri şifreleme ve audit log günlükleri",
  ],
  "Kamu & Belediye": [
    "Yüksek ölçeklenebilir barındırma çözümleri",
    "Vatandaş eğitim portalları ve e-Devlet entegrasyonu",
    "Erişilebilirlik (WCAG) standartlarına uyumlu arayüz",
    "Yerli veri merkezi barındırma opsiyonu",
  ],
};

export default function CategoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSector = sectors[activeIndex];
  const Icon = sectorIconMap[activeSector.name];
  const details = sectorDetailsMap[activeSector.name] || [];

  return (
    <section id="sektorler" className="border-t border-slate-100 py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Sektörler"
            title="Hangi sektörlere hizmet veriyoruz?"
            subtitle="Her sektörün kendine özgü eğitim ihtiyaçları var. Biz bunu biliyoruz."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Sol Kolon - Sekme Seçici */}
          <ScrollReveal className="lg:col-span-4 flex flex-col gap-1.5 justify-center">
            {sectors.map((sector, index) => {
              const isActive = index === activeIndex;
              const SectorIcon = sectorIconMap[sector.name];
              return (
                <button
                  key={sector.name}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3.5 w-full rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-l-4 border-l-blue-600 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-l-transparent"
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                    isActive ? "bg-blue-600 text-white border-blue-600" : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}>
                    {SectorIcon && <SectorIcon className="h-4.5 w-4.5" />}
                  </span>
                  <div className="flex-1 truncate">
                    <span>{sector.name}</span>
                  </div>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Sağ Kolon - Detay Paneli */}
          <ScrollReveal delayClass="animation-delay-200" className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-10 shadow-xs">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${activeSector.gradient} text-white shadow-sm`}>
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{activeSector.name}</h3>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-base leading-relaxed text-slate-600 font-medium">
                  {activeSector.description}
                </p>

                <h4 className="mt-8 text-sm font-bold uppercase tracking-wider text-slate-800">
                  Öne Çıkan Çözümlerimiz:
                </h4>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-slate-100 pt-8 flex items-center justify-between">
                <a
                  href="#demo"
                  className="pill-btn-primary inline-flex items-center gap-2"
                >
                  Sektörel Çözüm Talebi
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
