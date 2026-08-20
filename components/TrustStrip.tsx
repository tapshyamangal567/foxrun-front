"use client";

import { motion } from "framer-motion";
import { Wallet, Clock, Award, Headphones } from "lucide-react";

export default function TrustStrip() {
  const stats = [
    { icon: Wallet, title: "100% Price Match", desc: "Best Price Guaranteed", animationClass: "animate-float-slow" },
    { icon: Award, title: "Verified Drivers", desc: "Experienced & Vetted", animationClass: "animate-float-medium" },
    { icon: Clock, title: "24/7 Availability", desc: "Instant & Scheduled Rides", animationClass: "animate-float-drift" },
    { icon: Headphones, title: "Round-the-Clock", desc: "Dedicated Support Team", animationClass: "animate-float-slow" },
  ];

  return (
    <section className="bg-[#FFB400] text-[#111111] py-10 border-y border-[#111111]/10 relative overflow-hidden">
      {/* Signature Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className={`flex items-center gap-3 md:gap-4 justify-center md:justify-start bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-lg hover:bg-white/30 transition-all duration-300 group ${item.animationClass}`}
              >
                <div className="icon-box-md rounded-2xl bg-[#111111] text-[#FFB400] shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="icon-md" />
                </div>
                <div>
                  <h4 className="font-sora font-extrabold text-base md:text-lg leading-tight text-[#111111]">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs md:text-sm font-medium text-[#111111]/80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
