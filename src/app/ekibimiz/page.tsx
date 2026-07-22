import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TeamSection from "@/components/team/TeamSection";

export const metadata: Metadata = {
  title: "Ekibimiz | Bilinç Üssü",
  description:
    "Bilinç Üssü ekibi: Moodle tabanlı LMS geliştirme, yapay zeka, ürün geliştirme ve iş geliştirme alanlarında uzman kadro.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
