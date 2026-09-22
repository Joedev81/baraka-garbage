"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    Check,
    Clock3,
    Droplets,
    FlaskConical,
    Leaf,
    MapPin,
    Phone,
    Recycle,
    ShieldCheck,
    Sparkles,
    Truck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        number: "01",
        icon: Truck,
        title: "Garbage Collection",
        description:
            "Convenient garbage collection services for homes, businesses and other spaces around Kitengela.",
        features: [
            "Residential garbage collection",
            "Business and commercial waste collection",
            "Scheduled collection services",
            "Convenient pickup arrangements",
        ],
    },
    {
        number: "02",
        icon: Recycle,
        title: "Garbage Polythene Sales",
        description:
            "Garbage polythene bags for households, businesses and other waste-management needs.",
        features: [
            "Garbage polythene bags",
            "Suitable for everyday waste disposal",
            "Useful for homes and businesses",
            "Available for purchase",
        ],
    },
    {
        number: "03",
        icon: FlaskConical,
        title: "Hazardous Waste Management",
        description:
            "Safe collection, handling, transportation, and responsible management of hazardous and chemical waste.",
        features: [
            "Safe waste collection",
            "Responsible handling",
            "Controlled transportation",
            "Proper waste management",
        ],
    },
    {
        number: "04",
        icon: Droplets,
        title: "Sanitary Waste Management",
        description:
            "Professional sanitary bin supply, collection, servicing, and disposal for hygienic facilities.",
        features: [
            "Sanitary bin supply",
            "Scheduled collection",
            "Professional bin servicing",
            "Responsible disposal",
        ],
    },
    {
        number: "05",
        icon: Sparkles,
        title: "Cleaning Services",
        description:
            "Professional cleaning solutions for homes, offices, estates, commercial premises, and institutions.",
        features: [
            "Residential cleaning",
            "Office and commercial cleaning",
            "Estate cleaning",
            "Institutional cleaning",
        ],
    },
];

