import MoodleSection from "@/components/landing/MoodleSection";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CategoriesSection from "@/components/landing/CategoriesSection";
import CoursesSection from "@/components/landing/CoursesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";

import TestimonialsSection from "@/components/landing/TestimonialsSection";
import InstructorSection from "@/components/landing/InstructorSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MoodleSection />
        <CategoriesSection />
        <CoursesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <InstructorSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
