"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`sticky top-0 z-50 text-white transition-all duration-500 border-b border-white/10 ${
        scrolled
          ? "bg-[#111111]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#111111] backdrop-blur-md shadow-lg"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Brand Logo with Radial Yellow Glow on Hover */}
        <Link href="/" className="flex items-center gap-3 group relative">
          <div className="absolute -inset-2 rounded-2xl bg-[#FFB400]/20 opacity-0 group-hover:opacity-100 filter blur-md transition-opacity duration-300 pointer-events-none" />
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 p-1 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 border border-white/10">
            <Image
              src="/assets/img/logo.png"
              alt="FoxRun Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-sora font-extrabold text-xl sm:text-2xl tracking-tight text-white relative">
            FoxRun<span className="text-[#FFB400] text-sm align-top">™</span>
          </span>
        </Link>

        {/* Desktop Navigation Links with Motion Active Indicator */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                  isActive ? "text-[#111111]" : "text-gray-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeHeaderPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#FFB400] rounded-full -z-0 shadow-[0_0_15px_rgba(255,180,0,0.4)]"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFB400] text-[#111111] font-sora font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(255,180,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,180,0,0.5)] transition-all duration-300 group"
          >
            <span>Get App</span>
            <ArrowUpRight className="icon-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#111111]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-semibold text-lg py-2 border-b border-white/5 transition-colors ${
                pathname === item.href ? "text-[#FFB400]" : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#FFB400] text-[#111111] font-sora font-bold py-3 rounded-full text-base shadow-lg"
          >
            <span>Download FoxRun App</span>
            <ArrowUpRight className="icon-sm" />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
