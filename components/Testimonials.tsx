"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

export default function Testimonials() {
  // Exact 6 FoxRun Testimonials in specified sequence
  const testimonials = [
    {
      id: "rohit",
      name: "Rohit Sharma",
      location: "Raipur, Chhattisgarh",
      text: "Booked a self-drive car for a family trip and the pickup was quick, the car was clean, and the pricing matched the app exactly. It felt made for everyday Indian travel.",
      floatDuration: 6.0,
      floatY: [-4, 4, -4],
    },
    {
      id: "ananya",
      name: "Ananya Das",
      location: "Raipur, Chhattisgarh",
      text: "The app handled my late-evening ride in Raipur smoothly. I liked the clear fare estimate and how easy it was to find a driver when I needed one.",
      floatDuration: 7.2,
      floatY: [4, -4, 4],
    },
    {
      id: "imran",
      name: "Imran Khan",
      location: "Raipur, Chhattisgarh",
      text: "Very useful for quick airport transfers. The communication was clear, the driver arrived on time, and support responded fast when I had a question.",
      floatDuration: 5.5,
      floatY: [-5, 5, -5],
    },
    {
      id: "aarav",
      name: "Aarav Mehta",
      location: "Raipur, Chhattisgarh",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      floatDuration: 8.0,
      floatY: [3, -3, 3],
    },
    {
      id: "priya",
      name: "Priya Nair",
      location: "Raipur, Chhattisgarh",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      floatDuration: 6.5,
      floatY: [-4, 3, -4],
    },
    {
      id: "meera",
      name: "Meera Iyer",
      location: "Raipur, Chhattisgarh",
      text: "We used FoxRun for a weekend outing across town and the experience was dependable from booking to drop-off. The service feels built for Indian cities and busy schedules.",
      floatDuration: 7.5,
      floatY: [5, -4, 5],
    },
  ];

  // Quadruple the sequence internally for smooth infinite loop
  const quadTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Motion value for infinite track position
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Hover & Drag State
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const startXRef = useRef(0);
  const dragStartXRef = useRef(0);

  // Measure exact pixel distance of one 6-card set
  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
    }

    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children.length >= 7) {
        const children = trackRef.current.children;
        const firstCardLeft = (children[0] as HTMLElement).offsetLeft;
        const seventhCardLeft = (children[6] as HTMLElement).offsetLeft;
        if (seventhCardLeft > firstCardLeft) {
          setSingleSetWidth(seventhCardLeft - firstCardLeft);
        }
      }
    };

    updateWidth();
    // Delay slightly to ensure fonts & layout rendering have settled
    const timer = setTimeout(updateWidth, 300);
    window.addEventListener("resize", updateWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Continuous 60fps horizontal floating loop (~40px / second)
  const SPEED = 40;

  useAnimationFrame((_, delta) => {
    if (reducedMotion || isHovered || isDragging) return;

    let currentX = x.get() - SPEED * (delta / 1000);

    if (singleSetWidth > 0) {
      if (currentX <= -singleSetWidth) {
        currentX += singleSetWidth;
      } else if (currentX > 0) {
        currentX -= singleSetWidth;
      }
    }

    x.set(currentX);
  });

  // Pointer Event Handlers for Drag / Touch interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    dragStartXRef.current = x.get();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    let nextX = dragStartXRef.current + deltaX;

    if (singleSetWidth > 0) {
      if (nextX <= -singleSetWidth) {
        nextX += singleSetWidth;
      } else if (nextX > 0) {
        nextX -= singleSetWidth;
      }
    }

    x.set(nextX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="bg-white text-[#111827] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle Atmospheric Background Glow & Floating Particles */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#FFB400]/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-20 w-80 h-80 bg-amber-200/20 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Decorative Floating Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-[#FFB400] animate-pulse" />
        <div className="absolute bottom-16 right-1/3 w-3 h-3 rounded-full bg-[#FFB400]/60 animate-ping" />
        <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-gray-400 animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <span className="inline-block bg-[#FFB400] text-[#111111] font-sora font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Rider Stories
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              What People Are <span className="text-[#FFB400] underline decoration-[#111111] underline-offset-8">Saying</span>
            </h2>
            <p className="font-inter text-gray-500 text-sm sm:text-base mt-3 max-w-lg">
              Real experiences from riders navigating Indian cities with FoxRun everyday.
            </p>
          </div>

          {/* Top-Right Premium Lifestyle Mobility Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-[290px] sm:max-w-[330px] h-[145px] sm:h-[160px] rounded-[28px] overflow-hidden shadow-xl border-2 border-gray-100/90 group animate-float-slow bg-white/90 backdrop-blur-md flex-shrink-0"
          >
            <Image
              src="/assets/img/about/gallery_drivers_customers.png"
              alt="Everyday Indian Mobility - Happy Passengers Travelling Comfortably"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white font-sora pointer-events-none">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#FFB400]">
                Everyday Comfort
              </span>
              <div className="flex items-center gap-1 bg-[#111111]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white shadow-sm">
                <Star className="w-3 h-3 fill-[#FFB400] text-[#FFB400]" />
                <span>4.9★</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CONTINUOUS FLOATING HORIZONTAL REVIEW STREAM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full overflow-hidden py-6 select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Soft Horizontal Edge Fade Overlay Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Floating Moving Track */}
        <motion.div
          ref={trackRef}
          style={{ x: reducedMotion ? 0 : x }}
          className="flex gap-6 sm:gap-8 items-center w-max px-4"
        >
          {quadTestimonials.map((item, idx) => (
            <TestimonialCard key={`review-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Individual Testimonial Card with Independent Vertical Floating Motion
function TestimonialCard({ item }: { item: { name: string; location: string; text: string; floatDuration: number; floatY: number[] } }) {
  return (
    <motion.div
      animate={{ y: item.floatY }}
      transition={{
        duration: item.floatDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="w-[300px] sm:w-[360px] md:w-[400px] h-[265px] sm:h-[275px] bg-white rounded-24 p-6 sm:p-8 border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-[#FFB400] transition-all duration-300 flex flex-col justify-between group flex-shrink-0 relative overflow-hidden"
    >
      {/* Top Hover Accent Bar */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#FFB400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#FFB400]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-gray-300 group-hover:text-[#FFB400] transition-colors duration-300" />
        </div>

        {/* Testimonial Quote Text */}
        <p className="font-inter text-gray-700 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Card Footer: User Info */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="font-sora font-bold text-sm sm:text-base text-[#111827]">
            {item.name}
          </h4>
          <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mt-0.5">
            <MapPin className="w-3 h-3 text-[#FFB400]" />
            <span>{item.location}</span>
          </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#111111] text-[#FFB400] font-sora font-extrabold text-xs flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          {item.name.charAt(0)}
        </div>
      </div>
    </motion.div>
  );
}
