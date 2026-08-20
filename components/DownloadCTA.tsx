"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="bg-[#FFB400] text-[#111111] py-20 md:py-28 relative overflow-hidden">
      {/* Signature Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glass Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#111111] shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Accent Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB400]/25 blur-[120px] pointer-events-none rounded-full animate-pulse-glow" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Text & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-md animate-float-slow">
                Experience FoxRun Today
              </span>

              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                The Future of Your Ride is <span className="text-[#FFB400]">Here.</span>
              </h2>

              <p className="font-inter text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Experience seamless booking, real-time tracking, and exclusive deals. Download the app and elevate your journey.
              </p>

              {/* Download Buttons */}
              <div className="app-store-badges pt-4">
                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-badge px-6 rounded-full bg-[#111111] text-white border border-white/20 font-sora font-bold text-sm hover:bg-black hover:border-[#FFB400]/60 transition-all duration-300 shadow-xl group gap-3 sm:gap-3.5"
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
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">GET IT ON</div>
                    <div className="text-sm font-extrabold leading-tight text-white">Google Play</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href="#"
                  className="app-store-badge px-6 rounded-full bg-white/10 text-white border border-white/20 font-sora font-bold text-sm hover:bg-white/20 transition-all duration-300 shadow-xl group gap-3 sm:gap-3.5"
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
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">Download on the</div>
                    <div className="text-sm font-extrabold leading-tight">App Store</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-xs aspect-[9/16] max-h-[380px] animate-float-medium">
                <Image
                  src="/assets/img/footer-mbile.png"
                  alt="FoxRun App Phone Mockup"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
