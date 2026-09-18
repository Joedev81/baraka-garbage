"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Leaf,
    MapPin,
    MessageCircle,
    Phone,
    Recycle,
    Send,
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

const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.94,
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

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function RequestPickupPage() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        wasteType: "Household waste",
        pickupDate: "",
        pickupTime: "",
        notes: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = `Hello Baraka Garbage Services 👋

I would like to request a garbage pickup.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Waste Type: ${formData.wasteType}
Preferred Date: ${formData.pickupDate}
Preferred Time: ${formData.pickupTime}
Additional Notes: ${formData.notes || "None"}

Please confirm the pickup details. Thank you.`;

        const whatsappUrl = `https://wa.me/254726947844?text=${encodeURIComponent(
            message
        )}`;

        setSubmitted(true);

        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#172019]">
            <Navbar />

            {/* ========================================================= */}
            {/* HERO */}
            {/* ========================================================= */}

            <section className="relative min-h-[560px] overflow-hidden bg-[#122019] text-white lg:min-h-[620px]">
                {/* BACKGROUND SLIDESHOW */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/request-pickup/pickup1.jpg')",
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [1, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 20,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/request-pickup/pickup2.jpg')",
                        }}
                        animate={{
                            scale: [1.05, 1, 1.05],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 15,
                            delay: 5,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/request-pickup/pickup3.jpg')",
                        }}
                        animate={{
                            scale: [1.05, 1, 1.05],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 15,
                            delay: 10,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/request-pickup/pickup4.jpg')",
                        }}
                        animate={{
                            scale: [1.05, 1, 1.05],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 15,
                            delay: 15,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/request-pickup/pickup5.jpg')",
                        }}
                        animate={{
                            scale: [1.05, 1, 1.05],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 15,
                            delay: 20,
                            ease: "easeInOut",
                        }}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-[#08130d]/65" />

                    {/* GREEN GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#08130d]/90 via-[#122019]/60 to-[#122019]/35" />

                    {/* BOTTOM FADE */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#122019] to-transparent" />
                </div>

                {/* ANIMATED GLOW */}
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

                {/* HERO CONTENT */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:min-h-[620px] lg:px-8 lg:py-28"
                >
                    <div className="max-w-3xl">
                        <motion.p
                            variants={fadeUp}
                            className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]"
                        >
                            <Truck size={17} />
                            Request a Pickup
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            Let&apos;s get your waste collected.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-lg leading-8 text-white/80"
                        >
                            Fill in the details below and send your pickup request directly
                            to Baraka Garbage Services through WhatsApp.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-col gap-3 sm:flex-row"
                        >
                            <a
                                href="tel:0726947844"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#67c98b] px-6 py-3.5 text-sm font-bold text-[#122019] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                            >
                                <Phone size={17} />
                                Call 0726 947 844
                            </a>

                            <a
                                href="https://wa.me/254726947844"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                            >
                                <MessageCircle size={17} />
                                WhatsApp Us
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* SLIDE INDICATORS */}
                <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                    <span className="h-1.5 w-7 rounded-full bg-[#67c98b]" />
                    <span className="h-1.5 w-2 rounded-full bg-white/40" />
                    <span className="h-1.5 w-2 rounded-full bg-white/40" />
                    <span className="h-1.5 w-2 rounded-full bg-white/40" />
                    <span className="h-1.5 w-2 rounded-full bg-white/40" />
                </div>
            </section>

            {/* ========================================================= */}
            {/* MAIN CONTENT */}
            {/* ========================================================= */}

            <section className="relative px-6 py-20 lg:px-8 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    {/* ===================================================== */}
                    {/* FORM */}
                    {/* ===================================================== */}

                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="rounded-[2rem] border border-[#cfe3d3] bg-white p-7 shadow-sm sm:p-10"
                    >
                        <div className="mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f3ea] text-[#176b3a]">
                                <Truck size={24} />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                Pickup details
                            </h2>

                            <p className="mt-3 leading-7 text-gray-600">
                                Tell us where and when you would like your waste collected.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name + Phone */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Full name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Phone number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="07XX XXX XXX"
                                        className="w-full rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label
                                    htmlFor="location"
                                    className="mb-2 flex items-center gap-2 text-sm font-semibold"
                                >
                                    <MapPin size={16} className="text-[#176b3a]" />
                                    Pickup location
                                </label>

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Estate, building, street or landmark"
                                    className="w-full rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                />
                            </div>

                            {/* Waste Type */}
                            <div>
                                <label
                                    htmlFor="wasteType"
                                    className="mb-2 flex items-center gap-2 text-sm font-semibold"
                                >
                                    <Recycle size={16} className="text-[#176b3a]" />
                                    Type of waste
                                </label>

                                <select
                                    id="wasteType"
                                    name="wasteType"
                                    value={formData.wasteType}
                                    onChange={handleChange}
                                    className="w-full appearance-none rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                >
                                    <option>Household waste</option>
                                    <option>Business waste</option>
                                    <option>Mixed waste</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Date + Time */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="pickupDate"
                                        className="mb-2 flex items-center gap-2 text-sm font-semibold"
                                    >
                                        <CalendarDays
                                            size={16}
                                            className="text-[#176b3a]"
                                        />
                                        Preferred date
                                    </label>

                                    <input
                                        id="pickupDate"
                                        name="pickupDate"
                                        type="date"
                                        required
                                        value={formData.pickupDate}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="pickupTime"
                                        className="mb-2 flex items-center gap-2 text-sm font-semibold"
                                    >
                                        <Clock3
                                            size={16}
                                            className="text-[#176b3a]"
                                        />
                                        Preferred time
                                    </label>

                                    <select
                                        id="pickupTime"
                                        name="pickupTime"
                                        required
                                        value={formData.pickupTime}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                    >
                                        <option value="">Select a time</option>
                                        <option>Morning — 8:00 AM to 11:00 AM</option>
                                        <option>Midday — 11:00 AM to 2:00 PM</option>
                                        <option>Afternoon — 2:00 PM to 5:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <label
                                    htmlFor="notes"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Additional information
                                    <span className="ml-1 font-normal text-gray-400">
                                        (optional)
                                    </span>
                                </label>

                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={4}
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Anything else we should know about the pickup?"
                                    className="w-full resize-none rounded-2xl border border-[#cfe3d3] bg-[#f7f9f6] px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#176b3a] focus:bg-white focus:ring-4 focus:ring-[#176b3a]/10"
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#176b3a] px-6 py-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#12572f] hover:shadow-lg"
                            >
                                <Send size={18} />
                                Send Pickup Request
                            </motion.button>

                            <p className="text-center text-xs leading-5 text-gray-500">
                                Your request will open WhatsApp with the pickup details
                                already filled in.
                            </p>
                        </form>

                        {/* Success message */}
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="mt-6 flex items-start gap-3 rounded-2xl border border-[#b9d9c1] bg-[#e8f3ea] p-4 text-sm text-[#176b3a]"
                            >
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0"
                                />

                                <div>
                                    <p className="font-bold">
                                        Pickup request prepared!
                                    </p>

                                    <p className="mt-1 text-[#176b3a]/80">
                                        WhatsApp should have opened with your request details.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* ===================================================== */}
                    {/* SIDE INFORMATION */}
                    {/* ===================================================== */}

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Info card */}
                        <motion.div
                            variants={scaleIn}
                            className="relative overflow-hidden rounded-[2rem] bg-[#122019] p-8 text-white shadow-sm sm:p-10"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.08, 0.16, 0.08],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#176b3a] blur-3xl"
                            />

                            <div className="relative">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176b3a] text-white">
                                    <Truck size={27} />
                                </div>

                                <h2 className="mt-7 text-2xl font-bold">
                                    How it works
                                </h2>

                                <div className="mt-7 space-y-6">
                                    {[
                                        {
                                            number: "01",
                                            title: "Submit your request",
                                            text: "Fill in your pickup details using the form.",
                                        },
                                        {
                                            number: "02",
                                            title: "We contact you",
                                            text: "We'll confirm the details and availability.",
                                        },
                                        {
                                            number: "03",
                                            title: "We collect your waste",
                                            text: "Our team arrives at the agreed location and time.",
                                        },
                                    ].map((step) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-4"
                                        >
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#67c98b] text-xs font-black text-[#122019]">
                                                {step.number}
                                            </div>

                                            <div>
                                                <h3 className="font-bold">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-white/60">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact card */}
                        <motion.div
                            variants={scaleIn}
                            className="rounded-[2rem] border border-[#cfe3d3] bg-[#e8f3ea] p-8 shadow-sm"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176b3a] text-white">
                                <MapPin size={23} />
                            </div>

                            <h2 className="mt-6 text-xl font-bold">
                                We are in Kitengela
                            </h2>

                            <p className="mt-3 leading-7 text-gray-600">
                                Baraka Garbage Services is located in Kitengela,
                                opposite Pizza Inn.
                            </p>

                            <div className="mt-6 space-y-3">
                                <a
                                    href="tel:0726947844"
                                    className="flex items-center gap-3 text-sm font-semibold text-[#176b3a] transition-colors hover:text-[#12572f]"
                                >
                                    <Phone size={17} />
                                    0726 947 844
                                </a>

                                <a
                                    href="https://wa.me/254726947844"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm font-semibold text-[#176b3a] transition-colors hover:text-[#12572f]"
                                >
                                    <MessageCircle size={17} />
                                    WhatsApp us
                                </a>
                            </div>
                        </motion.div>

                        {/* Service info */}
                        <motion.div
                            variants={scaleIn}
                            className="rounded-[2rem] border border-[#cfe3d3] bg-white p-8 shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f3ea] text-[#176b3a]">
                                    <Leaf size={22} />
                                </div>

                                <h2 className="font-bold">
                                    Our service
                                </h2>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-gray-600">
                                We provide practical garbage collection services
                                for homes, businesses and other spaces around
                                Kitengela.
                            </p>

                            <Link
                                href="/services"
                                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#176b3a]"
                            >
                                View services

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FINAL CTA */}
            {/* ========================================================= */}

            <section className="relative overflow-hidden bg-[#176b3a] px-6 py-20 text-white lg:px-8 lg:py-24">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white blur-3xl"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative mx-auto max-w-3xl text-center"
                >
                    <motion.div
                        variants={scaleIn}
                        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15"
                    >
                        <Recycle size={26} />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-6 text-3xl font-bold sm:text-4xl"
                    >
                        Need help with your waste?
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-5 max-w-xl leading-7 text-white/70"
                    >
                        You can also contact us directly if you have questions
                        before arranging a pickup.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
                    >
                        <a
                            href="https://wa.me/254726947844"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#176b3a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8f3ea] hover:shadow-xl"
                        >
                            <MessageCircle size={17} />
                            WhatsApp Us
                        </a>

                        <a
                            href="tel:0726947844"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            <Phone size={17} />
                            Call Us
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}