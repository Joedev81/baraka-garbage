"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What areas does Baraka Garbage Services cover?",
        answer: "We provide garbage collection services in Kitengela and surrounding areas. If you are unsure whether your location is covered, contact us and we will be happy to assist.",
    },
    {
        question: "How can i request a garbage pickup?",
        answer: "You can request a pickup through our Request Pickup page or contact us directly through WhatsApp or phone. We will confirm the details and arrange the collection.",
    },
    {
        question: "How often can garbage be collected?",
        answer: "Pickup frequency can be arranged according to your needs. Whether you require regular collection or a non-time pickup, contact us to discuss a suitable schedule.",
    },
    {
        question: "Do you offer garbage collection for businesses?",
        answer: "Yes. We provide garbage collection solutions for homes, businesses, shops, offices and other establishments. Contact us to discuss you collection requirements.",
    },
    {
        question: "Do you sell garbage ploythene bags?",
        answer: "Yes. Baraka also provides garbage polythene solutions. Contact us for availability, sizes, quantities and pricing.",
    },
    {
        question: "How much does garbage collection cost?",
        answer: "The cost depends on factors such as location, collection frequency and the amount or type of waste. Contact us for a quotation based on your specific needs.",
    },
    {
        question: "What types of waste so you collect?",
        answer: "We primarily handle general household and commercial garbage. For please contact us first so we advise you on whether we can provide the appropriate service.",
    },
    {
        question: "How do I contact Baraka Garbage Services?",
        answer: "You can reach us on 0717078680 or 0726947844. You can also contact us through WhatsApp or visit us in Kitengela, opposite Pizza Inn.",
    },
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />

            <main className="bg-[#f7f9f6] text-[#172019]">

                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">

                    {/* BACKGROUND IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/faq/faq.jpg')",
                        }}
                    />

                    {/* DARK GREEN OVERLAY */}
                    <div className="absolute inset-0 bg-[#122019]/45" />

                    {/* CONTENT */}
                    <div className="relative mx-auto max-w-7xl">

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                            Legal
                        </p>

                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Frequently Asked Questions
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                            Find answers to common questions about Baraka Garbage Services,
                            our garbage collection services and how to get in touch with us.
                        </p>

                    </div>
                </section>
                
                {/* FAQ CONTENT */}
                <section className="px-6 py-20 lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176b3a]">
                                Need to know?
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                We've got answers.
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#172019]/60">
                                Browse the question below to learn more about our services and how we work.
                            </p>
                        </div>

                        {/* FAQ LIST */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={faq.question}
                                        className="overflow-hidden rounded-2xl border border-[#176b3a]/10 bg-[#eaf4ed] transition-all duration-300 hover:border-[#176b3a]/25"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFAQ(index)}
                                            className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-base font-semibold sm:text-lg">
                                                {faq.question}
                                            </span>

                                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b3a] text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                            >
                                                <ChevronDown size={18} />
                                            </span>

                                        </button>

                                        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="border-t border-[#176b3a]/10 px-6 pb-6 pt-5 leading-7 text-[#172019]/60">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CONTACT CTA */}
                        <div className="mt-16 overflow-hidden rounded-3xl bg-[#122019] p-8 text-center sm:p-12">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                                Still have questions?
                            </p>

                            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                We're here to help.
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
                                Contact Baraka Garbage Services and our team will be happy to help you with your garbage collection needs.
                            </p>

                            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                                <a
                                    href="https://wa.me/254717078680"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-[#176b3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f8248]"
                                >
                                    WhatsApp Us
                                </a>

                                <a
                                    href="tel:0717078680"
                                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Call 0717078680
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}