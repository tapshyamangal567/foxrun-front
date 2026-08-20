import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, ArrowLeft, Mail } from "lucide-react";

export default function TermsAndConditions() {
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
              <FileText className="w-3.5 h-3.5 text-[#111111]" />
              <span>LEGAL TERMS</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Terms and Conditions
            </h1>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Welcome to FoxRun! These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our website (foxrun.in) and the FoxRun mobile application offering quick-booking services including Bike, Cab, Auto, Bike Lite Parcel, and Pick-up Truck Parcel Services. By downloading our app or using our services, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our platform.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. User Accounts &amp; Eligibility
              </h2>
              <p className="text-gray-600">
                You must be at least 18 years of age to register and use FoxRun services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. Services Provided
              </h2>
              <p className="text-gray-600">
                FoxRun acts as an intermediary platform connecting users looking for transportation and logistics services with independent third-party driver and delivery partners (&ldquo;Captains&rdquo;). We do not directly own or operate transport vehicles.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Booking, Fares, and Payments
              </h2>
              <p className="text-gray-600">
                Fares are calculated based on distance, time, vehicle category (Bike, Auto, Cab, Parcel truck), and prevailing demand/traffic conditions. You agree to pay the total fare displayed upon completion of the ride or parcel delivery via cash, digital wallet, or online payment gateways integrated into the app. Cancellation fees may apply if you cancel a ride or parcel booking after a driver has been dispatched or has arrived at the pickup location.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                4. User Conduct &amp; Guidelines
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong className="text-gray-800">For Rides:</strong> Passengers must behave respectfully, wear seatbelts (in cars/autos), wear helmets where required (on bikes), and follow local traffic and safety laws.
                </p>
                <p>
                  <strong className="text-gray-800">For Parcels:</strong> Users must ensure that parcels booked via Bike Lite or Pick-up Trucks do not contain illegal, hazardous, prohibited, or restricted items (such as weapons, explosives, illegal drugs, or highly perishable goods without proper packaging). Captains reserve the right to inspect parcels if necessary. You are solely responsible for the contents of any parcel you send through FoxRun logistics.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600">
                FoxRun shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of rides or parcel deliveries, including delayed deliveries, traffic delays, or lost items, except as covered by our standard support policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                6. Modifications to Terms
              </h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                7. Contact Information
              </h2>
              <p className="text-gray-600">
                For any queries, disputes, or support requests regarding these Terms, please reach out to us at{" "}
                <a
                  href="mailto:Contact@foxrun.in"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#111111] hover:text-[#FFB400] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FFB400] inline" />
                  <span>Contact@foxrun.in</span>
                </a>{" "}
                or visit{" "}
                <a
                  href="https://foxrun.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#111111] hover:text-[#FFB400] underline transition-colors"
                >
                  foxrun.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
