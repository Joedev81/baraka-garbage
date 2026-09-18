"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  ArrowRight,
  Check,
  Clock3,
  Leaf,
  Recycle,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const listItem: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#172019]">
      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <HeroSlideshow />
      </motion.section>

      {/* SERVICES PREVIEW */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        {/* Decorative background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#176b3a]/5 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#67c98b]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.18em] text-[#176b3a]"
              >
                What we do
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Simple solutions for everyday waste.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 leading-7 text-gray-600"
              >
                Explore our garbage collection and garbage polythene services.
              </motion.p>
            </div>

            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#176b3a] transition-all duration-300 hover:gap-3"
              >
                View all services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {/* SERVICE CARD 1 */}
            <motion.div
              variants={scaleIn}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#d8eadc] bg-[#e8f3ea] p-8 shadow-sm transition-all duration-500 hover:border-[#b9d9c1] hover:bg-[#e1f0e4] hover:shadow-xl"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#176b3a]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176b3a]/10 text-[#176b3a] transition-colors duration-500 group-hover:bg-[#176b3a] group-hover:text-white"
                >
                  <Truck size={27} />
                </motion.div>

                <h3 className="mt-7 text-2xl font-bold transition-colors duration-300 group-hover:text-[#176b3a]">
                  Garbage Collection
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Convenient garbage collection services for homes, businesses
                  and other spaces.
                </p>

                <Link
                  href="/services"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#176b3a]"
                >
                  Learn more

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* SERVICE CARD 2 */}
            <motion.div
              variants={scaleIn}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#d8eadc] bg-[#dff0e3] p-8 shadow-sm transition-all duration-500 hover:border-[#b9d9c1] hover:bg-[#d7ebdc] hover:shadow-xl"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#67c98b]/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176b3a]/10 text-[#176b3a] transition-colors duration-500 group-hover:bg-[#176b3a] group-hover:text-white"
                >
                  <Recycle size={27} />
                </motion.div>

                <h3 className="mt-7 text-2xl font-bold transition-colors duration-300 group-hover:text-[#176b3a]">
                  Garbage Polythene
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Garbage polythene products for household and business waste
                  management needs.
                </p>

                <Link
                  href="/services"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#176b3a]"
                >
                  Learn more

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY BARAKA */}
      <section className="relative overflow-hidden bg-[#e8f3ea] px-6 py-20 lg:px-8 lg:py-28">
        {/* Animated background circles */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#176b3a]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#67c98b]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT CONTENT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.18em] text-[#176b3a]"
              >
                Why Baraka
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Making waste management easier.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl leading-8 text-gray-600"
              >
                We focus on providing practical waste-management services
                while making it easy for customers to get in touch and arrange
                what they need.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="mt-8 space-y-4"
              >
                {[
                  "Convenient garbage collection",
                  "Garbage polythene sales",
                  "Local Kitengela service",
                  "Easy phone and WhatsApp contact",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={listItem}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-3 text-sm font-medium"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#176b3a]/10 text-[#176b3a] transition-all duration-300 group-hover:bg-[#176b3a] group-hover:text-white"
                    >
                      <Check size={14} strokeWidth={3} />
                    </motion.span>

                    {item}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#176b3a] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#12572f] hover:shadow-lg"
                >
                  About Baraka

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* FEATURE CARDS */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {/* Reliable */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-[#cfe3d3] bg-[#f0f7f1] p-7 shadow-sm transition-all duration-500 hover:bg-white hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShieldCheck
                    className="text-[#176b3a]"
                    size={28}
                  />
                </motion.div>

                <h3 className="mt-5 font-bold">Reliable</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  A straightforward approach to waste collection.
                </p>
              </motion.div>

              {/* Convenient */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-[#cfe3d3] bg-[#e3f1e6] p-7 shadow-sm transition-all duration-500 hover:bg-white hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock3
                    className="text-[#176b3a]"
                    size={28}
                  />
                </motion.div>

                <h3 className="mt-5 font-bold">Convenient</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Arrange your service with ease.
                </p>
              </motion.div>

              {/* Cleaner */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-[#cfe3d3] bg-[#e0f0e3] p-7 shadow-sm transition-all duration-500 hover:bg-white hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Leaf
                    className="text-[#176b3a]"
                    size={28}
                  />
                </motion.div>

                <h3 className="mt-5 font-bold">Cleaner</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Helping maintain cleaner surroundings.
                </p>
              </motion.div>

              {/* Local */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-[#cfe3d3] bg-[#dceddf] p-7 shadow-sm transition-all duration-500 hover:bg-white hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Truck
                    className="text-[#176b3a]"
                    size={28}
                  />
                </motion.div>

                <h3 className="mt-5 font-bold">Local</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Based in Kitengela.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#176b3a] px-6 py-20 text-white lg:px-8 lg:py-24">
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#67c98b] blur-3xl"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold sm:text-4xl"
          >
            Need a garbage pickup?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl leading-7 text-white/70"
          >
            Get in touch with Baraka Garbage Services today.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/request-pickup"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#176b3a] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8f3ea] hover:shadow-xl"
            >
              Request a Pickup

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}