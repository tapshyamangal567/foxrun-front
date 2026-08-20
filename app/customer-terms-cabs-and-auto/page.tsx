import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Car, ArrowLeft, Phone, Mail } from "lucide-react";

export default function CustomerTermsCabsAuto() {
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
              <span>LEGAL TERMS</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Customer Terms & Conditions — Cabs & Auto
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Last updated: August 17, 2026 ・ FoxRun India (OPC) Private Limited
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#FFB400] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              These terms govern your bookings for FoxRun Cabs, Auto-Rickshaws, and self-drive vehicle services. By using FoxRun, you agree to these transparent booking, payment, and ride safety policies.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Four-Wheeler & Auto Ride Bookings
              </h2>
              <p>
                FoxRun enables riders to book four-wheeler cabs (Hatchbacks, Sedans, SUVs) and auto-rickshaws through our intelligent geospatial dispatch system. All drivers operate verified vehicles complying with commercial transport permits.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Fare Estimates, Tolls & Waiting Charges
              </h2>
              <p>
                Fares displayed before booking represent fixed or meter-guaranteed rates based on distance and route. Additional charges such as toll gate fees, parking fees, or state entry taxes incurred during the trip are added directly to the final invoice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Luggage & Seating Capacity
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Cab seating capacity must strictly conform to vehicle registration limits (4 passengers for Sedans, up to 6 for SUVs).</li>
                <li>Auto-rickshaws accommodate up to 3 adult passengers.</li>
                <li>Passengers are responsible for their personal belongings during and after the trip.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                4. In-App SOS & Emergency Support
              </h2>
              <p>
                Every FoxRun cab and auto ride includes live 24/7 GPS telemetry tracking and an in-app emergency SOS alert button that connects directly with our safety control room and emergency authorities.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl text-[#111827]">
                Support & Inquiries
              </h2>
              <p className="text-gray-600">
                For fare clarifications or lost property assistance, reach out to FoxRun Customer Care:
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
