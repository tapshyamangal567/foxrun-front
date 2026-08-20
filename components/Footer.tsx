"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Play, Twitter, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: FoxRun Brand & Office Area (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 overflow-hidden rounded-xl bg-white/5 p-1 border border-white/10 group-hover:border-[#FFB400] transition-colors duration-300 shadow-sm">
                <Image
                  src="/assets/img/logo.png"
                  alt="FoxRun Logo"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-sora font-extrabold text-2xl text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
                FoxRun<span className="text-[#FFB400] text-sm align-top">™</span>
              </span>
            </Link>

            <p className="font-inter text-[#9CA3AF] text-xs sm:text-sm leading-relaxed max-w-sm">
              FoxRun Mobility delivers dependable, 24/7 ride-hailing and car booking experiences designed for modern Indian cities.
            </p>

            <div className="space-y-3 font-inter text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5 group/addr">
                <MapPin className="icon-sm text-[#FFB400] shrink-0 mt-0.5 group-hover/addr:scale-110 transition-transform" />
                <span className="text-[#9CA3AF] group-hover/addr:text-white transition-colors leading-snug">
                  Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="icon-sm text-[#FFB400] shrink-0" />
                <a href="tel:02269620985" className="text-[#9CA3AF] hover:text-[#FFB400] transition-colors duration-200 font-medium">
                  02269620985
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="icon-sm text-[#FFB400] shrink-0" />
                <a href="mailto:Contact@Foxrun.in" className="text-[#9CA3AF] hover:text-[#FFB400] transition-colors duration-200 font-medium">
                  Contact@Foxrun.in
                </a>
              </div>
            </div>
          </div>

          {/* Columns 2-5: Navigation Links & App Badges (lg:col-span-8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Column 2: Company */}
            <div>
              <h4 className="font-sora font-bold text-sm sm:text-base text-[#FFFFFF] mb-4 border-b border-white/10 pb-2">
                Company
              </h4>
              <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-[#9CA3AF]">
                <li>
                  <Link href="/" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Terms */}
            <div>
              <h4 className="font-sora font-bold text-sm sm:text-base text-[#FFFFFF] mb-4 border-b border-white/10 pb-2">
                Customer Terms
              </h4>
              <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-[#9CA3AF]">
                <li>
                  <Link href="/customer-terms-bike-taxi" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Customer Terms - Bike Taxi
                  </Link>
                </li>
                <li>
                  <Link href="/customer-terms-cabs-and-auto" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Customer Terms - Cabs and Auto
                  </Link>
                </li>
                <li>
                  <Link href="/corporate-affairs" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Corporate Affairs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Captain Terms */}
            <div>
              <h4 className="font-sora font-bold text-sm sm:text-base text-[#FFFFFF] mb-4 border-b border-white/10 pb-2">
                Captain Terms
              </h4>
              <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-[#9CA3AF]">
                <li>
                  <Link href="/captain-terms-bike-taxi" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Captain Terms - Bike Taxi
                  </Link>
                </li>
                <li>
                  <Link href="/captain-terms-cabs-and-auto" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Captain Terms - Cabs and Auto
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="inline-block hover:text-[#FFB400] hover:translate-x-[3px] transition-all duration-250 ease-out">
                    Support Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Get App Store Buttons */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h4 className="font-sora font-bold text-sm sm:text-base text-[#FFFFFF] mb-4 border-b border-white/10 pb-2">
                Get App
              </h4>
              
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[48px] px-3.5 rounded-xl flex items-center gap-3 bg-white/10 hover:bg-[#FFB400] hover:text-[#111111] text-[#FFFFFF] text-xs font-sora font-bold transition-all duration-300 border border-white/10 shadow-md group w-full"
              >
                <div className="w-6 h-6 sm:w-[26px] sm:h-[26px] relative shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/img/playstore-icon.png"
                    alt="Google Play"
                    fill
                    className="object-contain app-store-badge-icon"
                  />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#111111]/80 leading-tight">GET IT ON</div>
                  <div className="text-xs font-extrabold leading-tight">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="#"
                className="h-[48px] px-3.5 rounded-xl flex items-center gap-3 bg-white/10 hover:bg-white hover:text-[#111111] text-[#FFFFFF] text-xs font-sora font-bold transition-all duration-300 border border-white/10 shadow-md group w-full"
              >
                <div className="w-6 h-6 sm:w-[26px] sm:h-[26px] relative shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/img/appstore-icon.png"
                    alt="App Store"
                    fill
                    className="object-contain app-store-badge-icon"
                  />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#111111]/80 leading-tight">DOWNLOAD ON</div>
                  <div className="text-xs font-extrabold leading-tight">App Store</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-sora text-xs font-bold text-gray-300 tracking-wide">
              © 2026 FOXRUN INDIA (OPC) PRIVATE LIMITED. All rights reserved.
            </p>
            <p className="font-inter text-[11px] text-[#9CA3AF]">
              Designed and Maintained by{" "}
              <a
                href="https://neuravolt.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NeuraVolt Technology (opens in a new tab)"
                className="group/link inline-flex items-center text-[#FFB400] hover:text-[#FFD700] transition-colors duration-200 font-semibold hover:underline"
              >
                <span>NeuraVolt Technology</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </p>
          </div>

          {/* Social Handles */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/FoxRun120911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter X"
              className="icon-box-sm rounded-full bg-white/5 hover:bg-[#FFB400] hover:text-[#111111] text-gray-300 transition-colors duration-300"
            >
              <Twitter className="icon-sm" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/share/17MSFPE31K/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="icon-box-sm rounded-full bg-white/5 hover:bg-[#FFB400] hover:text-[#111111] text-gray-300 transition-colors duration-300"
            >
              <Facebook className="icon-sm" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/share/17MSFPE31K/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon-box-sm rounded-full bg-white/5 hover:bg-[#FFB400] hover:text-[#111111] text-gray-300 transition-colors duration-300"
            >
              <Instagram className="icon-sm" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://in.linkedin.com/in/foxrun-rides-5b32ba32b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-box-sm rounded-full bg-white/5 hover:bg-[#FFB400] hover:text-[#111111] text-gray-300 transition-colors duration-300"
            >
              <Linkedin className="icon-sm" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://youtube.com/@foxrun-rides?si=Sd0GPICnUyZH0q3e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="icon-box-sm rounded-full bg-white/5 hover:bg-[#FFB400] hover:text-[#111111] text-gray-300 transition-colors duration-300"
            >
              <Youtube className="icon-sm" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
