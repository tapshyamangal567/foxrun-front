"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Car, Play } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: MapPin,
      title: "Choose Your Location",
      desc: "Easily set your pick-up location and browse available cars near you.",
      animationClass: "animate-float-slow",
    },
    {
      num: "02",
      icon: Calendar,
      title: "Select Date & Time",
      desc: "Choose an immediate pick-up or schedule a ride for later to fit your plans perfectly.",
      animationClass: "animate-float-medium",
    },
    {
      num: "03",
      icon: Car,
      title: "Book Your Ride",
      desc: "Confirm your trip with instant driver allocation and transparent fare estimates.",
      animationClass: "animate-float-drift",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FFB400] text-[#111111] py-20 md:py-28 relative overflow-hidden">
      {/* Signature Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#111111] text-[#FFB400] font-sora font-extrabold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-4 shadow-md">
            Simple Steps
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Book Your Ride in 3 Easy Steps
          </h2>
          <p className="mt-4 font-inter text-base sm:text-lg text-[#111111]/80 font-medium">
            Seamless booking experience designed for modern schedules and hassle-free travel.
          </p>
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className={`bg-white rounded-24 p-8 border border-[#111111]/10 shadow-soft hover:shadow-2xl transition-all duration-300 group relative flex flex-col justify-between ${step.animationClass}`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-box-lg rounded-2xl bg-[#111111] text-[#FFB400] shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="icon-lg" />
                    </div>
                    <span className="font-sora font-extrabold text-3xl text-[#111111] group-hover:text-[#FFB400] transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-sora font-bold text-xl text-[#111827] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-400 group-hover:text-[#111111] transition-colors duration-300">
                  <span>Step {idx + 1} of 3</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#111111] text-white px-8 py-4 rounded-full font-sora font-bold text-base hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/10 group"
          >
            <Play className="w-5 h-5 text-[#FFB400] fill-current transition-transform duration-300 group-hover:scale-110" />
            <span>Download on Play Store</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
