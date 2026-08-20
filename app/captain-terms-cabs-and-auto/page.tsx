import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Car, ArrowLeft, Phone, Mail, Award } from "lucide-react";

export default function CaptainTermsCabsAuto() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-inter">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sora font-bold text-gray-500 hover:text-[#111111] transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFB400]/20 text-[#111111] font-sora font-extrabold text-xs uppercase tracking-wider mb-3">
              <Car className="w-3.5 h-3.5 text-[#111111]" />
              <span>CAPTAIN PARTNER TERMS</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Captain Terms & Conditions — Cabs & Auto
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Partner Terms for Cab & Auto-Rickshaw Operators ・ FoxRun Mobility
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-4">
            <Award className="w-6 h-6 text-[#FFB400] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              These terms govern commercial cab drivers and auto-rickshaw partners operating on the FoxRun network. We guarantee fair trip distribution, zero arbitrary penalties, and direct weekly settlements.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Vehicle & Commercial Permit Compliance
              </h2>
              <p>
                All cab and auto captains must maintain valid commercial vehicle permits, fitness certificates, commercial insurance, and driver badges as mandated by the Regional Transport Office (RTO).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Automated Dispatch & Accept Rates
              </h2>
              <p>
                FoxRun uses an unbiased geospatial matching engine to assign nearby rides. Captains are expected to maintain high ride acceptance rates and ensure prompt pickup times.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Vehicle Hygiene & Passenger Courtesy
              </h2>
              <p>
                Cab and auto interiors must be kept clean, well-ventilated, and air-conditioned (for AC cab bookings). Captains must exhibit professional courtesy and respect toward all passengers.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl text-[#111827]">
                Captain Partner Support
              </h2>
              <p className="text-gray-600">
                For account verification or earnings assistance, contact FoxRun Captain Support:
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold">
                <a href="mailto:Contact@Foxrun.in" className="inline-flex items-center gap-2 text-[#111111] hover:text-[#FFB400] transition-colors">
                  <Mail className="w-4 h-4 text-[#FFB400]" />
                  <span>Contact@Foxrun.in</span>
                </a>
                <a href="tel:02269620985" className="inline-flex items-center gap-2 text-[#111111] hover:text-[#FFB400] transition-colors">
                  <Phone className="w-4 h-4 text-[#FFB400]" />
                  <span>02269620985</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
