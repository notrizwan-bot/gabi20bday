'use client';

import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const targetDate = new Date("2027-05-05T00:50:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* The Etheral Shadow Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <EtheralShadow
          color="rgba(128, 128, 128, 0.4)"
          animation={{ scale: 100, speed: 50 }}
          noise={{ opacity: 0.5, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Marquee Header */}
        <div className="marquee-container bg-black text-white py-2 md:py-4 overflow-hidden whitespace-nowrap border-b-4 border-black">
          <div className="marquee-text inline-block font-black uppercase text-2xl md:text-4xl animate-marquee">
            URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN • 
            URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN •
            URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN •
            URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN •
          </div>
        </div>

        {/* Hero Section */}
        <section 
          style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '40vh' }}
          className="w-full flex flex-col items-center justify-center bg-transparent relative"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full text-center">
            <div className="relative inline-block mb-12 md:mb-24">
              <h1 className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter uppercase relative z-10">
                THIS IS GABI.
              </h1>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-24 bg-[#ffcc00] text-black px-4 py-2 md:px-10 md:py-5 border-4 md:border-8 border-black text-xl md:text-6xl font-black transform rotate-6 shadow-[5px_5px_0px_#000] md:shadow-[10px_10px_0px_#000] z-20 whitespace-nowrap pointer-events-none opacity-95">
                VERIFIED 20
              </div>
            </div>
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
              <p className="text-2xl md:text-5xl font-black leading-[1.1] mt-8 uppercase tracking-tighter text-center px-4">
                After two decades of market dominance in the &quot;being a menace&quot; industry, Gabi is officially pivoting to her 20s. 
              </p>
              <p className="text-3xl md:text-6xl font-black text-[#ff0000] mt-6 uppercase tracking-tighter italic text-center px-4">
                Expect a complete rebrand.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          style={{ marginBottom: '2rem' }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white border-[4px] md:border-[6px] border-black p-6 md:p-10 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all group">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-6 md:mb-8 border-b-4 border-black pb-4 flex justify-between items-center">
                KPIs 
                <span className="text-[10px] md:text-sm font-bold bg-black text-white px-2 py-1">REAL-TIME DATA</span>
              </h2>
              <ul className="space-y-4 md:space-y-6 font-black text-lg md:text-xl">
                <li className="flex justify-between items-center">
                  <span className="uppercase">Coffee Addiction</span>
                  <span className="bg-[#ffcc00] px-3 py-1 md:px-4 md:py-1 border-2 md:border-4 border-black transform -rotate-1 group-hover:rotate-2 transition-transform text-sm md:text-base">LEVEL 99</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="uppercase">Unanswered DMs</span>
                  <span className="text-2xl md:text-3xl">4,500+</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="uppercase">Sarcasm Accuracy</span>
                  <span className="text-[#ff0000]">99.8%</span>
                </li>
                <li className="flex justify-between items-center pt-4 border-t-2 md:border-t-4 border-black">
                  <span className="uppercase">Retirement Age</span>
                  <span className="text-4xl md:text-5xl">20</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black text-white border-[6px] border-black p-6 md:p-10 shadow-[12px_12px_0px_#ff0000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#ff0000] transition-all relative overflow-hidden">
              <div className="absolute -top-4 -right-2 p-4 opacity-20 text-6xl md:text-8xl font-black select-none pointer-events-none">
                &quot;
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 text-[#ff0000]">OFFICIAL STATEMENT</h2>
              <p className="text-2xl md:text-4xl font-black leading-tight relative z-10 italic">
                &quot;I&apos;m not getting older, I&apos;m just becoming a more expensive version of myself.&quot;
              </p>
              <div className="mt-8 md:mt-12 space-y-2">
                <p className="text-base md:text-lg opacity-90 uppercase tracking-widest font-black">
                  — GABI GRACZYK
                </p>
                <p className="text-xs md:text-sm opacity-50 uppercase font-bold">
                  Direct quote, minutes after realizing her teen years are over.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown to 21 */}
        <section 
          style={{ marginTop: '2rem', paddingTop: '2rem', paddingBottom: '2rem' }}
          className="w-full border-t-8 border-black flex flex-col items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
            <h2 
              style={{ marginBottom: '1.5rem' }}
              className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-center"
            >
              MISSION: 21 <span className="text-[#ff0000] block md:inline md:ml-4">(THE FINAL LEVEL)</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl w-full">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds }
              ].map((unit, i) => (
                <div key={i} className="bg-white border-2 md:border-4 border-black p-4 md:p-10 shadow-[6px_6px_0px_#000] md:shadow-[10px_10px_0px_#000] group hover:-translate-y-2 transition-transform text-center flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-8xl font-black mb-1 md:mb-2 lining-nums">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-base md:text-2xl font-black uppercase border-t-2 md:border-t-4 border-black pt-2 md:pt-4 w-full">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
            <p 
              style={{ marginTop: '1.5rem' }}
              className="text-lg md:text-2xl font-black uppercase tracking-widest bg-black text-white inline-block px-4 py-2 md:px-8 md:py-4 transform -rotate-1 shadow-[5px_5px_0px_#ff0000] md:shadow-[8px_8px_0px_#ff0000] text-center"
            >
              TARGET: MAY 5, 2027 @ 12:50 AM
            </p>
          </div>
        </section>

        {/* Photo Gallery - Zoom Parallax */}
        <section 
          style={{ marginTop: '4rem' }}
          className="w-full bg-black text-white border-y-[12px] border-black overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
             <div className="grid grid-cols-12 gap-4 h-full">
               {Array.from({ length: 48 }).map((_, i) => (
                 <div key={i} className="border-r border-white/20 h-full" />
               ))}
             </div>
          </div>
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-32 text-center">
              <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter italic transform -rotate-2">
                THE RECEIPTS
              </h2>
              <p className="text-xl md:text-2xl font-black uppercase mt-4 opacity-50">SCROLL TO WITNESS THE CHAOS</p>
            </div>
            
            <ZoomParallax images={[
              { src: "/images/IMG_9018.jpeg", alt: "Gabi Exhibit A" },
              { src: "/images/IMG_9535.jpeg", alt: "Gabi Exhibit B" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.43.jpeg", alt: "Gabi Exhibit C" },
              { src: "/images/IMG_9472.jpeg", alt: "Gabi Exhibit D" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44.jpeg", alt: "Gabi Exhibit E" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44 (1).jpeg", alt: "Gabi Exhibit F" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44 (2).jpeg", alt: "Gabi Exhibit G" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.45.jpeg", alt: "Gabi Exhibit H" },
              { src: "/images/WhatsApp Image 2026-05-05 at 14.25.45 (1).jpeg", alt: "Gabi Exhibit I" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.56.19.jpeg", alt: "Gabi Exhibit J" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20.jpeg", alt: "Gabi Exhibit K" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20 (1).jpeg", alt: "Gabi Exhibit L" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20 (2).jpeg", alt: "Gabi Exhibit M" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.57.27.jpeg", alt: "Gabi Exhibit N" },
              { src: "/images/WhatsApp Image 2026-05-05 at 16.57.39.jpeg", alt: "Gabi Exhibit O" }
            ]} />
          </div>
        </section>

        {/* The Extended Gallery Section - Now its own section for better responsiveness */}
        <section className="bg-white text-black py-12 md:py-20 relative z-20 border-t-8 border-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
              <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                THE FULL<br/>
                <span className="text-[#ff0000]">ARCHIVE</span>
              </h2>
              <p className="max-w-md text-base md:text-xl font-bold uppercase opacity-60 text-left md:text-right">
                Two decades of documented mischief, chaos, and top-tier vibes. Scrolled and verified by the Gabi Foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { src: "/images/IMG_9018.jpeg", className: "sm:col-span-2 sm:row-span-2" },
                { src: "/images/IMG_9535.jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.43.jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/IMG_9472.jpeg", className: "sm:col-span-2 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44.jpeg", className: "sm:col-span-1 sm:row-span-2" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44 (1).jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.44 (2).jpeg", className: "sm:col-span-2 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.45.jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 14.25.45 (1).jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.56.19.jpeg", className: "sm:col-span-2 sm:row-span-2" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20.jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20 (1).jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.56.20 (2).jpeg", className: "sm:col-span-2 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.57.27.jpeg", className: "sm:col-span-1 sm:row-span-1" },
                { src: "/images/WhatsApp Image 2026-05-05 at 16.57.39.jpeg", className: "sm:col-span-1 sm:row-span-1" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative overflow-hidden border-4 border-black bg-gray-100 group aspect-square sm:aspect-auto ${item.className}`}
                >
                  <img 
                    src={item.src} 
                    alt={`Gallery item ${idx}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-black text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ITEM_{String(idx + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Stamp */}
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 w-32 h-32 md:w-48 md:h-48 bg-[#ff0000] text-white rounded-full border-4 md:border-[6px] border-black flex items-center justify-center text-center font-black text-lg md:text-2xl leading-none transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all cursor-pointer z-50 shadow-2xl active:scale-95">
          <div className="absolute inset-0 border-2 md:border-4 border-white/30 rounded-full scale-90" />
          EST. 2006<br/>
          ORIGINAL<br/>
          GABI
        </div>

        <footer className="p-12 md:p-24 text-center border-t-8 md:border-t-[12px] border-black bg-white mt-12 md:mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 md:mb-8 tracking-tighter">GOODBYE TEENS.</h2>
            <p className="font-black text-sm md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-40">
              © 2006-2026 THE GABI FOUNDATION • ALL RIGHTS RESERVED • NO REFUNDS ON TEEN YEARS • POWERED BY CHAOS
            </p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
