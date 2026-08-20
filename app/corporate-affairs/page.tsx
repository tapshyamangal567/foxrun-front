import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Building2, ArrowLeft, Mail, Phone, MapPin, Award, FileText } from "lucide-react";

export default function CorporateAffairs() {
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
              <Building2 className="w-3.5 h-3.5 text-[#111111]" />
              <span>CORPORATE GOVERNANCE</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Corporate Affairs & Entity Governance
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              FoxRun India (OPC) Private Limited ・ Official Corporate Disclosure
            </p>
          </div>

          {/* Corporate Entity Details Highlight Card */}
          <div className="p-8 rounded-3xl bg-[#111111] text-white border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB400] text-[#111111] flex items-center justify-center font-bold font-sora">
                FR
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg text-white">FOXRUN INDIA (OPC) PRIVATE LIMITED</h3>
                <p className="text-xs text-[#FFB400] font-mono">Incorporated under Companies Act, 2013</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-4 border-t border-white/10 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFB400] shrink-0 mt-0.5" />
                <span>Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FFB400] shrink-0" />
                  <a href="tel:02269620985" className="hover:text-[#FFB400] transition-colors">02269620985</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FFB400] shrink-0" />
                  <a href="mailto:Contact@Foxrun.in" className="hover:text-[#FFB400] transition-colors">Contact@Foxrun.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Corporate Mission & Compliance
              </h2>
              <p>
                FoxRun India (OPC) Private Limited is dedicated to engineering ethical, transparent, and scalable urban mobility infrastructure across metropolitan and emerging Indian cities. We strictly adhere to statutory corporate laws, labor standards, and data protection guidelines.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Board Governance & Ethics Policy
              </h2>
              <p>
                Our board ensures rigorous oversight over operating standards, algorithm fairness, and driver-partner economic well-being. FoxRun maintains zero tolerance for unethical business practices, financial misrepresentation, or discrimination.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Environmental & Sustainability Commitment
              </h2>
              <p>
                As part of our forward-looking corporate vision, FoxRun is actively transitioning towards EV fleet integration, aiming for zero-emission urban transit options by 2028.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl text-[#111827]">
                Investor & Media Contact
              </h2>
              <p className="text-gray-600">
                For corporate inquiries, regulatory filings, or strategic partnership proposals, reach out to our corporate office:
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold">
                <a href="mailto:Contact@Foxrun.in" className="inline-flex items-center gap-2 text-[#111111] hover:text-[#FFB400] transition-colors">
                  <Mail className="w-4 h-4 text-[#FFB400]" />
                  <span>Contact@Foxrun.in</span>
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
