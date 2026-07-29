"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "@/components/icons";

const navLinks = [
  { href: "/#moodle", label: "Moodle" },
  { href: "/#sektorler", label: "Sektörler" },
  { href: "/#portfolyo", label: "Portföy" },
  { href: "/#surec", label: "Nasıl Çalışıyoruz?" },
  { href: "/ekibimiz", label: "Ekibimiz" },
];

const SCROLL_THRESHOLD = 20;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkTheme = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${scrolled
        ? "border-slate-200/0 bg-white/0 px-4 pt-4 sm:px-6"
        : "border-slate-100/0 bg-transparent px-0 pt-0"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between gap-3 transition-all duration-300 sm:gap-4 border ${scrolled
            ? "rounded-full border-slate-200/80 bg-white/50 px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "rounded-none border-slate-200/0 bg-white/0 px-0 py-4"
            }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2 pl-0.5">
            <img src="/logo-mark.svg" alt="Bilinç Üssü" className="h-10 w-auto object-contain" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className={`text-base font-extrabold uppercase tracking-tight transition-colors duration-300 ${isDarkTheme ? "text-white" : "text-slate-900"}`}>
                Bilinç{" "}
                <span className={`transition-colors duration-300 ${isDarkTheme ? "text-blue-200" : "text-blue-600"}`}>
                  Üssü
                </span>
              </span>
              <span className={`mt-0.5 text-[11px] font-semibold tracking-tight transition-colors duration-300 ${isDarkTheme ? "text-blue-100/80" : "text-blue-600"}`}>
                Kurumlar için LMS altyapısı
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {!isHome && (
              <li>
                <Link
                  href="/"
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Anasayfa
                </Link>
              </li>
            )}
            {navLinks.map((link) => {
              const active = link.href === "/ekibimiz" && pathname === "/ekibimiz";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${isDarkTheme
                      ? active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                      : active ? "bg-blue-50/50 text-blue-600" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#iletisim"
              className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:inline-flex ${isDarkTheme
                ? "text-white/90 hover:bg-white/10 hover:text-white"
                : "text-slate-700 hover:bg-slate-50"
                }`}
            >
              İletişim
            </Link>
            <Link
              href="/#demo"
              className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow ${isDarkTheme
                ? "bg-white text-blue-700 hover:bg-slate-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Demo İste
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`inline-flex rounded-lg p-2 transition-all duration-300 lg:hidden ${isDarkTheme
                ? "text-white/90 hover:bg-white/10"
                : "text-slate-600 hover:bg-slate-50"
                }`}
              aria-label="Menü"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            className={`mt-2 overflow-hidden border border-slate-200/80 bg-white/95 p-4 backdrop-blur-xl lg:hidden ${scrolled
              ? "rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              : "border-t-0 border-x-0 bg-white"
              }`}
          >
            <ul className="space-y-1">
              {!isHome && (
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Anasayfa
                  </Link>
                </li>
              )}
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-slate-100 pt-2">
                <Link
                  href="/#iletisim"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

