import CategorySection from "@/components/CategorySection/CategorySection";
import CourseCategories from "@/components/CourseCategories/CourseCategories";
import CourseSection from "@/components/CourseSection/CourseSection";
import CreatorHero from "@/components/CreatorHero/CreatorHero";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import LogoStrip from "@/components/LogoStrip/LogoStrip";
import { Navbar } from "@/components/Navbar/Navbar";
import GrowthSection from "@/components/sections/growth/GrowthSection";
import { TestimonialsSection } from "@/components/TestimonialSection/testimonials-section";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <CategorySection />
      <CourseSection />
      <CourseCategories />
      <GrowthSection />
      <CreatorHero />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
