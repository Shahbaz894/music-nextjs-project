import FeaturedCoureses from "@/components/FeaturedCoureses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChoseUs";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCoureses/>
    <WhyChooseUs/>
    </main>
  );
}

