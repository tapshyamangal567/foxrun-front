"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, UserCheck, Award, Clock, MapPin } from "lucide-react";

const HERO_SLIDES = [
  "/assets/img/1.png",
  "/assets/img/2.png",
  "/assets/img/3.png",
  "/assets/img/4.png",
  "/assets/img/5.png",
  "/assets/img/6.png",
  "/assets/img/7.png",
  "/assets/img/8.png",
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const blurInVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-[#111827] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden relative">
      {/* Ambient Floating Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FFB400]/15 rounded-full filter blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB400]/10 rounded-full filter blur-[120px] pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            {/* Startup Pill Tag */}
            <motion.div variants={blurInVariant}>
              <div className="inline-flex items-center gap-2 bg-[#FFB400] text-[#111111] font-sora font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(255,180,0,0.3)] animate-float-slow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Next-Gen Mobility Startup</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={blurInVariant}
              className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#111827]"
            >
              Book Your Ride,{" "}
              <span className="text-[#111111] bg-[#FFB400] px-4 py-1 rounded-2xl inline-block mt-1 shadow-[0_8px_25px_rgba(255,180,0,0.4)]">
                Anytime.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={blurInVariant}
              className="text-lg sm:text-xl text-gray-600 font-inter leading-relaxed max-w-xl"
            >
              Book a ride effortlessly with FoxRun. Get reliable rides, experienced drivers, and 24/7 support right from your phone. Download the app and book your way, anytime, anywhere.
            </motion.p>

            {/* Store Action Buttons */}
            <motion.div variants={blurInVariant} className="app-store-badges pt-2">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-badge px-6 rounded-full bg-[#111111] text-white font-sora font-semibold text-sm hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/10 group gap-3 sm:gap-3.5"
              >
                <div className="app-store-badge-icon-wrap">
                  <Image
                    src="/assets/img/playstore-icon.png"
                    alt="Google Play"
                    fill
                    className="object-contain app-store-badge-icon"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">Get it on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                href="#"
                className="app-store-badge px-6 rounded-full bg-[#FFB400] text-[#111111] font-sora font-semibold text-sm hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(255,180,0,0.4)] group gap-3 sm:gap-3.5"
              >
                <div className="app-store-badge-icon-wrap">
                  <Image
                    src="/assets/img/appstore-icon.png"
                    alt="App Store"
                    fill
                    className="object-contain app-store-badge-icon"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider text-gray-800 font-normal">Download on</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </motion.a>
            </motion.div>

            {/* 2 Feature Badges */}
            <motion.div variants={blurInVariant} className="pt-6 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-3">
                {/* Badge 1: Verified Drivers */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 text-xs font-sora font-extrabold text-[#111111] bg-gray-50/90 hover:bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFB400]/20 flex items-center justify-center text-[#111111] group-hover:bg-[#FFB400] transition-colors shrink-0">
                    <UserCheck className="w-3.5 h-3.5 text-[#111111] group-hover:scale-110 transition-transform" />
                  </div>
                  <span>VERIFIED DRIVERS</span>
                </motion.div>

                {/* Badge 2: 4.9★ Rated Rides */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 text-xs font-sora font-extrabold text-[#111111] bg-gray-50/90 hover:bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFB400]/20 flex items-center justify-center text-[#111111] group-hover:bg-[#FFB400] transition-colors shrink-0">
                    <Award className="w-3.5 h-3.5 text-[#111111] group-hover:scale-110 transition-transform" />
                  </div>
                  <span>4.9★ RATED RIDES</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Slider Frame with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Floating Card Badge 1 Top Left */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="absolute -top-6 -left-6 z-30 hidden sm:flex items-center gap-3 bg-[#111111]/90 backdrop-blur-xl text-white px-5 py-3 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300"
            >
              <div className="icon-box-md rounded-xl bg-[#FFB400] text-[#111111]">
                <Clock className="icon-md" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-sora font-extrabold text-xs text-[#FFB400]">2 MIN ETA</div>
                <div className="font-inter text-[11px] text-gray-300">Fastest Pickup Rate</div>
              </div>
            </motion.div>

            {/* Floating Card Badge 2 Bottom Right */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="absolute -bottom-6 -right-6 z-30 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-xl text-[#111827] px-5 py-3 rounded-2xl border border-gray-200 shadow-2xl transition-transform duration-300"
            >
              <div className="icon-box-md rounded-xl bg-[#FFB400]/20 text-[#111111]">
                <MapPin className="icon-md" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-sora font-extrabold text-xs text-[#111827]">LIVE TRACKING</div>
                <div className="font-inter text-[11px] text-gray-500">100% Real-time GPS</div>
              </div>
            </motion.div>

            {/* Main Slider Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl bg-[#111111] p-3 shadow-2xl overflow-hidden border-4 border-[#111111] group">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={HERO_SLIDES[currentSlide]}
                      alt={`FoxRun App Showcase Slide ${currentSlide + 1}`}
                      fill
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Slider Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg">
                  {HERO_SLIDES.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? "w-7 bg-[#FFB400]" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
