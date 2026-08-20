"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, Headphones, Clock, UserCheck } from "lucide-react";

export default function ValueProposition() {
  const values = [
    {
      icon: Wallet,
      title: "Flexible Price Options",
      desc: "Find a ride that fits your budget. We offer a wide variety of car types and price points.",
      animationClass: "animate-float-slow",
    },
    {
      icon: Headphones,
      title: "Technical Support Guaranteed",
      desc: "Our dedicated technical support team is available, no matter when you encounter an issue.",
      animationClass: "animate-float-medium",
    },
    {
      icon: Clock,
      title: "Prompt 24/7 Service",
      desc: "Your car will arrive promptly, allowing you to proceed with your plans without delay.",
      animationClass: "animate-float-drift",
    },
    {
      icon: UserCheck,
      title: "Expert Driver Service",
      desc: "Trust in their expertise to navigate through traffic and ensure your safety throughout the journey.",
      animationClass: "animate-float-slow",
    },
  ];

  return (
    <section className="bg-[#FFB400] text-[#111111] py-20 md:py-28 relative overflow-hidden">
      {/* Signature Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#111111] text-[#FFB400] font-sora font-extrabold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-4 shadow-md">
            Value Guaranteed
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Book a ride now right from your hand. <span className="underline decoration-black underline-offset-8">Try it today!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Grid: 4 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className={`bg-white rounded-24 p-6 border border-[#111111]/10 shadow-soft hover:shadow-2xl transition-all duration-300 group ${val.animationClass}`}
                >
                  <div className="icon-box-lg rounded-2xl bg-[#111111] text-[#FFB400] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="icon-lg text-[#FFB400]" />
                  </div>
                  <h3 className="font-sora font-bold text-lg text-[#111827] mb-2">
                    {val.title}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md h-[460px] sm:h-[520px] rounded-[32px] bg-[#111111] p-3 border-4 border-[#111111] shadow-2xl overflow-hidden animate-float-medium group">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#FFF8E7] flex items-center justify-center p-1">
                <Image
                  src="/assets/img/inone1.png"
                  alt="FoxRun App Experience"
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
