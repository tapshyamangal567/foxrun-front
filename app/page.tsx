import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      {/* Sticky #111111 Black Header */}
      <Header />

      {/* Main Home Page Sections */}
      <main className="flex-grow">
        {/* Hero Section (White #FFFFFF) */}
        <Hero />

        {/* Mobility Metrics Strip (#FFB400) */}
        <TrustStrip />

        {/* How It Works (Alternate #FFB400) */}
        <HowItWorks />

        {/* Features (White #FFFFFF) */}
        <Features />

        {/* Value Proposition (Alternate #FFB400) */}
        <ValueProposition />

        {/* Testimonials (White #FFFFFF) */}
        <Testimonials />

        {/* Download App Glass CTA (Alternate #FFB400) */}
        <DownloadCTA />

        {/* Contact Section (White #FFFFFF) */}
        <ContactSection />
      </main>

      {/* Black #111111 Footer */}
      <Footer />
    </div>
  );
}
