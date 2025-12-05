import DreamSection from "@/components/LandingPage/DreamSection";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/LandingPage/Footer";
import ForWhom from "@/components/LandingPage/ForWhom";
import Hero from "@/components/LandingPage/Hero";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import Navbar from "@/components/LandingPage/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ForWhom />
      <DreamSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
