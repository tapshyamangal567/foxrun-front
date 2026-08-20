"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, Heart, Award, Sparkles, Zap, Star } from "lucide-react";

export default function StatsMarquee() {
  const stats = [
    {
      icon: RocketIcon,
      badge: "VERIFIED",
      number: "1k+",
      title: "Rides Envisioned",
      subtitle: "Shipped on schedule",
    },
    {
      icon: MapPin,
      badge: "EXPANDING",
      number: "100+",
      title: "Cities Planned",
      subtitle: "Across tier-1 & tier-2 India",
    },
    {
      icon: Clock,
      badge: "LIVE 24/7",
      number: "24x7",
      title: "Platform Support",
      subtitle: "Round-the-clock SLA",
    },
    {
      icon: Heart,
      badge: "TRUSTED",
      number: "100%",
      title: "Customer Commitment",
      subtitle: "Zero-surge fairness",
    },
    {
      icon: Star,
      badge: "TOP RATED",
      number: "4.9★",
      title: "Rider Satisfaction",
      subtitle: "High availability",
    },
    {
      icon: Zap,
      badge: "FASTEST",
      number: "2 Min",
      title: "Average Pickup ETA",
      subtitle: "Hyper-local dispatch",
    },
  ];

  // Duplicate list to achieve a 100% seamless infinite loop
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="bg-[#FFB400] text-[#111111] py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#111111] bg-white/40 px-5 py-2 rounded-full inline-block mb-3 border border-[#111111]/10 shadow-sm">
          NEURAVOLT MOBILITY ENGINE
        </span>
        <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
          FoxRun by the Numbers
        </h2>
      </div>

      {/* Infinite Horizontal Motion Slider Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFB400] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFB400] to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-6 w-max py-4 cursor-grab active:cursor-grabbing"
        >
          {duplicatedStats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="w-72 sm:w-80 shrink-0 bg-[#111111] text-white p-7 rounded-3xl border border-white/10 shadow-2xl hover:border-[#FFB400] hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#FFB400] flex items-center justify-center border border-white/10 group-hover:bg-[#FFB400] group-hover:text-[#111111] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="font-sora font-bold text-[10px] uppercase tracking-wider text-[#FFB400] bg-[#FFB400]/15 px-3 py-1 rounded-full border border-[#FFB400]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Main Big Number */}
                  <div className="font-sora font-extrabold text-4xl sm:text-5xl text-white mb-2 tracking-tight group-hover:text-[#FFB400] transition-colors">
                    {item.number}
                  </div>

                  {/* Title */}
                  <div className="font-sora font-bold text-base text-gray-200 mb-4">
                    {item.title}
                  </div>
                </div>

                {/* Subtitle bottom line */}
                <div className="pt-4 border-t border-white/10 font-inter text-xs text-gray-400 font-medium">
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81" />
      <path d="M12 10l-2 2" />
      <path d="M15 13l-2 2" />
      <path d="M15 5s.76.76 1.5 1.5c1.5 1.5 2 4.5 2 4.5l-7 7s-3-.5-4.5-2C6.26 15.26 7 16 7 16l8-11z" />
    </svg>
  );
}