const benefits = [
    {
        icon: ShieldCheck,
        title: "Reliable Service",
        description:
            "A straightforward approach to waste collection and customer service.",
    },
    {
        icon: Clock3,
        title: "Convenient",
        description:
            "Arrange a pickup around your schedule and waste-management needs.",
    },
    {
        icon: Leaf,
        title: "Cleaner Spaces",
        description:
            "Helping customers maintain cleaner and more organised surroundings.",
    },
    {
        icon: MapPin,
        title: "Local Service",
        description:
            "Based in Kitengela, opposite Pizza Inn, serving the local community.",
    },
];

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

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#172019]">
            <Navbar />

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#122019] px-6 py-24 text-white lg:px-8 lg:py-32">

                {/* Animated background glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#176b3a]/30 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.2 }}
                    className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#67c98b]/10 blur-3xl"
                />

                {/* Decorative circles */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[12%] top-[25%] hidden h-24 w-24 rounded-full border border-[#67c98b]/10 lg:block"
                />

                <motion.div
                    animate={{
                        y: [0, 12, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[15%] right-[25%] hidden h-12 w-12 rounded-full border border-white/10 lg:block"
                />

                <div className="relative mx-auto max-w-7xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        {/* Label */}
                        <motion.p
                            variants={fadeUp}
                            className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]"
                        >
                            <Leaf size={17} />
                            Our Services
                        </motion.p>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            Complete waste management{" "}
                            <span className="text-[#67c98b]">
                                made simple.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-2xl text-lg leading-8 text-white/70"
                        >
                            From regular garbage collection and polythene
                            sales to hazardous waste management, sanitary
                            services and professional cleaning, Baraka
                            Garbage Services provides practical solutions
                            for cleaner homes, businesses and institutions.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-col gap-3 sm:flex-row"
                        >
                            <Link
                                href="/request-pickup"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#67c98b] px-7 py-3.5 text-sm font-bold text-[#122019] shadow-lg shadow-[#67c98b]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                            >
                                Request a Pickup

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <a
                                href="tel:0717078680"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                            >
                                <Phone
                                    size={17}
                                    className="transition-transform duration-300 group-hover:rotate-12"
                                />

                                0717 078 680
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                SERVICES
            ====================================================== */}
            <section className="px-6 py-20 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-7xl">

                    {/* Section heading */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-3xl"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176b3a]">
                            What we offer
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Professional solutions for cleaner spaces.
                        </h2>

                        <p className="mt-5 leading-7 text-gray-600">
                            Choose the service you need and get in touch
                            with us to arrange collection, cleaning,
                            waste-management services or make a purchase.
                        </p>
                    </motion.div>

                    {/* Service cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -10,
                                        transition: {
                                            duration: 0.25,
                                        },
                                    }}
                                    className="group relative overflow-hidden rounded-[2rem] border border-[#176b3a]/10 bg-gradient-to-br from-[#e7f2e9] via-[#f2f8f3] to-[#dcecdf] p-7 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#176b3a]/10 sm:p-8"
                                >
                                    {/* Decorative background */}
                                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#176b3a]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                                    <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#67c98b]/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />

                                    {/* Number */}
                                    <div className="absolute right-6 top-3 text-7xl font-black text-[#176b3a]/10 transition-all duration-500 group-hover:scale-110 group-hover:text-[#176b3a]/15">
                                        {service.number}
                                    </div>

                                    <div className="relative">

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{
                                                rotate: -6,
                                                scale: 1.08,
                                            }}
                                            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#176b3a] text-white shadow-lg shadow-[#176b3a]/20"
                                        >
                                            <Icon
                                                size={30}
                                                strokeWidth={1.8}
                                            />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="mt-7 text-xl font-bold">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 leading-7 text-gray-600">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mt-7 space-y-3">
                                            {service.features.map(
                                                (feature, index) => (
                                                    <motion.div
                                                        key={feature}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -10,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            delay:
                                                                index * 0.08,
                                                        }}
                                                        className="flex items-center gap-3 text-sm text-gray-700"
                                                    >
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#176b3a] text-white shadow-sm">
                                                            <Check
                                                                size={13}
                                                                strokeWidth={3}
                                                            />
                                                        </span>

                                                        {feature}
                                                    </motion.div>
                                                )
                                            )}
                                        </div>

                                        {/* Card CTA */}
                                        <Link
                                            href={
                                                service.number === "01"
                                                    ? "/request-pickup"
                                                    : "/contact"
                                            }
                                            className="group/link mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#176b3a]"
                                        >
                                            {service.number === "01"
                                                ? "Request a pickup"
                                                : service.number === "02"
                                                    ? "Contact us to order"
                                                    : "Enquire about this service"}

                                            <ArrowRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                                            />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

             {/* SERVICE POSTER */}
                                        <section className="relative overflow-hidden rounded-3xl border border-[#176b3a]/20 bg-[#12019] shadow-xl">
                                          <div className="grid items-center gap-8 lg:grid-cols-2">
                                             
                                             {/* POSTER */}
                                             <div className="relative overflow-hidden">
                                                <img
                                                  src="/posters/services.jpeg"
                                                  alt="Baraka Garbage Services Poster"
                                                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                                />
                                             </div>

                                             {/* TEXT */}
                                             <div className="px-8 py-10 lg:px-12 bg-[#122019]">
                                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                                                    Our Services
                                                </span>

                                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#176b3a] sm:text-4xl">
                                                    Reliable Waste Solutions for a Cleaner Community 
                                                </h2>

                                                <p className="mt-5 max-w-lg leading-7 text-gray-600">
                                                From regular garbage collection to quality garbage polythene solutions, Baraka Garbage Services is here to help keep your home, business and surroundings clean.
                                                </p>

                                                <div className="mt-8 flex flex-wrap gap-4">
                                                    <a
                                                      href="/request-pickup"
                                                      className="rounded-full bg-[#176b3a] px-6 py-3 font-semibold text-white transition hover:bg-[#21864d]"
                                                    >
                                                        Request Pickup
                                                    </a>

                                                    <a
                                                      href="tel:0717078680"
                                                      className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                                    >
                                                        Call 0717078680
                                                    </a>
                                                </div>
                                             </div>
                                          </div>
                                        </section>

            {/* =====================================================
                WHY BARAKA
            ====================================================== */}
            <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8 lg:py-28">

                {/* Decorative background */}
                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#176b3a]/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        {/* Text */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176b3a]">
                                Why Baraka
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                A cleaner approach to everyday waste.
                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">
                                Good waste management starts with a service
                                that is simple to understand and easy to
                                arrange. That is what we aim to provide at
                                Baraka Garbage Services.
                            </p>

                            <Link
                                href="/about"
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#176b3a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#176b3a]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#12572f] hover:shadow-xl"
                            >
                                Learn more about us

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            className="grid gap-5 sm:grid-cols-2"
                        >
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        key={benefit.title}
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -7,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                        className="group rounded-3xl border border-[#176b3a]/5 bg-[#122019] p-7 transition-all duration-300 hover:bg-[#e4f1e6] hover:shadow-xl hover:shadow-[#176b3a]/5"
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 5,
                                            }}
                                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176b3a] text-white shadow-md"
                                        >
                                            <Icon size={23} />
                                        </motion.div>

                                        <h3 className="mt-6 text-lg font-bold text-[#176b3a]">
                                            {benefit.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                LOCATION / SERVICE AREA
            ====================================================== */}
            <section className="px-6 py-20 lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mx-auto max-w-7xl"
                >
                    <div className="group overflow-hidden rounded-[2rem] bg-[#dce9df] shadow-sm transition-shadow duration-500 hover:shadow-xl">

                        <div className="grid lg:grid-cols-2">

                            {/* Location text */}
                            <div className="p-8 sm:p-12 lg:p-16">

                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 4,
                                    }}
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176b3a] text-white shadow-lg"
                                >
                                    <MapPin size={26} />
                                </motion.div>

                                <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#176b3a]">
                                    Find us
                                </p>

                                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                                    Conveniently located in Kitengela.
                                </h2>

                                <p className="mt-5 leading-7 text-gray-600">
                                    Baraka Garbage Services is located in
                                    Kitengela, opposite Pizza Inn.
                                </p>

                                <Link
                                    href="/contact"
                                    className="group/link mt-7 inline-flex items-center gap-2 rounded-full bg-[#176b3a] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#12572f]"
                                >
                                    Get in touch

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                                    />
                                </Link>
                            </div>

                            {/* Visual location panel */}
                            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#c9dccd]">

                                <motion.div
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        opacity: [0.25, 0.1, 0.25],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute h-64 w-64 rounded-full bg-[#176b3a]"
                                />

                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.05, 0.2],
                                    }}
                                    transition={{
                                        duration: 4,
                                        delay: 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute h-40 w-40 rounded-full bg-[#176b3a]"
                                />

                                <div className="relative z-10 text-center">
                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <MapPin
                                            size={58}
                                            strokeWidth={1.4}
                                            className="mx-auto text-[#176b3a]"
                                        />
                                    </motion.div>

                                    <p className="mt-4 font-bold text-[#172019]">
                                        Kitengela
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Opposite Pizza Inn
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#122019] px-6 py-20 text-white lg:px-8 lg:py-24">

                {/* Animated circles */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.15, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#176b3a]/30 blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#67c98b]/10 blur-3xl"
                />

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="relative mx-auto max-w-4xl text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#67c98b]">
                        Need a cleaner space?
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Let&apos;s take care of your waste.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
                        Contact Baraka Garbage Services for garbage
                        collection, hazardous waste management, sanitary
                        waste services, professional cleaning or garbage
                        polythene products.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href="/request-pickup"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#67c98b] px-7 py-3.5 text-sm font-bold text-[#122019] shadow-lg shadow-[#67c98b]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                            Request a Pickup

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="https://wa.me/254726947844"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            WhatsApp Us
                        </a>

                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}