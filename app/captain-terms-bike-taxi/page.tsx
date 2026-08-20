import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Bike, ArrowLeft, Phone, Mail, Award } from "lucide-react";

export default function CaptainTermsBikeTaxi() {
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
              <Bike className="w-3.5 h-3.5 text-[#111111]" />
              <span>CAPTAIN PARTNER TERMS</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Captain Terms & Conditions — Bike Taxi
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Partner Terms for Two-Wheeler Captains ・ FoxRun Mobility
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-4">
            <Award className="w-6 h-6 text-[#FFB400] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              These terms govern two-wheeler driver partners (&ldquo;Captains&rdquo;) onboarding with FoxRun. As a Captain, you enjoy transparent payouts, flexible working hours, and full partner support.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Captain Onboarding & Eligibility
              </h2>
              <p>
                To onboard as a FoxRun Bike Taxi Captain, drivers must possess:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>A valid Indian Driving License for two-wheelers.</li>
                <li>Active Vehicle Registration Certificate (RC) and valid Insurance.</li>
                <li>Pollution Under Control (PUC) certificate.</li>
                <li>Two ISI-marked safety helmets (one for the Captain, one for the Rider).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Payouts, Earnings & Incentives
              </h2>
              <p>
                FoxRun offers industry-leading fare payouts with direct bank transfers. Commission deductions are fixed and transparent. Weekly bonuses and peak-hour incentives are deposited directly into the Captain&rsquo;s linked bank account.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Safety & Traffic Compliance
              </h2>
              <p>
                Captains must adhere to speed limits, traffic signals, and road safety regulations. Over-speeding, rash driving, or operating under the influence results in immediate platform deactivation.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl text-[#111827]">
                Captain Partner Desk
              </h2>
              <p className="text-gray-600">
                Need help with onboarding or payout inquiries? Contact our Captain Support team:
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
