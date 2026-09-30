import CategorySection from "@/components/CategorySection/CategorySection";
import CourseCategories from "@/components/CourseCategories/CourseCategories";
import CourseSection from "@/components/CourseSection/CourseSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import LogoStrip from "@/components/LogoStrip/LogoStrip";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <CategorySection />
      <CourseSection />
      <CourseCategories />
    </div>
  );
}
