"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  Users,
  UserCheck,
  Target,
  Eye,
  Sparkles,
  Building2,
  Bike,
  Car,
  CarTaxiFront,
  Package,
  Truck,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  HeartHandshake,
  Layers,
  Wallet,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Easing & Animation Physics
const easeStandard = [0.23, 1, 0.32, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: easeStandard,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 5 Services Data for Interactive Showcase
const servicesData = [
  {
    id: "bike",
    name: "FoxRun Bike",
    category: "Quick City Rides",
    description:
      "Fast and convenient bike taxi services for quick and affordable travel through city traffic.",
    details: [
      "Instant Captain matching in < 2 minutes",
      "Safety helmets provided for every passenger",
      "Zero surge transparency on daily commutes",
    ],
    image: "/assets/img/1.png",
    icon: Bike,
  },
  {
    id: "auto",
    name: "FoxRun Auto",
    category: "Everyday Commutes",
    description:
      "Reliable auto-rickshaw rides for comfortable and economical local transportation across town.",
    details: [
      "Doorstep pickup with metered, upfront fares",
      "Spacious travel for individuals & small groups",
      "Direct digital or cash payment flexibility",
    ],
    image: "/assets/img/5.png",
    icon: CarTaxiFront,
  },
  {
    id: "cab",
    name: "FoxRun Cab",
    category: "Comfort Travel",
    description:
      "Economy and Comfort cab services for safe, convenient, and comfortable journeys anywhere in the city.",
    details: [
      "Air-conditioned hatchbacks & sedans",
      "Verified drivers & continuous GPS tracking",
      "Ideal for family trips and airport rides",
    ],
    image: "/assets/img/3.png",
    icon: Car,
  },
  {
    id: "parcel-lite",
    name: "Bike Lite Parcel",
    category: "Hyperlocal Logistics",
    description:
      "Quick delivery of documents, small packages, and lightweight items across the city.",
    details: [
      "Rapid doorstep pickup & direct destination drop",
      "Live order tracking from pickup to delivery",
      "Ideal for urgent papers, keys & small parcels",
    ],
    image: "/assets/img/4.png",
    icon: Package,
  },
  {
    id: "parcel-truck",
    name: "Pick-up Truck Parcel",
    category: "Cargo & Heavy Goods",
    description:
      "Mini-truck transportation for larger goods, cargo, and local business logistics requirements.",
    details: [
      "On-demand mini-truck dispatch (Tata Ace / similar)",
      "Designed for household moving & commercial logistics",
      "Transparent weight-based and distance-based pricing",
    ],
    image: "/assets/img/7.png",
    icon: Truck,
  },
];



// World-Class Final App CTA Section Recreated from Reference Design
function ExperienceFoxRunSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="bg-[#FFB400] text-[#111111] py-16 sm:py-24 lg:py-28 relative overflow-hidden select-none"
    >
      {/* Background Halftone Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      {/* Abstract Indian Temple/City Skyline Silhouettes at Bottom Background */}
      <motion.div
        animate={{ x: mousePos.x * -10 }}
        transition={{ type: "spring", stiffness: 90, damping: 30 }}
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none opacity-20 flex items-end justify-between px-2 z-0"
      >
        <svg className="w-full h-full text-[#111111] fill-current" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0,220 L0,140 L30,140 L30,90 L60,90 L60,180 L100,180 L100,50 L140,50 L140,220 L190,220 L190,110 L230,110 L230,70 L280,70 L280,220 L340,220 L340,100 L390,100 L390,150 L440,150 L440,40 L500,40 L500,220 L560,220 L560,120 L610,120 L610,80 L660,80 L660,220 L720,220 L720,90 L770,90 L770,160 L820,160 L820,60 L880,60 L880,220 L940,220 L940,130 L990,130 L990,70 L1050,70 L1050,220 L1110,220 L1110,100 L1160,100 L1160,170 L1210,170 L1210,40 L1270,40 L1270,220 L1340,220 L1340,110 L1440,110 L1440,220 Z" />
        </svg>
      </motion.div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeStandard }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Top Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white font-sora font-extrabold text-xs uppercase tracking-widest shadow-md">
                GET STARTED TODAY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sora font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] text-[#111111] tracking-tight leading-[0.95]">
              Experience<br />FoxRun.
            </h2>

            {/* Description */}
            <p className="font-inter font-medium text-base sm:text-lg lg:text-xl text-[#111111]/90 leading-relaxed max-w-xl">
              Download the FoxRun App today and experience the future of smart urban mobility and logistics.
            </p>

            {/* Download Buttons */}
            <div className="app-store-badges pt-2">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-badge px-6 rounded-[20px] bg-[#111111] text-white font-sora font-bold text-sm transition-all shadow-xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] group gap-3 sm:gap-3.5"
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
                  <div className="text-[10px] uppercase font-semibold text-gray-400 leading-none">Download on</div>
                  <div className="text-sm font-bold text-white leading-tight">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-badge px-6 rounded-[20px] bg-amber-400/30 border-2 border-[#111111] text-[#111111] font-sora font-bold text-sm hover:bg-[#111111] hover:text-white transition-all shadow-md group gap-3 sm:gap-3.5"
              >
                <div className="app-store-badge-icon-wrap">
                  <Image
                    src="/assets/img/appstore-icon.png"
                    alt="App Store"
                    fill
                    className="object-contain app-store-badge-icon group-hover:brightness-200 transition-all"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold opacity-70 leading-none group-hover:text-gray-300">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 2 Overlapping Smartphones & Floating 3D Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeStandard }}
            className="lg:col-span-6 relative flex justify-center items-center min-h-[480px] sm:min-h-[580px] lg:min-h-[620px]"
          >
            {/* Soft Ambient Background Ring */}
            <div className="absolute w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] border-2 border-[#111111]/15 rounded-full pointer-events-none" />

            {/* Back Phone (Angled & Offset) */}
            <motion.div
              animate={{
                x: mousePos.x * 10,
                y: mousePos.y * 8 - 10,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              className="absolute left-[8%] sm:left-[12%] top-[8%] w-[210px] sm:w-[260px] h-[430px] sm:h-[510px] rounded-[42px] bg-[#111111] p-3 border-4 border-gray-900 shadow-2xl rotate-[-8deg] opacity-95 z-10"
            >
              {/* Back Phone Screen Content Mockup */}
              <div className="w-full h-full rounded-[32px] bg-white overflow-hidden text-[#111111] p-4 text-xs font-inter flex flex-col justify-between shadow-inner">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                    <span>05 Jul 2025</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-[10px]">Completed</span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-sora font-extrabold text-sm text-[#111111]">7yznB8kZ 📋</div>
                    <div className="text-[10px] text-gray-500 font-medium">16, 1st Lane, Joshi Farm, Bhopal</div>
                  </div>

                  <div className="border-t border-gray-100 pt-2 space-y-1">
                    <div className="font-sora font-bold text-[11px]">Ride Information</div>
                    <div className="text-[10px] text-gray-500 flex justify-between">
                      <span>Date &amp; Time</span>
                      <span className="font-semibold text-[#111111]">Jul 05, 2025 - 5:14 PM</span>
                    </div>
                    <div className="text-[10px] text-gray-500 flex justify-between">
                      <span>Distance</span>
                      <span className="font-semibold text-[#111111]">2.28 km</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FFB400] flex items-center justify-center font-bold text-[10px]">
                      👤
                    </div>
                    <div className="text-[10px]">
                      <div className="font-bold">sonu suthar</div>
                      <div className="text-amber-500 font-bold">★ 5.0</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2 text-[10px] space-y-1">
                  <div className="font-sora font-bold">Bill Details</div>
                  <div className="flex justify-between font-bold text-xs text-[#111111]">
                    <span>Total Fare</span>
                    <span>₹127</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Front Phone (Prominent iPhone Mockup with Live Tracking UI) */}
            <motion.div
              animate={{
                x: mousePos.x * 18,
                y: mousePos.y * 14,
              }}
              transition={{ type: "spring", stiffness: 90, damping: 25 }}
              className="absolute right-[6%] sm:right-[10%] top-[2%] w-[240px] sm:w-[290px] h-[470px] sm:h-[550px] rounded-[48px] bg-[#111111] p-3.5 border-4 border-gray-800 shadow-[0_30px_70px_rgba(0,0,0,0.45)] z-20"
            >
              {/* iPhone Notch Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-blue-900 animate-pulse" />
              </div>

              {/* Front Phone Screen (Live Map & Booking UI) */}
              <div className="w-full h-full rounded-[38px] bg-slate-50 overflow-hidden text-[#111111] relative flex flex-col justify-between border border-gray-200">
                {/* Top Map Header */}
                <div className="p-3 bg-white/95 backdrop-blur-md pt-7 flex items-center justify-between border-b border-gray-100 z-10">
                  <div className="text-left">
                    <div className="font-sora font-extrabold text-xs tracking-tight text-[#111111]">NEW ASHOK NAGAR</div>
                    <div className="text-[9px] text-gray-500 font-medium">Map View • Live</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">📍</div>
                </div>

                {/* Simulated SVG Map Graphic Background */}
                <div className="absolute inset-0 bg-sky-50 opacity-90">
                  <svg className="w-full h-full opacity-30 stroke-sky-400 fill-none" viewBox="0 0 300 500">
                    <path d="M 20 50 Q 150 120, 280 200 T 100 450" strokeWidth="4" strokeDasharray="6 6" />
                    <circle cx="150" cy="180" r="45" className="fill-emerald-200/50 stroke-emerald-500" strokeWidth="2" />
                    <circle cx="150" cy="180" r="8" className="fill-emerald-600" />
                  </svg>
                </div>

                {/* Bottom Floating Booking Card */}
                <div className="p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 z-10 space-y-2 rounded-t-3xl shadow-2xl">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-gray-700">Finding your driver...</div>
                    <div className="text-[11px] font-extrabold text-[#111111]">We&apos;re looking for the best match for you!</div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-2/3 rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="text-[9px] text-gray-500 space-y-1 border-t border-gray-100 pt-1.5">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-[#111111]">C-1201, Sector 15, Noida</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="font-semibold text-[#111111]">21, Sector 32, Noida</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-amber-50 p-2 rounded-xl border border-amber-200 text-[10px]">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#111111]" />
                      <span className="font-bold">FoxRun Cab</span>
                    </div>
                    <div className="font-extrabold text-[#111111]">₹185 <span className="text-[8px] text-gray-500 font-normal">(8 mins)</span></div>
                  </div>

                  <button className="w-full py-2 bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs rounded-xl shadow-md">
                    Cancel Ride
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating 3D Location Pin (Upper Right) */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                x: mousePos.x * 22,
                rotate: [0, 5, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { type: "spring", stiffness: 100, damping: 25 },
              }}
              className="absolute top-[4%] right-[2%] sm:right-[4%] z-30"
            >
              <div className="w-12 h-14 rounded-b-full rounded-t-full bg-[#FFB400] border-3 border-[#111111] flex items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                <div className="w-5 h-5 rounded-full bg-[#111111]" />
              </div>
            </motion.div>

            {/* Floating 3D Gift / Parcel Box (Right Side) */}
            <motion.div
              animate={{
                y: [6, -8, 6],
                x: mousePos.x * 16,
                rotate: [0, -6, 0],
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                x: { type: "spring", stiffness: 100, damping: 25 },
              }}
              className="absolute bottom-[22%] right-[-2%] sm:right-[2%] z-30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFB400] border-2 border-[#111111] shadow-[0_12px_24px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-[#111111]" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 bg-[#111111]" />
                <Package className="w-6 h-6 text-white relative z-10" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURE STRIP (4 Items Horizontally below CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeStandard }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#111111]/15"
        >
          {/* Feature 1 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center gap-3 bg-white/30 p-3.5 rounded-2xl border border-[#111111]/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFB400] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sora font-extrabold text-sm text-[#111111]">Fast Booking</div>
              <div className="font-inter text-xs text-[#111111]/80 font-medium">Instant rides in seconds</div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center gap-3 bg-white/30 p-3.5 rounded-2xl border border-[#111111]/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFB400] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sora font-extrabold text-sm text-[#111111]">Safe &amp; Reliable</div>
              <div className="font-inter text-xs text-[#111111]/80 font-medium">Verified partners, secure trips</div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center gap-3 bg-white/30 p-3.5 rounded-2xl border border-[#111111]/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFB400] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sora font-extrabold text-sm text-[#111111]">Live Tracking</div>
              <div className="font-inter text-xs text-[#111111]/80 font-medium">Real-time updates every step</div>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center gap-3 bg-white/30 p-3.5 rounded-2xl border border-[#111111]/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFB400] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sora font-extrabold text-sm text-[#111111]">Move Anything</div>
              <div className="font-inter text-xs text-[#111111]/80 font-medium">People or packages, we deliver</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Redesigned Asymmetric Editorial Mission Section (Background: White #FFFFFF)
function MissionSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const missionCardsData = [
    {
      id: "01",
      number: "01",
      title: "Empowering Commuters",
      description:
        "Providing instant access to diverse ride options—from budget-friendly bikes and autos to comfortable cabs—ensuring nobody is ever late or stranded.",
      icon: Users,
      offsetY: -10,
      subtext: "RELIABLE RIDES",
    },
    {
      id: "02",
      number: "02",
      title: "Simplifying Logistics",
      description:
        "Offering instant, hassle-free parcel delivery services via bikes and pick-up trucks to support local households and businesses alike.",
      icon: Package,
      offsetY: 8,
      subtext: "EXPRESS LOGISTICS",
    },
    {
      id: "03",
      number: "03",
      title: "Empowering Driver Partners",
      description:
        "Creating sustainable livelihood opportunities, fair earnings, and flexible work environments for our dedicated fleet of Captains.",
      icon: UserCheck,
      offsetY: -6,
      subtext: "SUSTAINABLE EARNINGS",
    },
    {
      id: "04",
      number: "04",
      title: "Technology-Driven Safety",
      description:
        "Integrating real-time tracking, rigorous driver background verification, and seamless in-app safety protocols into every trip.",
      icon: ShieldCheck,
      offsetY: 12,
      subtext: "PASSENGER & CARGO SAFETY",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="bg-white text-[#111827] py-20 sm:py-28 relative overflow-hidden select-none"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#FFB400]/15 rounded-full filter blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-yellow-400/10 rounded-full filter blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeStandard }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#111111] bg-[#FFB400]/20 px-5 py-2 rounded-full inline-block border border-[#FFB400]/40">
                OUR MISSION
              </span>
            </div>

            <h2 className="font-sora font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-[1.1]">
              Powering Every <span className="bg-[#FFB400] text-[#111111] px-3 py-1 rounded-2xl shadow-md inline-block my-1">Journey.</span><br />
              Delivering Every <span className="bg-[#111111] text-[#FFB400] px-3 py-1 rounded-2xl shadow-md inline-block my-1">Promise.</span>
            </h2>

            <p className="font-inter text-gray-600 text-base sm:text-lg leading-relaxed font-medium max-w-xl">
              &ldquo;To revolutionize urban transit and logistics by delivering reliable, safe, and lightning-fast multi-modal mobility solutions right to everyone&apos;s fingertips.&rdquo;
            </p>
          </motion.div>

          {/* Right Column (6 cols): Mobility Ecosystem Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeStandard }}
            className="lg:col-span-6 relative flex justify-center items-center min-h-[360px] sm:min-h-[420px]"
          >
            {/* Ambient Circular Orbit Ring */}
            <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] border border-[#111111]/15 rounded-full pointer-events-none animate-pulse" />

            {/* Central Ecosystem Image Visual */}
            <motion.div
              animate={{
                x: mousePos.x * 12,
                y: mousePos.y * 12,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-[32px] overflow-hidden border-4 border-gray-100 bg-[#111111] shadow-2xl p-4 flex items-center justify-center"
            >
              <Image
                src="/assets/img/3.png"
                alt="FoxRun Mobility Fleet"
                fill
                className="object-contain p-4"
              />
            </motion.div>

            {/* Floating Visual 1: Bike */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                x: mousePos.x * 16,
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { type: "spring", stiffness: 100, damping: 25 },
              }}
              className="absolute top-2 left-4 sm:left-10 bg-[#FFB400] text-[#111111] p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-[#111111]/10 z-20"
            >
              <Bike className="w-5 h-5" />
              <span className="font-sora font-extrabold text-xs">Bike Taxi</span>
            </motion.div>

            {/* Floating Visual 2: Parcel */}
            <motion.div
              animate={{
                y: [6, -6, 6],
                x: mousePos.x * 18,
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                x: { type: "spring", stiffness: 100, damping: 25 },
              }}
              className="absolute bottom-2 right-4 sm:right-10 bg-[#111111] text-[#FFB400] p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20 z-20"
            >
              <Package className="w-5 h-5" />
              <span className="font-sora font-extrabold text-xs">Lite Parcel</span>
            </motion.div>
          </motion.div>
        </div>

        {/* STATIC 4-COLUMN CARDS GRID FOR MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {missionCardsData.map((card) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="bg-gray-50/90 hover:bg-white text-[#111111] p-7 rounded-[28px] border-2 border-gray-200/90 hover:border-[#111111] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
              >
                <div className="space-y-4 relative z-10">
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-sora font-extrabold text-3xl sm:text-4xl text-[#111111] group-hover:text-[#FFB400] transition-colors">
                      {card.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFB400] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#FFB400] group-hover:text-[#111111] transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-[#111111] leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-[#111111]/80 text-xs sm:text-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between relative z-10">
                  <span className="font-sora font-extrabold text-[10px] uppercase tracking-widest text-[#111111] bg-[#FFB400] px-3.5 py-1 rounded-full shadow-xs">
                    {card.subtext}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#FFB400] group-hover:text-[#111111] transition-all shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Masterpiece Static Centered Vision Showcase (#FFB400 FoxRun Yellow Dominant)
function VisionSection() {
  const visionCardsData = [
    {
      id: "01",
      number: "01",
      tag: "01 / MOBILITY",
      title: "Frictionless Urban Mobility",
      description:
        "Urban mobility becomes frictionless, cutting down daily travel times and reducing congestion in cities.",
      icon: Zap,
      subtext: "Fast & Seamless Transit",
    },
    {
      id: "02",
      number: "02",
      tag: "02 / LOGISTICS",
      title: "Simplified Local Logistics",
      description:
        "Small businesses and individuals can move goods across town as easily as sending a text message.",
      icon: Package,
      subtext: "Hyperlocal Express Logistics",
    },
    {
      id: "03",
      number: "03",
      tag: "03 / TECHNOLOGY",
      title: "Technology as an Equalizer",
      description:
        "Technology bridges connectivity gaps in emerging urban and semi-urban clusters across India.",
      icon: Globe,
      subtext: "India-Wide Connectivity",
    },
  ];

  return (
    <section className="bg-[#FFB400] text-[#111111] py-20 sm:py-28 relative overflow-hidden select-none">
      {/* 1. BACKGROUND TEXTURE & AMBIENT DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/20 rounded-full filter blur-[150px] pointer-events-none -z-0" />

      {/* Floating Decorative Elements on Edges */}
      <div className="absolute top-16 left-8 pointer-events-none hidden lg:block animate-bounce-slow opacity-60">
        <div className="bg-[#111111] text-[#FFB400] p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20 text-xs font-sora font-extrabold">
          <MapPin className="w-4 h-4" />
          <span>Location Node</span>
        </div>
      </div>

      <div className="absolute top-24 right-10 pointer-events-none hidden lg:block animate-float-medium opacity-60">
        <div className="bg-[#111111] text-[#FFB400] p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20 text-xs font-sora font-extrabold">
          <Package className="w-4 h-4" />
          <span>Parcel Transit</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* 2. CENTERED VISION HEADER AREA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeStandard }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Small Pill */}
          <div>
            <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-5 py-2 rounded-full inline-block shadow-md">
              OUR VISION
            </span>
          </div>

          {/* Centered Headline */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-[#111111] tracking-tight leading-[1.05] max-w-3xl mx-auto">
            Building the{" "}
            <span className="bg-white text-[#111111] px-3 py-1 rounded-2xl border border-[#111111]/15 shadow-sm inline-block my-1">
              Future
            </span>{" "}
            of{" "}
            <span className="bg-[#111111] text-white px-3 py-1 rounded-2xl shadow-md inline-block my-1">
              Mobility
            </span>{" "}
            &amp;{" "}
            <span className="bg-[#111111] text-white px-3 py-1 rounded-2xl shadow-md inline-block my-1">
              Logistics
            </span>{" "}
            in India.
          </h2>

          {/* Official Vision Statement Quote */}
          <p className="font-inter text-[#111111]/90 text-base sm:text-xl leading-relaxed font-semibold max-w-2xl mx-auto pt-2">
            &ldquo;To become India’s most trusted, tech-forward, and comprehensive everyday mobility and hyperlocal logistics ecosystem.&rdquo;
          </p>
        </motion.div>

        {/* 3. STATIC 3-CARD GRID SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto pt-4">
          {visionCardsData.map((card) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#111111] text-white p-7 sm:p-8 rounded-[36px] border border-[#FFB400]/25 shadow-2xl flex flex-col justify-between group relative overflow-hidden transition-all hover:border-[#FFB400] cursor-pointer min-h-[340px]"
              >
                {/* Subtle Card Background Watermark Icon */}
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                  <IconComp className="w-44 h-44 text-[#FFB400]" />
                </div>

                {/* Top Header inside Card */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-sora font-extrabold text-4xl text-[#FFB400] group-hover:scale-110 transition-transform">
                    {card.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFB400] border border-white/10 group-hover:bg-[#FFB400] group-hover:text-[#111111] transition-colors shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Middle Content inside Card */}
                <div className="space-y-3 relative z-10 my-4">
                  <h3 className="font-sora font-extrabold text-2xl text-white group-hover:text-[#FFB400] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-inter text-gray-300 text-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Footer inside Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sora font-bold text-[#FFB400] relative z-10">
                  <span className="uppercase tracking-wider">{card.subtext}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Masterpiece Interactive "WHY CHOOSE FOXRUN?" Section (Background: #FFFFFF White - Grid Layout)
function WhyChooseFoxRunSection() {
  const [activeCardId, setActiveCardId] = useState<string>("01");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const whyChooseCardsData = [
    {
      id: "01",
      number: "01",
      title: "LIGHTNING-FAST BOOKING",
      description:
        "Connect with nearby drivers and riders in seconds with our user-friendly app interface.",
      icon: Zap,
      badge: "Instant Dispatch < 2 Mins",
      feature: "Zero Surge Guarantee",
      subtext: "WHY IT MATTERS",
    },
    {
      id: "02",
      number: "02",
      title: "SAFETY FIRST",
      description:
        "Verified driver partners, real-time trip tracking, and emergency support ensure you ride and send parcels with complete peace of mind.",
      icon: ShieldCheck,
      badge: "100% Verified Captains",
      feature: "SOS & Live GPS Tracking",
      subtext: "WHY IT MATTERS",
    },
    {
      id: "03",
      number: "03",
      title: "TRANSPARENT PRICING",
      description:
        "No hidden charges — know your exact fare before you book.",
      icon: Wallet,
      badge: "Upfront Fixed Fares",
      feature: "Zero Hidden Fees",
      subtext: "WHY IT MATTERS",
    },
    {
      id: "04",
      number: "04",
      title: "24/7 AVAILABILITY",
      description:
        "Day or night, our captains and logistics partners are always ready to serve you.",
      icon: Clock,
      badge: "Round-the-Clock Fleet",
      feature: "24/7 Live Support",
      subtext: "WHY IT MATTERS",
    },
  ];

  return (
    <section className="bg-white text-[#111827] py-20 sm:py-28 relative overflow-hidden select-none">
      {/* Top Visual Transition from #FFB400 Our Vision into White */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FFB400]/20 via-[#FFB400]/5 to-transparent pointer-events-none" />
      
      {/* Subtle Yellow Route Line at Top Edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl flex items-center justify-center gap-4 opacity-40 pointer-events-none pt-2">
        <div className="w-1/3 h-[1.5px] bg-gradient-to-r from-transparent to-[#FFB400]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFB400]" />
        <div className="w-1/3 h-[1.5px] bg-gradient-to-l from-transparent to-[#FFB400]" />
      </div>

      {/* Background Details: Clean White Base with Subtle Dot Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/3 left-8 w-80 h-80 bg-[#FFB400]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-8 w-96 h-96 bg-amber-300/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header & Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeStandard }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Black Pill Eyebrow */}
          <div>
            <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-6 py-2.5 rounded-full inline-block shadow-md">
              WHY CHOOSE FOXRUN?
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-[#111111] tracking-tight leading-[1.05] max-w-3xl mx-auto">
            Why FoxRun for Everyday Mobility?
          </h2>

          {/* Supporting Text */}
          <p className="font-inter text-[#111111]/85 text-base sm:text-xl leading-relaxed font-semibold max-w-2xl mx-auto pt-1">
            Built around speed, safety, transparency, and always-on service.
          </p>
        </motion.div>

        {/* STATIC 4-CARD INTERACTIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseCardsData.map((card) => {
            const IconComp = card.icon;
            const isHovered = hoveredCardId === card.id;
            const isActive = activeCardId === card.id;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className={`bg-gray-50/90 hover:bg-white text-[#111111] p-7 sm:p-8 rounded-[32px] border-2 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden group cursor-pointer ${
                  isActive || isHovered
                    ? "border-[#111111] shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                    : "border-gray-200/90 hover:border-[#111111]"
                }`}
              >
                {/* Ambient Card Radial Glow */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-[#FFB400]/15 rounded-full filter blur-2xl transition-opacity duration-500 pointer-events-none ${
                    isActive || isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-sora font-extrabold text-4xl text-[#111111] group-hover:text-[#FFB400] transition-colors">
                      {card.number}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        isActive || isHovered
                          ? "bg-[#FFB400] text-[#111111] border-[#FFB400] scale-105 shadow-sm"
                          : "bg-[#111111] text-[#FFB400] border-[#111111]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                    </div>
                  </div>

                  {/* Feature Badge Tag */}
                  <div>
                    <span className="font-sora font-extrabold text-[10px] uppercase tracking-wider text-[#111111] bg-[#FFB400] px-3.5 py-1 rounded-full inline-block shadow-xs">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 pt-1">
                    <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-[#111111] leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-inter text-[#111111]/80 text-xs sm:text-sm leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Micro Interaction: Animated Route Line & WHY IT MATTERS Tag */}
                <div className="pt-6 mt-6 border-t border-gray-200/80 space-y-4 relative z-10">
                  {/* Micro Animated Route Line ────────●──────── */}
                  <div className="relative w-full h-[2px] bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="w-12 h-full bg-[#FFB400] rounded-full shadow-[0_0_8px_#FFB400]"
                    />
                  </div>

                  {/* Tag & Arrow Micro Action */}
                  <div className="flex items-center justify-between">
                    <span className="font-sora font-extrabold text-[10px] uppercase tracking-widest text-[#111111]">
                      {card.subtext}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#FFB400] group-hover:text-[#111111] transition-all shadow-md">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Visual Transition Path to Experience FoxRun Yellow CTA Section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FFB400]/20 via-[#FFB400]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 pointer-events-none pb-2">
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-transparent to-[#FFB400]" />
        <div className="w-2 h-2 rounded-full bg-[#FFB400] animate-bounce" />
      </div>
    </section>
  );
}

export default function AboutPage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans overflow-x-hidden">
      {/* 1. Header (Reused unchanged) */}
      <Header />

      <main className="flex-grow">
        {/* ====================================================
            1. HERO SECTION (Background: #FFFFFF - White)
            ==================================================== */}
        <section className="relative bg-white text-[#111827] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          {/* Ambient Decorative Glows */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFB400]/15 rounded-full filter blur-[120px] pointer-events-none -z-0 animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-yellow-400/10 rounded-full filter blur-[100px] pointer-events-none -z-0 animate-float-medium" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Hero Content Left */}
              <motion.div
                className="lg:col-span-7 space-y-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Eyebrow */}
                <motion.div variants={fadeInUp} custom={0}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] text-[#FFB400] font-sora font-extrabold text-xs uppercase tracking-widest shadow-md animate-float-slow">
                    <span className="w-2 h-2 rounded-full bg-[#FFB400] animate-pulse" />
                    ABOUT FOXRUN™
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={fadeInUp}
                  custom={1}
                  className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-[1.1]"
                >
                  Moving Cities Forward.
                </motion.h1>

                {/* Subheadline / Second Line */}
                <motion.p
                  variants={fadeInUp}
                  custom={2}
                  className="font-sora font-bold text-xl sm:text-2xl text-[#111111] tracking-tight"
                >
                  One Ride. One Delivery. One Smarter Journey.
                </motion.p>

                {/* Supporting Text */}
                <motion.p
                  variants={fadeInUp}
                  custom={3}
                  className="font-inter text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl"
                >
                  FoxRun Mobility India (OPC) Private Limited is building a smarter, faster, and more accessible urban mobility and hyperlocal logistics ecosystem.
                </motion.p>

                {/* Subtle Supporting Line */}
                <motion.div
                  variants={fadeInUp}
                  custom={4}
                  className="inline-block pt-1"
                >
                  <span className="font-sora font-semibold text-sm text-[#111111] bg-amber-50 border border-amber-200 px-4 py-2 rounded-full shadow-sm">
                    Ride Smart. Ride Fast. Go FoxRun.
                  </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={fadeInUp}
                  custom={5}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    href="#services"
                    className="inline-flex items-center gap-3 bg-[#FFB400] text-[#111111] font-sora font-bold text-base px-8 py-4 rounded-full hover:bg-[#111111] hover:text-[#FFB400] transition-all shadow-xl hover:shadow-[0_8px_30px_rgba(255,180,0,0.35)] group"
                  >
                    <span>Explore Our Services</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    href="https://play.google.com/store/apps/details?id=com.foxrunmobility.rider"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent text-[#111111] font-sora font-bold text-base px-8 py-4 rounded-full border-2 border-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-md"
                  >
                    <span>Download the App</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Hero Image Right - MUST use assets/img/aboutpage_01.jpeg */}
              <motion.div
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: easeStandard }}
              >
                <div className="relative w-full h-[320px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#111111] group animate-float-medium bg-[#111111] p-2 sm:p-3">
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111111]">
                    <Image
                      src="/assets/img/aboutpage_01.png"
                      alt="FoxRun Moving Cities Forward"
                      fill
                      className="object-cover object-left-top transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Overlay Badge Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#111111]/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl animate-float-slow">
                    <div className="flex items-center gap-2 text-[#FFB400] font-sora font-bold text-xs uppercase tracking-wider mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>URBAN MOBILITY &amp; LOGISTICS</span>
                    </div>
                    <p className="font-inter text-xs sm:text-sm text-gray-200 leading-snug">
                      Connecting commuters and cargo across Indian cities with speed and reliability.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            2. WHO IS FOXRUN (Background: #FFB400 - FoxRun Yellow)
            ==================================================== */}
        <section className="bg-[#FFB400] text-[#111111] py-20 sm:py-28 relative overflow-hidden">
          {/* Signature Dot Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeStandard }}
                className="lg:col-span-6 relative"
              >
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#111111] bg-[#111111] animate-float-slow group p-2.5 sm:p-3">
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#111111]">
                    <Image
                      src="/assets/img/aboutpage_02.png"
                      alt="FoxRun Mobility Partner"
                      fill
                      className="object-contain sm:object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white font-sora z-10">
                    <div className="bg-[#111111] text-[#FFB400] inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2 shadow-md border border-[#FFB400]/20">
                      MOBILITY + LOGISTICS
                    </div>
                    <div className="text-xl sm:text-2xl font-bold">Built for Every Indian Commute &amp; Delivery.</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Editorial Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeStandard }}
                className="lg:col-span-6 space-y-6"
              >
                <div>
                  <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                    WHO WE ARE
                  </span>
                  <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight leading-tight mt-3">
                    Your Ultimate Mobility &amp; Logistics Partner
                  </h2>
                </div>

                <p className="font-inter text-[#111111] text-base sm:text-lg leading-relaxed font-semibold">
                  At FoxRun, we are transforming the way people move and goods are delivered across the city.
                </p>

                <div className="space-y-3 font-inter text-[#111111] text-sm sm:text-base leading-relaxed">
                  <p className="font-bold text-[#111111]">Whether you are:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 bg-white/40 p-3.5 rounded-2xl border border-[#111111]/10 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] shrink-0" />
                      <span>Running late for work and need a quick bike taxi</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/40 p-3.5 rounded-2xl border border-[#111111]/10 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] shrink-0" />
                      <span>Heading out with family in a comfortable cab or auto</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/40 p-3.5 rounded-2xl border border-[#111111]/10 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] shrink-0" />
                      <span>Sending important packages across town via bike or mini-truck</span>
                    </li>
                  </ul>
                </div>

                <p className="font-inter text-[#111111] text-base sm:text-lg leading-relaxed font-medium pt-2">
                  FoxRun provides an all-in-one quick-booking solution designed to make urban travel and logistics seamless, fast, and affordable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            3. COMPANY SNAPSHOT (Background: #FFFFFF - White)
            ==================================================== */}
        <section className="bg-white text-[#111827] py-20 sm:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeStandard }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#111111] bg-[#FFB400]/20 px-3.5 py-1.5 rounded-full inline-block border border-[#FFB400]/40">
                CORPORATE STRUCTURE
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
                FoxRun at a Glance
              </h2>
              <p className="font-inter text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
                Structured as a One Person Company (OPC) Private Limited to enable agile decision-making, direct operational control, and streamlined accountability.
              </p>
            </motion.div>

            {/* 5 Premium Data Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Company */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, ease: easeStandard }}
                className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-between animate-float-slow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sora font-bold text-xs uppercase tracking-widest text-[#FFB400] block mb-2">
                    OFFICIAL ENTITY NAME
                  </span>
                  <div className="font-sora font-extrabold text-xl sm:text-2xl text-white leading-tight">
                    FoxRun Mobility India (OPC) Private Limited
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Structure */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeStandard }}
                className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-between animate-float-medium"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sora font-bold text-xs uppercase tracking-widest text-[#FFB400] block mb-2">
                    STRUCTURE
                  </span>
                  <div className="font-sora font-extrabold text-2xl text-white leading-tight">
                    One Person Company (OPC)
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Incorporation */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeStandard }}
                className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-between animate-float-drift"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sora font-bold text-xs uppercase tracking-widest text-[#FFB400] block mb-2">
                    DATE OF INCORPORATION
                  </span>
                  <div className="font-sora font-extrabold text-2xl text-white leading-tight">
                    August 10, 2026
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Industry */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeStandard }}
                className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-between animate-float-slow sm:col-span-2 lg:col-span-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sora font-bold text-xs uppercase tracking-widest text-[#FFB400] block mb-2">
                    CORE INDUSTRY
                  </span>
                  <div className="font-sora font-extrabold text-xl sm:text-2xl text-white leading-tight">
                    Urban Mobility, Ride-Hailing, Transport &amp; Hyperlocal Logistics Services
                  </div>
                </div>
              </motion.div>

              {/* Card 5: CIN */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.4, ease: easeStandard }}
                className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-between animate-float-medium sm:col-span-2 lg:col-span-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center mb-6 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-sora font-bold text-xs uppercase tracking-widest text-[#FFB400] block mb-2">
                    CIN NUMBER
                  </span>
                  <div className="font-sora font-mono font-bold text-sm sm:text-base text-white tracking-wider bg-white/10 px-3 py-2 rounded-xl border border-white/10 inline-block">
                    U62090KA2026OPC225780
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            4. WHAT WE OFFER (Interactive Service Showcase - #FFB400 Yellow)
            ==================================================== */}
        <section id="services" className="bg-[#FFB400] text-[#111111] py-20 sm:py-28 relative overflow-hidden">
          {/* Signature Dot Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeStandard }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-5 py-2 rounded-full inline-block shadow-sm">
                OUR SERVICES
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
                One Platform. Multiple Ways to Move.
              </h2>
              <p className="font-inter text-[#111111]/90 text-base sm:text-lg leading-relaxed font-medium">
                From everyday rides to local logistics, FoxRun brings mobility and delivery services together in one ecosystem.
              </p>
            </motion.div>

            {/* Desktop Showcase Layout */}
            <div className="hidden lg:grid grid-cols-12 gap-10 items-center">
              {/* Left Selector List */}
              <div className="col-span-5 space-y-3">
                {servicesData.map((service) => {
                  const IconComp = service.icon;
                  const isActive = activeService.id === service.id;

                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between border ${
                        isActive
                          ? "bg-[#111111] text-white border-[#111111] shadow-xl"
                          : "bg-white/40 text-[#111111] border-[#111111]/10 hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                            isActive
                              ? "bg-[#FFB400] text-[#111111]"
                              : "bg-[#111111] text-[#FFB400]"
                          }`}
                        >
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-sora font-bold text-lg leading-snug">
                            {service.name}
                          </div>
                          <div
                            className={`font-inter text-xs font-semibold ${
                              isActive ? "text-[#FFB400]" : "text-[#111111]/70"
                            }`}
                          >
                            {service.category}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isActive ? "translate-x-1 text-[#FFB400]" : "text-[#111111]/60"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Right Active Display Card */}
              <div className="col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: easeStandard }}
                    className="bg-[#111111] text-white p-8 rounded-[32px] border-4 border-white/10 shadow-2xl space-y-6"
                  >
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FFB400] border border-[#FFB400]/40 flex items-center justify-center shadow-inner">
                      <Image
                        src={activeService.image}
                        alt={activeService.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs uppercase tracking-wider mb-2">
                        {activeService.category}
                      </div>
                      <h3 className="font-sora font-extrabold text-3xl text-white mb-2">
                        {activeService.name}
                      </h3>
                      <p className="font-inter text-gray-300 text-base leading-relaxed">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {activeService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#FFB400] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Stacked Card Showcase Layout */}
            <div className="lg:hidden space-y-6">
              {servicesData.map((service) => {
                const IconComp = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#111111] text-white rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFB400] text-[#111111] flex items-center justify-center font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-sora font-extrabold text-xl text-white">
                          {service.name}
                        </div>
                        <div className="font-inter text-xs font-semibold text-[#FFB400] uppercase tracking-wider">
                          {service.category}
                        </div>
                      </div>
                    </div>

                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FFB400] border border-[#FFB400]/40 flex items-center justify-center shadow-inner">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <p className="font-inter text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB400] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================
            5. MISSION (Background: #111111 - Black Dominant)
            ==================================================== */}
        <MissionSection />

        {/* ====================================================
            6. VISION (Background: #FFB400 - FoxRun Yellow Dominant)
            ==================================================== */}
        <VisionSection />

        {/* ====================================================
            6.5. WHY CHOOSE FOXRUN (Background: #FFFFFF - White)
            ==================================================== */}
        <WhyChooseFoxRunSection />



        {/* ====================================================
            8. BUILT TO SCALE (Background: #FFB400 - FoxRun Yellow)
            ==================================================== */}
        <section className="bg-[#FFB400] text-[#111111] py-20 sm:py-28 relative overflow-hidden">
          {/* Signature Dot Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeStandard }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#FFB400] bg-[#111111] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                GROWTH DIRECTION
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
                Built for India&apos;s Next Chapter of Mobility
              </h2>
              <p className="font-inter text-[#111111]/90 text-base sm:text-lg leading-relaxed font-medium">
                FoxRun is engineered from inception to deploy scalable software infrastructure and empower local transport networks across Tier-1 and Tier-2 Indian cities.
              </p>
            </motion.div>

            {/* Visual Vector Grid Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Seed Expansion",
                  desc: "Structured for rapid regional scaling across high-growth urban hubs.",
                  icon: TrendingUp,
                },
                {
                  title: "Scalable Infrastructure",
                  desc: "High-concurrency microservices engineered for low-latency dispatch.",
                  icon: Layers,
                },
                {
                  title: "Driver Partner Acquisition",
                  desc: "Building a dedicated fleet of Captains with sustainable earnings.",
                  icon: Users,
                },
                {
                  title: "Multi-Modal Network",
                  desc: "Unifying bikes, autos, cabs, and parcel freight under one unified platform.",
                  icon: Bike,
                },
                {
                  title: "Tier-1 & Tier-2 Focus",
                  desc: "Bringing high-tech mobility solutions to emerging Indian urban centers.",
                  icon: MapPin,
                },
                {
                  title: "Real-Time Intelligence",
                  desc: "Geospatial optimization tuned for Indian traffic dynamics and routes.",
                  icon: Zap,
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: easeStandard }}
                    className="bg-white/40 p-6 rounded-2xl border border-[#111111]/10 shadow-sm hover:bg-white/60 transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#FFB400] flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-sora font-bold text-xl text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#111111]/85 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================
            9. CORPORATE PRESENCE (Background: #FFFFFF - White)
            ==================================================== */}
        <section className="bg-white text-[#111827] py-20 sm:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeStandard }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <span className="font-sora font-extrabold text-xs uppercase tracking-widest text-[#111111] bg-[#FFB400]/20 px-3.5 py-1.5 rounded-full inline-block border border-[#FFB400]/40">
                HEADQUARTERS &amp; OPERATIONS
              </span>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight">
                Where We&apos;re Building From
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Registered Office Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 animate-float-slow shadow-2xl"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-[#FFB400] font-sora font-bold text-xs uppercase tracking-widest mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>REGISTERED OFFICE &amp; SUPPORT HUB</span>
                  </div>
                  <h3 className="font-sora font-extrabold text-3xl text-white mb-2">
                    Bengaluru, Karnataka
                  </h3>
                  <p className="font-inter text-gray-300 text-base leading-relaxed">
                    Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka, 560008
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3 font-inter text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FFB400] shrink-0" />
                    <span>Support Email: <strong className="text-white">Contact@FoxRun.in</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#FFB400] shrink-0" />
                    <span>Helpline: <strong className="text-white">+91 22 6962 0985</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#FFB400] shrink-0" />
                    <span>Website: <strong className="text-white">https://foxrun.in</strong></span>
                  </div>
                </div>
              </motion.div>

              {/* Regional Coordination Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="lg:col-span-5 bg-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 animate-float-medium shadow-2xl"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-[#FFB400] font-sora font-bold text-xs uppercase tracking-widest mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>REGIONAL OPERATIONS</span>
                  </div>
                  <h3 className="font-sora font-extrabold text-2xl text-white mb-3">
                    Multi-Hub Coordination
                  </h3>
                  <p className="font-inter text-gray-300 text-sm sm:text-base leading-relaxed">
                    Operations and regional coordination also span across major hubs including <strong className="text-white">Chhattisgarh</strong> and rapidly expanding Indian cities.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFB400]/10 border border-[#FFB400]/20 text-[#FFB400] text-xs font-sora font-semibold">
                  Empowering regional Captain fleets with localized operational support.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================================================
            11. APP CTA (Recreated from Reference Design)
            ==================================================== */}
        <ExperienceFoxRunSection />
      </main>

      {/* 12. Footer (Reused unchanged) */}
      <Footer />
    </div>
  );
}
