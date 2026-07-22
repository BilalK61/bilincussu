import {
  Search,
  Play,
  Laptop,
  Star,
  Trophy,
  Menu,
  X,
  Code,
  BarChart3,
  Briefcase,
  Palette,
  Megaphone,
  Sprout,
  Clapperboard,
  Languages,
  Bot,
  Globe,
  PlayCircle,
  Smartphone,
  BadgeCheck,
  Users,
  Infinity,
  MessageCircle,
  Check,
  GraduationCap,
  ArrowRight,
  Layers,
  Link,
  ShieldCheck,
  Lightbulb,
  Rocket,
  PenTool,
  Building2,
  HeartPulse,
  Landmark,
  Settings,
  Gauge,
  Mail,
  Phone,
  CalendarCheck,
  ChevronRight,
  ChevronLeft,
  createLucideIcon,
  type LucideIcon,
} from "lucide-react";

export const Linkedin = createLucideIcon("Linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "1" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "2" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "3" }],
]);

export const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "1" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "2" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "3" }],
]);

export const Youtube = createLucideIcon("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1",
    },
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "2" }],
]);

export const featureIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Palette,
  Layers,
  BarChart3,
  Link,
  Smartphone,
  ShieldCheck,
};

export const sectorIconMap: Record<string, LucideIcon> = {
  "Kurumsal Eğitim": Briefcase,
  "Yükseköğretim": GraduationCap,
  "Bootcamp & Akademi": Code,
  "Sağlık & Klinik": HeartPulse,
  "Finans & Bankacılık": Landmark,
  "Kamu & Belediye": Building2,
};

export const socialIconMap = {
  x: X,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
} as const;

export {
  Search,
  Play,
  Laptop,
  Star,
  Trophy,
  Menu,
  X,
  PlayCircle,
  Smartphone,
  BadgeCheck,
  Users,
  Infinity,
  MessageCircle,
  Check,
  GraduationCap,
  ArrowRight,
  Layers,
  Link,
  ShieldCheck,
  Lightbulb,
  Rocket,
  PenTool,
  Building2,
  HeartPulse,
  Landmark,
  Briefcase,
  Settings,
  Gauge,
  BarChart3,
  Mail,
  Phone,
  CalendarCheck,
  ChevronRight,
  ChevronLeft,
  Code,
};

export type { LucideIcon };

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      <span className="text-sm font-bold text-amber-600">{rating.toFixed(1)}</span>
    </span>
  );
}
