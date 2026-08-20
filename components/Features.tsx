"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, UserCheck, Clock, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Wallet,
      title: "Best Price Guaranteed",
      desc: "Find a lower price? We’ll refund you 100% of the difference.",
      animationClass: "animate-float-slow",
    },
    {
      icon: UserCheck,
      title: "Experienced Drivers",
      desc: "Ride with confidence. Our professional and experienced drivers are ready for you.",
      animationClass: "animate-float-medium",
    },
    {
      icon: Clock,
      title: "24/7 Ride Availability",
      desc: "Book a ride anytime. A driver will be dispatched directly to you.",
      animationClass: "animate-float-drift",
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      desc: "Have a question? Contact our support team any time you have a problem.",
      animationClass: "animate-float-slow",
    },
  ];

  return (
    <section id="features" className="bg-white text-[#111827] py-20 md:py-28 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#FFB400]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-4 shadow-sm">
            Why Choose FoxRun
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            The Best Experience with Every Ride
          </h2>
          <p className="mt-4 font-inter text-base sm:text-lg text-gray-600">
            Designed for safety, transparency, and instant availability across cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl bg-gray-50/80 backdrop-blur-md p-6 border border-gray-200/80 shadow-soft hover:shadow-2xl transition-all duration-300 animate-float-slow group overflow-hidden">
              <Image
                src="/assets/img/inone-middle.png"
                alt="FoxRun Rider Feature Illustration"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className={`bg-gray-50/80 backdrop-blur-xl rounded-24 p-6 border border-gray-200/80 hover:border-[#FFB400] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl group ${feat.animationClass}`}
                >
                  <div className="icon-box-lg rounded-2xl bg-[#FFB400] text-[#111111] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="icon-lg" />
                  </div>
                  <h3 className="font-sora font-bold text-lg text-[#111827] mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
