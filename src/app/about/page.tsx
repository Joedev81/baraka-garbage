"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  MapPin,
  Recycle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import AboutTruckSlideshows from "@/components/AboutTruckSlideshow";
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

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 25,
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

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
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

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#172019]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#122019] px-6 py-24 text-white lg:px-8 lg:py-32">
        {/* Animated background glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#176b3a]/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#67c98b]/10 blur-3xl"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]"
            >
              <Leaf size={17} />
              About Baraka
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Keeping our spaces cleaner, one collection at a time.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/70"
            >
              Baraka Garbage Services provides practical waste management
              solutions for homes, businesses and other spaces around
              Kitengela.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT CONTENT */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#176b3a]/5 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
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
              Who we are
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              A local service built around cleaner communities.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 leading-8 text-gray-600"
            >
              Baraka Garbage Services focuses on making waste collection
              simpler and more convenient for customers. We provide garbage
              collection services as well as garbage polythene sales.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-8 text-gray-600"
            >
              Based in Kitengela, opposite Pizza Inn, we aim to provide a
              straightforward service that helps customers keep their homes,
              businesses and surroundings clean.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#176b3a] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#12572f] hover:shadow-lg"
              >
                Explore our services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* TRUCK SLIDESHOW */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="h-full min-h-[420px]"
          >
            <motion.div
              whileHover={{
                scale: 1.015,
                y: -5,
              }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <AboutTruckSlideshows />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#122019] px-6 py-20 lg:px-8 lg:py-24">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#176b3a] blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#67c98b] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#67c98b]"
            >
              What matters to us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Simple values. Better service.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-7 text-white/60"
            >
              Our approach is built around reliability, cleaner spaces and
              serving the community around us.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Reliable Service",
                text: "We aim to make waste collection straightforward and dependable for our customers.",
                bg: "bg-[#f0f7f1]",
              },
              {
                icon: Leaf,
                title: "Cleaner Spaces",
                text: "Our work is focused on helping homes and businesses maintain cleaner surroundings.",
                bg: "bg-[#e3f1e6]",
              },
              {
                icon: MapPin,
                title: "Local Focus",
                text: "We are based in Kitengela and understand the needs of customers within our community.",
                bg: "bg-[#e0f0e3]",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                  className={`group rounded-3xl border border-[#cfe3d3] ${item.bg} p-7 shadow-sm transition-shadow duration-500 hover:shadow-xl`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176b3a]/10 text-[#176b3a] transition-colors duration-500 group-hover:bg-[#176b3a] group-hover:text-white"
                  >
                    <Icon size={23} />
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR TEAM */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7f9f6] py-24">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#176b3a]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              variants={scaleIn}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ea]"
            >
              <Users className="text-[#176b3a]" size={24} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#176b3a]"
            >
              Our Team
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-2 text-3xl font-bold text-[#172019] md:text-4xl"
            >
              The people behind Baraka.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600"
            >
              From customer coordination to technology and the teams on the
              ground, every part of our team plays a role in keeping the
              service running.
            </motion.p>
          </motion.div>

          <div className="mt-14">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="mx-auto max-w-md overflow-hidden rounded-3xl border border-[#cfe3d3] bg-[#122019] shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="group relative aspect-[4/3] overflow-hidden bg-[#d4e8d8]">
                <Image
                  src="/team/ceo.jfif"
                  alt="Baraka Garbage Services CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#122019]/50 via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-7 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#67c98b]">
                  Leadership
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  CEO
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#67c98b]">
                  Chief Executive Officer
                </p>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/60">
                  Provides leadership and oversees the direction and
                  operations of Baraka Garbage Services.
                </p>
              </div>
            </motion.div>

            {/* Three Team Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3"
            >
              {/* Operations */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-[#cfe3d3] bg-[#122019] shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d0e6d5]">
                  <Image
                    src="/team/operations.jfif"
                    alt="Baraka Garbage Services Operations and Customer Service"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#122019]/50 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#67c98b]">
                    Customer Service
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-tight text-white">
                    Operations & Customer Service
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#67c98b]">
                    Coordination & Support
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/60">
                    Handles customer inquiries, bookings, scheduling and
                    coordination between customers and the ground team.
                  </p>
                </div>
              </motion.div>

              {/* Developer */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-[#cfe3d3] bg-[#e0f0e3] shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d0e6d5]">
                  <Image
                    src="/team/developer.jfif"
                    alt="Baraka Garbage Services Software Developer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#122019]/50 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#176b3a]">
                    Technology
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-tight text-[#172019]">
                    Software Developer
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#176b3a]">
                    Digital Systems & Development
                  </p>

                  <p className="mt-3 text-xs leading-5 text-gray-600">
                    Develops and maintains the company&apos;s digital systems,
                    website and technology solutions supporting daily
                    operations.
                  </p>
                </div>
              </motion.div>

              {/* Ground Operations */}
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-[#cfe3d3] bg-[#122019] shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d0e6d5]">
                  <Image
                    src="/team/ground-team.jpg"
                    alt="Baraka Garbage Services Ground Operations Team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#122019]/50 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#67c98b]">
                    Field Operations
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-tight text-white">
                    Ground Operations Team
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#67c98b]">
                    Drivers & Collection Crew
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/60">
                    Our field team handles collection, loading and
                    transportation of waste as part of the day-to-day service.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TESTIMONIALS */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#122019] px-6 py-20 lg:px-8 lg:py-28">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#176b3a] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#67c98b]"
            >
              <Star size={17} />
              Customer Testimonials
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              What our customers say.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 leading-7 text-white/60"
            >
              We value the trust of the homes and businesses we serve.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-7 md:grid-cols-3"
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-[#cfe3d3] bg-[#f0f7f1] shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d4e8d8]">
                <Image
                  src="/testimonials/customer1.jpg"
                  alt="Baraka Garbage Services customer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="flex gap-1 text-[#176b3a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: star * 0.08,
                        duration: 0.3,
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  “Add the genuine customer testimonial here.”
                </p>

                <div className="mt-7 border-t border-[#cfe3d3] pt-5">
                  <p className="font-bold">Customer Name</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Kitengela Resident
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-[#cfe3d3] bg-[#e3f1e6] shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d0e6d5]">
                <Image
                  src="/testimonials/customer2.jpg"
                  alt="Baraka Garbage Services customer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="flex gap-1 text-[#176b3a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: star * 0.08,
                        duration: 0.3,
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  “Add the genuine customer testimonial here.”
                </p>

                <div className="mt-7 border-t border-[#cfe3d3] pt-5">
                  <p className="font-bold">Customer Name</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Local Business Owner
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-[#cfe3d3] bg-[#e0f0e3] shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#cbded0]">
                <Image
                  src="/testimonials/customer3.jpg"
                  alt="Baraka Garbage Services customer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="flex gap-1 text-[#176b3a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: star * 0.08,
                        duration: 0.3,
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  “Add the genuine customer testimonial here.”
                </p>

                <div className="mt-7 border-t border-[#cfe3d3] pt-5">
                  <p className="font-bold">Customer Name</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Baraka Customer
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* QUICK FACTS */}
      {/* ========================================================= */}

      <section className="px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.01 }}
          className="mx-auto max-w-7xl rounded-[2rem] bg-[#176b3a] p-8 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-12"
        >
          <div className="grid gap-10 md:grid-cols-3">
            <motion.div
              whileHover={{ x: 5 }}
              className="group"
            >
              <CheckCircle2
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <p className="mt-1 text-sm text-white/60">
                Service
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Garbage Collection
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="group"
            >
              <Recycle
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <p className="mt-1 text-sm text-white/60">
                Service
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Garbage Polythene Sales
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="group"
            >
              <MapPin
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <p className="mt-1 text-sm text-white/60">
                Location
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Kitengela, opposite Pizza Inn
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#cfe3d3] bg-[#122019] px-6 py-14 text-center shadow-sm sm:px-10"
        >
          {/* CTA glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#176b3a]/20 blur-3xl"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176b3a] text-white shadow-lg"
            >
              <Leaf size={26} />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl text-white"
            >
              Ready for a cleaner space?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-xl leading-7 text-gray-600"
            >
              Get in touch with Baraka Garbage Services and arrange your
              collection today.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Link
                href="/request-pickup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#176b3a] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#12572f] hover:shadow-lg"
              >
                Request a Pickup

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:0726947844"
                className="rounded-full border border-[#c5d9ca] bg-[#f7f9f6] px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-[#176b3a] hover:text-[#176b3a] hover:shadow-md"
              >
                Call 0726 947 844
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}