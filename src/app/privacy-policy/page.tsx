"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ShieldCheck,
    Lock,
    UserRound,
    MessageCircle,
    Cookie,
    FileText,
    Phone,
    Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    {
        icon: UserRound,
        number: "01",
        title: "Information We Collect",
        content: (
            <>
                <p>
                    When you use the Baraka Garbage Services website or contact us, we
                    may collect information that you voluntarily provide to us. This may
                    include:
                </p>

                <ul>
                    <li>Your name</li>
                    <li>Your phone number</li>
                    <li>Your location or service address</li>
                    <li>Details about the service you are requesting</li>
                    <li>Any message or information you send through our contact forms</li>
                </ul>

                <p>
                    We only request information that is reasonably necessary to respond
                    to your enquiry or provide the requested garbage collection or
                    related services.
                </p>
            </>
        ),
    },
    {
        icon: FileText,
        number: "02",
        title: "How We Use Your Information",
        content: (
            <>
                <p>
                    Information you provide may be used to:
                </p>

                <ul>
                    <li>Respond to your enquiries and messages</li>
                    <li>Arrange and coordinate garbage collection services</li>
                    <li>Confirm service requests and appointments</li>
                    <li>Contact you regarding a service you have requested</li>
                    <li>Improve our services and customer experience</li>
                    <li>Maintain appropriate business and service records</li>
                </ul>

                <p>
                    We do not use your information for purposes unrelated to the service
                    or enquiry for which it was provided unless we have a lawful basis
                    or your permission to do so.
                </p>
            </>
        ),
    },
    {
        icon: MessageCircle,
        number: "03",
        title: "WhatsApp & Direct Communication",
        content: (
            <>
                <p>
                    Our website may provide links that allow you to contact Baraka
                    Garbage Services through WhatsApp or by telephone.
                </p>

                <p>
                    When you choose to contact us through WhatsApp, your communication
                    is also subject to WhatsApp's own privacy policies and terms. We
                    recommend reviewing WhatsApp's privacy information before using the
                    service.
                </p>

                <p>
                    Information you voluntarily send to us through WhatsApp, phone,
                    social media, or other communication channels may be used to respond
                    to your enquiry or provide requested services.
                </p>
            </>
        ),
    },
    {
        icon: Cookie,
        number: "04",
        title: "Cookies & Website Technologies",
        content: (
            <>
                <p>
                    Our website may use cookies or similar technologies to improve
                    website functionality, security, and user experience.
                </p>

                <p>
                    Cookies are small files stored on your device when you visit certain
                    websites. They may help websites remember preferences or understand
                    how visitors interact with the site.
                </p>

                <p>
                    If analytics, advertising, or other third-party services are added
                    to our website in the future, those services may use cookies or
                    similar technologies according to their own privacy policies.
                </p>
            </>
        ),
    },
    {
        icon: Lock,
        number: "05",
        title: "How We Protect Your Information",
        content: (
            <>
                <p>
                    Baraka Garbage Services takes reasonable measures to protect the
                    information provided to us against unauthorized access, misuse,
                    alteration, disclosure, or loss.
                </p>

                <p>
                    However, no method of transmitting information over the internet or
                    storing information electronically can be guaranteed to be
                    completely secure. You should therefore understand that online
                    communication carries some inherent security risks.
                </p>
            </>
        ),
    },
    {
        icon: ShieldCheck,
        number: "06",
        title: "Sharing Your Information",
        content: (
            <>
                <p>
                    We do not sell or rent your personal information.
                </p>

                <p>
                    We may share information where reasonably necessary to provide a
                    requested service, operate our business, comply with applicable law,
                    protect our rights, or respond to lawful requests from authorities.
                </p>

                <p>
                    Where third-party service providers are involved in operating parts
                    of our website or communication systems, they may process limited
                    information as necessary to provide their services.
                </p>
            </>
        ),
    },
    {
        icon: FileText,
        number: "07",
        title: "Data Retention",
        content: (
            <>
                <p>
                    We retain personal information only for as long as reasonably
                    necessary for the purpose for which it was collected, to provide
                    services, maintain business records, resolve disputes, or meet
                    applicable legal and regulatory requirements.
                </p>

                <p>
                    When information is no longer reasonably required, we may securely
                    delete or dispose of it.
                </p>
            </>
        ),
    },
    {
        icon: UserRound,
        number: "08",
        title: "Your Privacy Rights",
        content: (
            <>
                <p>
                    Depending on applicable law, you may have rights concerning your
                    personal information, including the right to request access to,
                    correction of, or deletion of certain information we hold about
                    you.
                </p>

                <p>
                    You may also ask us questions about how your information is being
                    used or request that we stop using information where there is a
                    lawful basis for doing so.
                </p>

                <p>
                    To make a privacy-related request, please contact us using the
                    contact details provided at the bottom of this page.
                </p>
            </>
        ),
    },
    {
        icon: FileText,
        number: "09",
        title: "Third-Party Websites",
        content: (
            <>
                <p>
                    Our website may contain links to third-party websites, platforms, or
                    services, including social media and communication platforms.
                </p>

                <p>
                    Baraka Garbage Services is not responsible for the privacy practices
                    or content of third-party websites. When you leave our website, we
                    recommend reviewing the privacy policy of the website or service you
                    are visiting.
                </p>
            </>
        ),
    },
    {
        icon: UserRound,
        number: "10",
        title: "Children's Privacy",
        content: (
            <>
                <p>
                    Our services and website are intended for general audiences and are
                    not specifically directed toward children.
                </p>

                <p>
                    We do not knowingly collect personal information from children for
                    purposes unrelated to providing our services. If you believe a child
                    has provided personal information to us without appropriate consent,
                    please contact us so that we can review the matter.
                </p>
            </>
        ),
    },
    {
        icon: FileText,
        number: "11",
        title: "Changes to This Privacy Policy",
        content: (
            <>
                <p>
                    We may update this Privacy Policy from time to time to reflect
                    changes to our services, website, technology, or applicable
                    requirements.
                </p>

                <p>
                    When changes are made, the updated version will be published on this
                    page together with the revised effective date.
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#f7f9f6] text-[#172019]">
            <Navbar />
            {/* HERO */}
            <section
                className="relative overflow-hidden bg-[#122019] px-6 pb-10 pt-20 text-white lg:px-8 lg:pb-12 lg:pt-24"
                style={{
                    backgroundImage: "url('/privacy/policy.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#122019]/80" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#122019]/95 via-[#122019]/80 to-[#122019]/55" />

                <div className="relative mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-[#67c98b] transition-colors duration-300 hover:text-white"
                        >
                            <ArrowLeft size={14} />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#176b3a] shadow-lg">
                                <ShieldCheck size={20} />
                            </div>

                            <div>
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                                    Your Privacy Matters
                                </p>

                                <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                    Privacy Policy
                                </h1>
                            </div>
                        </div>

                        <p className="mt-4 max-w-2xl text-xs leading-6 text-white/70 sm:text-sm">
                            Learn how Baraka Garbage Services collects, uses, and protects
                            information when you use our website or contact us.
                        </p>

                        <div className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] text-white/65 backdrop-blur-sm">
                            Last updated: September 2026
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-[#176b3a]/10 bg-[#e8f3eb] p-7 shadow-sm sm:p-10 lg:p-12"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b3a] text-white">
                                <FileText size={21} />
                            </div>

                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Introduction
                            </h2>
                        </div>

                        <div className="space-y-4 text-[15px] leading-8 text-[#172019]/75 sm:text-base">
                            <p>
                                Baraka Garbage Services respects your privacy and is committed
                                to handling personal information responsibly.
                            </p>

                            <p>
                                This Privacy Policy applies to information collected through
                                our website and through communications relating to our garbage
                                collection and related services.
                            </p>

                            <p>
                                By using our website or voluntarily providing information to
                                us, you acknowledge that you have read and understood this
                                Privacy Policy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* POLICY SECTIONS */}
            <section className="px-6 pb-20 lg:px-8 lg:pb-28">
                <div className="mx-auto max-w-5xl space-y-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon;

                        return (
                            <motion.article
                                key={section.number}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.03,
                                }}
                                className="group rounded-3xl border border-[#176b3a]/10 bg-[#e8f3eb] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#176b3a]/20 hover:shadow-lg sm:p-9 lg:p-10"
                            >
                                <div className="flex flex-col gap-6 sm:flex-row sm:gap-7">
                                    <div className="flex shrink-0 items-start gap-4 sm:block">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#176b3a] text-white transition-transform duration-300 group-hover:scale-105">
                                            <Icon size={22} />
                                        </div>

                                        <span className="pt-3 text-xs font-bold tracking-[0.2em] text-[#176b3a]/60 sm:mt-3 sm:block">
                                            {section.number}
                                        </span>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
                                            {section.title}
                                        </h2>

                                        <div className="space-y-4 text-[15px] leading-8 text-[#172019]/75 sm:text-base">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="relative overflow-hidden bg-[#122019] px-6 py-20 text-white lg:px-8 lg:py-28">
                <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#176b3a]/20 blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-5xl"
                >
                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#67c98b]">
                            Questions About Your Privacy?
                        </p>

                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            We're here to help.
                        </h2>

                        <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
                            If you have any questions about this Privacy Policy or how we
                            handle your information, please get in touch with Baraka
                            Garbage Services.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="tel:0717078680"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#176b3a] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d8248]"
                        >
                            <Phone size={18} />
                            0717078680
                        </a>

                        <a
                            href="tel:0726947844"
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            <Phone size={18} />
                            0726947844
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#67c98b]/30 px-6 py-3.5 text-sm font-semibold text-[#67c98b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#67c98b]/10"
                        >
                            <Mail size={18} />
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}