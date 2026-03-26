import Navbar from "@/components/LandingPage/Navbar";
import Hero from "@/components/LandingPage/Hero";
import Ticker from "@/components/LandingPage/Ticker";
import ForWhom from "@/components/LandingPage/ForWhom";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import DreamSection from "@/components/LandingPage/DreamSection";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/LandingPage/Footer";
import StatsBanner from "@/components/LandingPage/StatsBanner";

export default function LandingPage() {
  return (
    <div className="font-sans bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <StatsBanner />
        <ForWhom />
        <HowItWorks />
        <DreamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
