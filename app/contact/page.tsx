"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Plus,
  Minus,
  CheckCircle2,
  PhoneCall,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Neuravolt Easing physics
const neuravoltEase = [0.23, 1, 0.32, 1] as const;

// Motion Variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: neuravoltEase,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactPage() {
  // Form State
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    mobile: "",
    queryType: "Booking Assistance",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (
      !formState.fullName.trim() ||
      !formState.email.trim() ||
      !formState.mobile.trim() ||
      !formState.queryType.trim() ||
      !formState.message.trim()
    ) {
      setErrorMessage("Please fill out all required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      // Smooth UX minimum delay (~800-1000ms) to avoid instant flickering
      const elapsed = Date.now() - startTime;
      if (elapsed < 1000) {
        await new Promise((resolve) => setTimeout(resolve, 1000 - elapsed));
      }

      if (res.ok && data.success === true) {
        // ONLY SHOW SUCCESS SCREEN IF BACKEND CONFIRMS ACTUAL SMTP SUCCESS
        setIsSubmitted(true);
        setFormState({
          fullName: "",
          email: "",
          mobile: "",
          queryType: "Booking Assistance",
          message: "",
        });
      } else {
        // SMTP / API Error Response
        setErrorMessage(
          data.message || "We couldn't send your message right now. Please try again in a moment."
        );
      }
    } catch (err) {
      setErrorMessage("Contact service is temporarily unavailable. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ Data
  const faqs = [
    {
      q: "How do I book a ride?",
      a: "Open the FoxRun app, enter your pickup and drop-off location, choose your preferred vehicle type (Bike, Auto, Cab, or SUV), and tap 'Book Ride'. A nearby verified driver will be allocated instantly.",
    },
    {
      q: "Can I schedule a ride in advance?",
      a: "Yes! You can schedule rides up to 7 days in advance through the app. Simply select the 'Schedule' date and time option before confirming your ride booking.",
    },
    {
      q: "What types of cars are available?",
      a: "FoxRun offers a wide variety of rides tailored for every journey, including fast Bike Taxis, comfortable Auto-Rickshaws, Hatchbacks, Sedans, and spacious 6-seater SUVs.",
    },
    {
      q: "How is the fare calculated?",
      a: "Fares are calculated transparently based on distance, estimated travel time, and route toll fees. FoxRun guarantees zero hidden surge surprises.",
    },
    {
      q: "Is there 24/7 customer support?",
      a: "Absolutely. Our dedicated support team is available round-the-clock via in-app help desk, email at Contact@FoxRun.in, or by calling 02269620985.",
    },
    {
      q: "What if I need to cancel my booking?",
      a: "You can cancel your ride directly from the app. Cancellations made within 2 minutes of booking assignment are completely free of charge.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans overflow-x-hidden selection:bg-[#FFB400] selection:text-[#111111]">
      {/* 1. Header Reused Unchanged */}
      <Header />

      <main className="flex-grow">
        {/* ====================================================
            2. CONTACT HERO SECTION (White #FFFFFF)
            ==================================================== */}
        <section className="relative bg-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          {/* Ambient Background Decorative Glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFB400]/15 rounded-full filter blur-3xl pointer-events-none -z-10 animate-float-slow" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="space-y-6 flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Eyebrow Tag */}
              <motion.div variants={fadeInUpVariant} custom={0}>
                <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] text-[#FFB400] font-sora font-extrabold text-xs uppercase tracking-widest shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB400] animate-pulse" />
                  CONTACT FOXRUN
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeInUpVariant} custom={1} className="space-y-3">
                <h1 className="font-sora font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-[1.1]">
                  Let&apos;s Talk. <span className="text-[#FFB400]">We&apos;re Here to Help.</span>
                </h1>
                <div className="h-1.5 w-24 bg-[#FFB400] rounded-full mx-auto mt-4" />
              </motion.div>

              {/* Supporting Text */}
              <motion.p
                variants={fadeInUpVariant}
                custom={2}
                className="font-inter text-gray-600 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Have questions? We&apos;re here to help. Reach out to us through any of the channels below.
              </motion.p>

                {/* Quick Info Badges */}
              <motion.div variants={fadeInUpVariant} custom={3} className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-200/80 shadow-sm animate-float-slow">
                  <Clock className="icon-sm text-[#FFB400]" />
                  <span className="font-sora font-bold text-xs sm:text-sm text-[#111827]">24/7 Instant Support</span>
                </div>
                <div className="flex items-center gap-2.5 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-200/80 shadow-sm animate-float-medium">
                  <Shield className="icon-sm text-[#FFB400]" />
                  <span className="font-sora font-bold text-xs sm:text-sm text-[#111827]">Verified Response SLA</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ====================================================
            3. CONTACT FORM + INFORMATION SECTION (Black #111111)
            ==================================================== */}
        <section className="bg-[#111111] text-white py-20 md:py-28 relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FFB400]/10 rounded-full filter blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/5 rounded-full filter blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Information Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: neuravoltEase }}
                className="lg:col-span-5 space-y-8"
              >
                <div>
                  <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-white/10 px-5 py-2 rounded-full inline-block mb-4 border border-white/10">
                    DIRECT CHANNELS
                  </span>
                  <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                    How can we help?
                  </h2>
                  <p className="font-inter text-gray-400 text-base leading-relaxed mt-4">
                    Whether you have a question about a booking, need assistance, or simply want to connect with FoxRun, our team is ready to help.
                  </p>
                </div>

                {/* 3 Information Cards */}
                <div className="space-y-4">
                  {/* Card 1: Phone */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 rounded-24 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB400] transition-all group shadow-lg animate-float-slow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="icon-box-md rounded-2xl bg-[#FFB400] text-[#111111] shadow-md">
                          <Phone className="icon-md" />
                        </div>
                        <div>
                          <div className="font-sora font-bold text-xs uppercase text-gray-400 tracking-wider">Phone</div>
                          <a href="tel:02269620985" className="font-sora font-extrabold text-lg sm:text-xl text-white hover:text-[#FFB400] transition-colors">
                            02269620985
                          </a>
                        </div>
                      </div>
                      <a
                        href="tel:02269620985"
                        className="inline-flex items-center gap-1 font-sora font-bold text-xs text-[#FFB400] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Call Us</span>
                        <ArrowRight className="icon-sm" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Card 2: Email */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 rounded-24 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB400] transition-all group shadow-lg animate-float-medium"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="icon-box-md rounded-2xl bg-[#FFB400] text-[#111111] shadow-md">
                          <Mail className="icon-md" />
                        </div>
                        <div>
                          <div className="font-sora font-bold text-xs uppercase text-gray-400 tracking-wider">Email</div>
                          <a href="mailto:Contact@FoxRun.in" className="font-sora font-extrabold text-base sm:text-lg text-white hover:text-[#FFB400] transition-colors">
                            Contact@FoxRun.in
                          </a>
                        </div>
                      </div>
                      <a
                        href="mailto:Contact@FoxRun.in"
                        className="inline-flex items-center gap-1 font-sora font-bold text-xs text-[#FFB400] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Email Us</span>
                        <ArrowRight className="icon-sm" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Card 3: Office */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 rounded-24 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB400] transition-all group shadow-lg animate-float-drift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-box-md rounded-2xl bg-[#FFB400] text-[#111111] shrink-0 shadow-md">
                        <MapPin className="icon-md" />
                      </div>
                      <div>
                        <div className="font-sora font-bold text-xs uppercase text-gray-400 tracking-wider mb-1">Office</div>
                        <p className="font-inter text-sm text-gray-200 leading-relaxed font-medium">
                          NH 53, 4th Floor Magneto Mall Offizo, Raipur, Chhattisgarh 492001
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column: Large Premium Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: neuravoltEase }}
                className="lg:col-span-7"
              >
                <div className="bg-white text-[#111827] rounded-[32px] p-8 sm:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
                  {/* Subtle Yellow Accent Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFB400]" />

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-[#FFB400] text-[#111111] rounded-full flex items-center justify-center mx-auto shadow-xl">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="font-sora font-extrabold text-3xl text-[#111827]">
                        Message Received ✓
                      </h3>
                      <p className="font-inter text-gray-600 text-lg max-w-md mx-auto">
                        Thank you for reaching out to FoxRun. Our support team will get back to you soon.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            fullName: "",
                            email: "",
                            mobile: "",
                            queryType: "Booking Assistance",
                            message: "",
                          });
                        }}
                        className="inline-flex items-center gap-2 bg-[#111111] text-white font-sora font-bold text-sm px-6 py-3 rounded-full hover:bg-black transition-all shadow-md cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-[#111827] mb-2">
                          Send Us a Message
                        </h3>
                        <p className="font-inter text-gray-500 text-sm">
                          Fill out the form below and our dedicated team will respond shortly.
                        </p>
                      </div>

                      {/* Error Alert Box */}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-2xl bg-red-50 border-2 border-red-200 text-red-800 text-sm font-inter flex items-start gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-sora font-extrabold text-red-900">Message Couldn&apos;t Be Sent</div>
                            <div className="text-red-700 text-xs mt-0.5">{errorMessage}</div>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="font-sora font-bold text-xs uppercase tracking-wider text-gray-700 block">
                            Full Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            required
                            disabled={isSubmitting}
                            placeholder="Enter your full name"
                            value={formState.fullName}
                            onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#FFB400] focus:ring-4 focus:ring-[#FFB400]/20 transition-all duration-300 disabled:opacity-60"
                          />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="font-sora font-bold text-xs uppercase tracking-wider text-gray-700 block">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            placeholder="name@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#FFB400] focus:ring-4 focus:ring-[#FFB400]/20 transition-all duration-300 disabled:opacity-60"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Mobile Number */}
                        <div className="space-y-2">
                          <label htmlFor="mobile" className="font-sora font-bold text-xs uppercase tracking-wider text-gray-700 block">
                            Mobile Number *
                          </label>
                          <input
                            id="mobile"
                            type="tel"
                            required
                            disabled={isSubmitting}
                            placeholder="+91 98765 43210"
                            value={formState.mobile}
                            onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#FFB400] focus:ring-4 focus:ring-[#FFB400]/20 transition-all duration-300 disabled:opacity-60"
                          />
                        </div>

                        {/* Select Query */}
                        <div className="space-y-2">
                          <label htmlFor="queryType" className="font-sora font-bold text-xs uppercase tracking-wider text-gray-700 block">
                            Select Query *
                          </label>
                          <select
                            id="queryType"
                            disabled={isSubmitting}
                            value={formState.queryType}
                            onChange={(e) => setFormState({ ...formState, queryType: e.target.value })}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#FFB400] focus:ring-4 focus:ring-[#FFB400]/20 transition-all duration-300 disabled:opacity-60"
                          >
                            <option value="Booking Assistance">Booking Assistance</option>
                            <option value="Ride Support">Ride Support</option>
                            <option value="Driver / Captain">Driver / Captain Enquiry</option>
                            <option value="Corporate Enquiry">Corporate Enquiry</option>
                            <option value="Partnership">Partnership Proposal</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="font-sora font-bold text-xs uppercase tracking-wider text-gray-700 block">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          disabled={isSubmitting}
                          placeholder="How can we assist you today?"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#FFB400] focus:ring-4 focus:ring-[#FFB400]/20 transition-all duration-300 resize-none disabled:opacity-60"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={isSubmitting ? {} : { y: -2, scale: 1.01 }}
                        whileTap={isSubmitting ? {} : { scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-sora font-extrabold text-base py-4 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                          isSubmitting
                            ? "bg-[#FFB400]/70 text-[#111111] cursor-not-allowed"
                            : "bg-[#FFB400] text-[#111111] hover:shadow-[0_8px_25px_rgba(255,180,0,0.4)]"
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin text-[#111111]" />
                            <span>Sending Message...</span>
                          </div>
                        ) : errorMessage ? (
                          <>
                            <span>Try Again</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            4. CONTACT CHANNELS SECTION (Yellow #FFB400)
            ==================================================== */}
        <section className="bg-[#FFB400] text-[#111111] py-20 md:py-28 relative overflow-hidden">
          {/* Signature Dot Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: neuravoltEase }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#111111] bg-white/40 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#111111]/10 shadow-sm animate-float-slow">
                DIRECT ASSISTANCE
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
                Reach Us Your Way.
              </h2>
              <p className="font-inter text-base sm:text-lg text-[#111111]/80 font-medium mt-3">
                Choose the channel that works best for you.
              </p>
            </motion.div>

            {/* THREE Large Floating Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CARD 1: Phone Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.6, ease: neuravoltEase }}
                className="bg-[#111111] text-white p-8 rounded-24 border border-white/10 shadow-2xl flex flex-col justify-between group relative overflow-hidden animate-float-slow"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <h3 className="font-sora font-extrabold text-xl text-white mb-1">Phone Support</h3>
                  <div className="font-sora font-extrabold text-2xl text-[#FFB400] mb-3">02269620985</div>
                  <p className="font-inter text-xs text-gray-300 leading-relaxed mb-6">
                    Available for assistance. Round-the-clock telephone help desk for riders and captains.
                  </p>
                </div>

                <a
                  href="tel:02269620985"
                  className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#FFB400] hover:text-[#111111] text-white font-sora font-bold text-sm px-6 py-3.5 rounded-2xl transition-all border border-white/10 group/btn"
                >
                  <span>Call Us</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* CARD 2: Email Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.6, delay: 0.15, ease: neuravoltEase }}
                className="bg-[#111111] text-white p-8 rounded-24 border border-white/10 shadow-2xl flex flex-col justify-between group relative overflow-hidden animate-float-medium"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                    <Mail className="w-7 h-7" />
                  </div>
                  <h3 className="font-sora font-extrabold text-xl text-white mb-1">Email Support</h3>
                  <div className="font-sora font-bold text-lg text-[#FFB400] mb-3 break-all">Contact@FoxRun.in</div>
                  <p className="font-inter text-xs text-gray-300 leading-relaxed mb-6">
                    Send us your enquiry. Detailed email support for booking inquiries and corporate proposals.
                  </p>
                </div>

                <a
                  href="mailto:Contact@FoxRun.in"
                  className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#FFB400] hover:text-[#111111] text-white font-sora font-bold text-sm px-6 py-3.5 rounded-2xl transition-all border border-white/10 group/btn"
                >
                  <span>Email Us</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* CARD 3: Visit Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.6, delay: 0.3, ease: neuravoltEase }}
                className="bg-[#111111] text-white p-8 rounded-24 border border-white/10 shadow-2xl flex flex-col justify-between group relative overflow-hidden animate-float-drift"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="font-sora font-extrabold text-xl text-white mb-1">Visit Us</h3>
                  <div className="font-sora font-bold text-sm text-gray-200 mb-3 leading-snug">
                    NH 53, 4th Floor Magneto Mall Offizo, Raipur, Chhattisgarh 492001
                  </div>
                  <p className="font-inter text-xs text-gray-300 leading-relaxed mb-6">
                    Regional Operations Hub. Step by during office hours for in-person support.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Magneto+Mall+Raipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#FFB400] hover:text-[#111111] text-white font-sora font-bold text-sm px-6 py-3.5 rounded-2xl transition-all border border-white/10 group/btn"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            5. FAQ / QUICK HELP SECTION (White #FFFFFF)
            ==================================================== */}
        <section className="bg-white py-20 md:py-28 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: neuravoltEase }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
                GOT QUESTIONS?
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
                Need a Quick Answer?
              </h2>
              <p className="font-inter text-gray-600 text-base mt-3">
                Find answers to some of the most common questions.
              </p>
            </motion.div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`rounded-24 border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-[#FFB400] shadow-xl"
                        : "bg-gray-50/80 border-gray-200/80 hover:bg-white hover:border-gray-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-sora font-bold text-base sm:text-lg text-[#111827] cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? "bg-[#FFB400]" : "bg-gray-300"}`} />
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-[#FFB400] text-[#111111] rotate-180" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: neuravoltEase }}
                        >
                          <div className="px-6 pb-6 pt-2 font-inter text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 6. Existing FoxRun Footer Reused Unchanged */}
      <Footer />
    </div>
  );
}
