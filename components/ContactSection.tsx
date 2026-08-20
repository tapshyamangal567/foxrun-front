"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Address",
      value: "NH 53, 4rth Floor Magneto Mall Offizo, Raipur Chhattisgarh 492001.",
      link: null,
      animationClass: "animate-float-slow",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "Contact@Foxrun.in",
      link: "mailto:Contact@Foxrun.in",
      animationClass: "animate-float-medium",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "02269620985",
      link: "tel:02269620985",
      animationClass: "animate-float-drift",
    },
  ];

  return (
    <section id="contact" className="bg-white text-[#111827] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-4 shadow-sm">
            Connect With Us
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 font-inter text-base sm:text-lg text-gray-600">
            Have questions? We&apos;re here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className={`bg-gray-50/80 backdrop-blur-xl rounded-24 p-8 border border-gray-200/80 shadow-soft hover:shadow-2xl hover:bg-white hover:border-[#FFB400] transition-all duration-300 group flex flex-col justify-between ${card.animationClass}`}
              >
                <div>
                  <div className="icon-box-lg rounded-2xl bg-[#111111] text-[#FFB400] mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="icon-lg" />
                  </div>

                  <h3 className="font-sora font-bold text-xl text-[#111827] mb-3">
                    {card.title}
                  </h3>

                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    {card.value}
                  </p>
                </div>

                {card.link && (
                  <div className="mt-6 pt-4 border-t border-gray-200/60">
                    <a
                      href={card.link}
                      className="inline-flex items-center gap-2 text-sm font-sora font-bold text-[#111111] hover:text-[#FFB400] transition-colors duration-200 group/link"
                    >
                      <span>Connect Now</span>
                      <ArrowUpRight className="icon-sm transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
