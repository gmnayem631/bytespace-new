import CategorySection from "@/components/CategorySection/CategorySection";
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
    </div>
  );
}
