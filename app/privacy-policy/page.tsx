import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
              <span>LEGAL & PRIVACY</span>
            </div>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              At FoxRun (accessible via foxrun.in and our mobile application), we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our ride-hailing, transport, and parcel delivery services.
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong className="text-gray-800">Personal Information:</strong> Name, phone number, email address, profile picture, and account credentials when you register.
                </li>
                <li>
                  <strong className="text-gray-800">Location Data:</strong> Precise GPS location from your device when the app is running to match you with nearby Bike, Auto, Cab, and Delivery Captains and to track parcel transit.
                </li>
                <li>
                  <strong className="text-gray-800">Transaction &amp; Payment Details:</strong> Payment method details, ride history, parcel details, and billing information.
                </li>
                <li>
                  <strong className="text-gray-800">Device &amp; Usage Data:</strong> IP address, device type, operating system, and app usage behavior to improve our services.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To create and manage your user account.</li>
                <li>To connect you with nearby drivers/captains for rides and parcel delivery.</li>
                <li>To process payments, send receipts, and manage customer support inquiries.</li>
                <li>To send important updates, transactional notifications, promotional offers, and service announcements.</li>
                <li>To enhance app security, prevent fraud, and comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                3. Sharing of Information
              </h2>
              <p className="text-gray-600">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong className="text-gray-800">Drivers / Delivery Partners:</strong> Your name, pickup/drop location, and contact number to facilitate rides and parcel deliveries.
                </li>
                <li>
                  <strong className="text-gray-800">Service Providers:</strong> Third-party vendors assisting with payment gateways, cloud hosting, and analytics.
                </li>
                <li>
                  <strong className="text-gray-800">Legal Authorities:</strong> When required by law or to protect the safety, rights, and property of FoxRun, our users, or the public.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                4. Data Security
              </h2>
              <p className="text-gray-600">
                We implement robust administrative, technical, and physical security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                5. Your Rights &amp; Choices
              </h2>
              <p className="text-gray-600">
                You can update your profile information or delete your account directly through the FoxRun app settings. You may also disable location permissions, though this may limit your ability to book rides or send parcels.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="font-sora font-bold text-xl sm:text-2xl text-[#111827]">
                6. Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:Contact@foxrun.in"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#111111] hover:text-[#FFB400] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FFB400] inline" />
                  <span>Contact@foxrun.in</span>
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

