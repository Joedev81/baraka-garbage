"use client";

import { Truck } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export default function AboutTruckSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl bg-[#d8eadc] shadow-lg">

      {/* Background Slideshow */}
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

      {/* Dark/Green Overlay */}
      <div className="absolute inset-0 bg-[#07130d]/45" />

      {/* Static Truck Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/80 bg-[#176b3a]/90 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-105">
          <Truck
            size={58}
            strokeWidth={1.8}
            className="text-white"
          />
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </div>
  );
}