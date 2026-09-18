"use client";

import { ArrowRight, Leaf, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
    "/hero/hero4.jpg",
    "/hero/hero5.jpg",
];

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[720px] overflow-hidden bg-[#122019] text-white lg:min-h-[720px]">
            {/* BACKGROUND SLIDESHOW */}
            {images.map((image, index) => (
                <div 
                  key={image}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                />
            ))}

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#07130d}/70" />

            {/* EXTRA GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07130d]/95 via-[#07130d]/70 to-[#07130d]/30" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:min-h-[760px] lg:px-8">
                <div className="max-w-3xl">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                        <Leaf size={17} />
                        Baraka Garbage Services
                    </p>

                    <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        A cleaner space. 
                        <span className="block text-[#67c98b]">
                            A better life.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                    A Professional garbage collection and garbage polythene solutions for homes and businesses in Kitengela.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link  
                           href="/request-pickup"
                           className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67c98b] px-7 py-4 transition hover:bg-white"
                        >
                            Request a Pickup
                            <ArrowRight size={17} />
                        </Link>

                        <a
                          href="https://wa.me/254726947844"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/15 "
                        >
                            WhattsApp Us
                        </a>
                    </div>
                </div>
            </div>

            {/* LOCATION CARD */}
            <div className="absolute bottom-8 right-6 z-10 hidden rounded-2xl bg-white/95 p-5 text-[#172019] shadow-2xl backdrop-blur-md sm:block lg:right-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Serving
              </p>

              <p className="mt-1 font-bold">
                Kitengela & surrounding areas
              </p>
            </div>

            {/* TRUCK ICON */}
            <div className="absolute bottom-10 right-8 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#176b3a]/90 text-white shadow-2xl backdrop-blur-sm sm:bottom-28 sm:right-12">
               <Truck size={34} strokeWidth={1.5} />
            </div>

            {/* SLIDESHOW INDICATORS */}
            <div className="absolute bottom-7 left-1/2 z-10 flex translate-x-1/2 gap-2">
            {images.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === current ? "w-8 bg-[#67c98b]" : "w-2 bg-white/50"
                    }`}
                />
            ))}
            </div>
        </section>
    );
}