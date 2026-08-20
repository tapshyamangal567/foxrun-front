import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-inter">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFB400]/20 text-[#111111] font-sora font-extrabold text-xs uppercase tracking-wider mb-3">Support & Customer Help</div>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy outlines how we collect, use, disclose, and protect your personal
              information when you visit our website. By accessing or using our website, you agree to the
              terms of this Privacy Policy and consent to the collection and use of your information as
              described herein. We are committed to ensuring that your privacy is protected. Should we ask
              you to provide certain information by which you can be identified when using this website,
              you can be assured that it will only be used in accordance with this Privacy Policy. We
              regularly review our compliance with this policy and ensure that all data handling practices
              are transparent and secure.
            </p>
          </div>

          <div>
            <h2 className="font-sora font-bold text-xl text-[#111827] mb-3">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect personal information such as names, email addresses, and browsing data to enhance
              user experience and provide personalized services. This data helps us understand user
              preferences and improve our offerings. Your privacy is important to us, and we ensure that
              all information is handled with strict confidentiality.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
              <li><strong>Cookies and Tracking technology:</strong> We use cookies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora font-bold text-xl text-[#111827] mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use your information to provide and improve our services, ensuring a personalized
              experience tailored to your needs. This includes processing transactions, communicating
              updates, and responding to inquiries. Additionally, we use your data for analytical purposes
              to enhance our offerings and for security measures to protect against fraud.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To provide and maintain our services.</li>
              <li>To improve and personalize your experience on our website.</li>
              <li>To communicate with you, including sending updates and promotional materials.</li>
              <li>To analyze website usage and improve our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora font-bold text-xl text-[#111827] mb-3">Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties
              except as described in this Privacy Policy. We take reasonable steps to ensure that any
              third parties with whom we share your personal information are bound by appropriate
              confidentiality and security obligations regarding your personal information.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Data Encryption:</strong> We use advanced encryption technologies to protect your personal information during transmission and storage.</li>
              <li><strong>Access Controls:</strong> We restrict access to your personal information to only those employees and contractors who need it.</li>
              <li><strong>Regular Audits:</strong> We conduct regular audits of our data handling practices and security measures.</li>
              <li><strong>Incident Response:</strong> In the event of a data breach, we have procedures to respond promptly and effectively.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sora font-bold text-xl text-[#111827] mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions, please <Link href="/#contact" className="text-[#FFB400] font-bold hover:underline">contact our support team</Link>. Our team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
