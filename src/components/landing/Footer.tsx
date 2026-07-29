import Link from "next/link";
import { socialIconMap } from "@/components/icons";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: socialIconMap.linkedin },
  { name: "X (Twitter)", href: "#", icon: socialIconMap.x },
  { name: "Instagram", href: "#", icon: socialIconMap.instagram },
];

const footerLinks = {
  Platform: [
    { label: "Moodle", href: "/#moodle" },
    { label: "Özellikler", href: "/#ozellikler" },
    { label: "Sektörler", href: "/#sektorler" },
    { label: "Portföy", href: "/#portfolyo" },
    { label: "Sürecimiz", href: "/#surec" },
  ],
  Hizmetler: [
    { label: "Moodle Geliştirme", href: "/#moodle" },
    { label: "Moodle Entegrasyon", href: "/#demo" },
    { label: "Moodle Bakım & Destek", href: "/#demo" },
  ],
  Şirket: [
    { label: "Ekibimiz", href: "/ekibimiz" },
    { label: "İletişim", href: "/#iletisim" },
    { label: "Demo İste", href: "/#demo" },
  ],
  Yasal: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
    { label: "KVKK", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#0F172A] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo-mark.svg" alt="Bilinç Üssü" className="h-9 w-auto object-contain" />
              <span className="font-bold uppercase text-white tracking-tight">
                Bilinç <span className="text-blue-300">Üssü</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Moodle tabanlı kurumsal LMS geliştirme ve eğitim teknolojisi ajansı.
            </p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{title}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Bilinç Üssü. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-slate-500">
            İstanbul, Türkiye · fatihkarakus563@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

