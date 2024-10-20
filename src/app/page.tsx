import FeaturedCoureses from "@/components/FeaturedCoureses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestmonialCards from "@/components/TestmonialCards";
import WhyChooseUs from "@/components/ui/WhyChoseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCoureses/>
    <WhyChooseUs/>
    <TestmonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </main>
  );
}

