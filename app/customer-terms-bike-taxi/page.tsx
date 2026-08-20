import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Bike, ArrowLeft, Phone, Mail } from "lucide-react";

export default function CustomerTermsBikeTaxi() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-inter">
          {/* Back Navigation & Breadcrumb */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sora font-bold text-gray-500 hover:text-[#111111] transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFB400]/20 text-[#111111] font-sora font-extrabold text-xs uppercase tracking-wider mb-3">
              <Bike className="w-3.5 h-3.5 text-[#111111]" />
              <span>LEGAL TERMS</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Customer Terms & Conditions — Bike Taxi
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Last updated: August 17, 2026 ・ FoxRun India (OPC) Private Limited
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#FFB400] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              These Customer Terms govern your access to and use of FoxRun Bike Taxi services. By requesting a bike ride on the FoxRun mobile application, you agree to comply with these terms, safety regulations, and helmet compliance guidelines.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Service Overview
              </h2>
              <p>
                FoxRun Mobility provides an on-demand geospatial platform connecting passengers (&ldquo;Riders&rdquo;) with verified two-wheeler vehicle operators (&ldquo;Captains&rdquo;) for rapid, affordable city transport across Indian urban centers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Rider Helmet & Safety Regulations
              </h2>
              <p>
                Safety is paramount at FoxRun. During any Bike Taxi trip:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Riders must wear the safety helmet provided by the FoxRun Captain throughout the entire journey.</li>
                <li>Riders must ensure secure seating behind the Captain with both feet placed firmly on the footrests.</li>
                <li>Carrying hazardous, oversized, or illegal cargo on two-wheelers is strictly prohibited.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Booking, Fares & Digital Payments
              </h2>
              <p>
                All bike taxi fares are calculated upfront using real-time distance and estimated traffic time. FoxRun ensures transparent pricing without hidden surge charges. Payments can be settled via UPI, credit/debit cards, digital wallets, or direct cash payment to the Captain.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                4. Cancellation & Refund Policy
              </h2>
              <p>
                Riders can cancel a bike taxi ride free of charge within 2 minutes of booking assignment. Nominal cancellation fees may apply if the Captain has already arrived at the pickup location after prolonged waiting.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                5. Code of Conduct
              </h2>
              <p>
                FoxRun maintains zero tolerance for harassment, verbal abuse, or unsafe passenger behavior. Both Riders and Captains must respect local motor vehicle laws and community guidelines.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl text-[#111827]">
                Need Assistance?
              </h2>
              <p className="text-gray-600">
                If you have questions regarding bike taxi terms or need trip support, contact our 24/7 help desk:
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
