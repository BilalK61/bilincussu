"use client";

import { useState } from "react";
import { portfolioProjects } from "@/data/landing";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, ArrowRight } from "@/components/icons";

export default function CoursesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolyo" className="border-t border-slate-100 bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Portföy"
            title="Referans projelerimiz"
            subtitle="Her biri kendi sektöründe bir örnek proje. Detayları görmek için iletişime geçin."
          />
        </ScrollReveal>

        <ScrollReveal delayClass="animation-delay-200" className="relative mt-12 group px-0 sm:px-4">
          {/* Sol Ok Butonu */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 shadow-md hover:shadow-lg sm:-left-2"
            aria-label="Önceki Proje"
          >
            <ChevronLeft className="h-5.5 w-5.5" />
          </button>

          {/* Sağ Ok Butonu */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 shadow-md hover:shadow-lg sm:-right-2"
            aria-label="Sonraki Proje"
          >
            <ChevronRight className="h-5.5 w-5.5" />
          </button>

          {/* Slider Maskesi */}
          <div className="overflow-hidden w-full py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {portfolioProjects.map((project) => (
                <div key={project.id} className="w-full shrink-0 px-4 sm:px-6">
                  {/* Bireysel Proje Kartı */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                      {/* Sol Kısım - Detaylar */}
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-blue-50 border border-blue-100/50 px-3 py-1 text-xs font-semibold text-blue-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {project.sector}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                          {project.client}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-500 font-medium">
                          {project.description}
                        </p>

                        <div className="mt-6">
                          <a
                            href="#demo"
                            className="pill-btn-primary inline-flex items-center gap-2"
                          >
                            Detay ve Proje Sunumu İste
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      {/* Sağ Kısım - Büyük Metrik Kartı */}
                      <div className="lg:col-span-5">
                        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} p-8 text-white shadow-md shadow-blue-900/5 min-h-[220px] flex flex-col justify-between`}>
                          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 backdrop-blur-3xl" />
                          <div>
                            <span className="rounded bg-white/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-xs">
                              Başarı Metriği
                            </span>
                          </div>
                          <div className="relative z-10">
                            <p className="text-5xl font-black tracking-tight">{project.metric}</p>
                            <p className="mt-1 text-sm font-semibold text-blue-100/90">{project.metricLabel}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Nokta Göstergeleri */}
        <div className="mt-8 flex justify-center gap-2">
          {portfolioProjects.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Slayt ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
