"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import {
    CheckCircle2,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ContactPage() {

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e:
        FormEvent<HTMLFormElement>) => {
            e.preventDefault();
 
            const form = e.currentTarget;
            const formData = new
            FormData(e.currentTarget);

            const name = formData.get("name")?.toString().trim();
            const phone = formData.get("phone")?.toString().trim();
            const email = formData.get("email")?.toString().trim();
            const message = formData.get("message")?.toString().trim();

            if (!name || !phone || !message) {
                return;
            }

            const whatsappMessage = `Hello Baraka Garbage Services, I would like to make an enquiry.
            Name: ${name}
            Phone: ${phone}
            Email: ${email || "Not provided"}
            Message: ${message}
            Thank you.
               `.trim();

               const whatsappUrl = `https://wa.me/254717078680w?text=
               ${encodeURIComponent(
                whatsappMessage
               )}`;

               // Show success message
               setMessageSent(true);
               
               // Open WhatsApp
               window.open(whatsappUrl,
                "_blank");

                // Clear WhatsApp
                form.reset();

                //Hide success message after 5 seconds
                setTimeout(() => {
                    setMessageSent(false);
                }, 5000);
        };

    return (
        <main className="min-h-screen bg-[#f7f9f6] text-[#172019]">
            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#122019] px-6 py-24 text-white sm:py-32">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#67c98b] blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#176b3a] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="max-w-3xl"
                    >
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#67c98b]">
                            Get In Touch
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Let&apos;s Keep Your Space Clean.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                        Need reliable garbage collection or garbage collection or garbage polythene solutions?
                        Get in touch with Baraka Garbage Services today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="px-6 py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    {/* LEFT - CONTACT INFORMATION */}
                    <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={fadeUp}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176b3a]">
                            Contact Information
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            We&apos;re here to help.
                        </h2>

                        <p className="mt-5 max-w-xl leading-7 text-[#172019]/60">
                        Whether you need a regular garbage collection service, want to enquire about our products, or simply have a question, our team is ready to assist you.
                        </p>

                        <div className="mt-10 space-y-5">
                            {/* PRIMARY PHONE */}
                            <a 
                              href="tel:0717078680"
                              className="group flex items-center gap-5 rounded-2xl border-[#176b3a]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#176b3a]/10 text-[#176b3a] transition group-hover:bg-[#176b3a] group-hover:text-white">
                                <Phone size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-[#172019]/50">
                                    Primary Phone
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        0717 078 680
                                    </p>
                                </div>
                              </a>

                              {/* SECONDARY PHONE */}
                              <a
                                href="tel:0726947844"
                                className="group flex items-center gap-5 rounded-2xl border-[#176b3a]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                              >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#176b3a]/10 text-[#176b3a] transition group-hover:bg-[#176b3a] group-hover:text-white">
                                  <Phone size={21} />
                                </div>

                                <div>
                                    <p className="twxt-sm text-[#172019]/50">
                                       Alternative Phone
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        0726 947 844
                                    </p>
                                </div>
                              </a>

                              {/* WHATSAPP */}
                              <a 
                                href="https://wa.me/254717078680"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 rounded-2xl border border-[#176b3a]/10 bg-[#e9f7ee] p-5 transition hover:-translate-y-1 hover:shadow-lg"
                               >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded--xl bg-[#176b3a] text-white">
                                    <MessageCircle size={21} />
                                </div>
                               </a>

                               {/* LOCATION */}
                               <div className="flex items-center gap-5 rounded-2xl border border-[#176b3a]/10 bg-white p-5 shadow-sm">
                                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#176b3a]/10 text-[#176b3a]">
                                      <MapPin size={21} />
                                   </div>

                                   <div>
                                    <p className="text-sm text-[#172019]/50">
                                       Location
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Kitengela, Opposite Pizza Inn
                                    </p>
                                   </div>
                               </div>

                               {/* HOURS */}
                               <div className="flex items-center gap-5 rounded-2xl border border-[#176b3a]/10 bg-white p-5 shadow-sm">
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#176b3a]/10 text-[#176b3a]">
                                     <Clock3 size={21} />
                                  </div>

                                  <div>
                                    <p className="text-sm text-[#172019]/50">
                                        Opening Hours
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Monday - Saturday
                                    </p>
                                  </div>
                               </div>
                        </div>
                    </motion.div>

                    {/* RIGHT - CONTACT FORM */}
                    <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={fadeUp}
                       className="rounded =-3xl bg-[#122019] p-7 shadow-xl sm:p-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                            Send Us A Message
                        </p>

                        <h2 className="mt-3 text-3xl font-bold yexy-white">
                            How can we help?
                        </h2>

                        <p className="mt-4 text-3xl font-bold text-white">
                            Fill in the form below and our team will get to you.
                        </p>

                        <form
                            onSubmit={handleSubmit} 
                            className="mt-8 space-y-5">
                            {/* NAME */}
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-white/80"
                                >
                                    Your Name
                                </label>

                                <input
                                   id="name"
                                   name="name"
                                   type="text"
                                   required
                                   placeholder="Enter your name"
                                   className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-white/30 transition focus:border-[#67c98b]"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-white/80"
                                >
                                    Phone Number
                                </label>

                                <input  
                                   id="phone"
                                   name="phone"
                                   type="tel"
                                   placeholder="07XXXXXXXX"
                                   required
                                   className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-white/30 transition focus:border-[#67c98b]"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label
                                   htmlFor="email"
                                   className="mb-2 block text-sm font-medium text-white/80"
                                 >
                                    Email Address
                                </label>

                                <input  
                                   id="email"
                                   name="email"
                                   type="email"
                                   placeholder="you@example.com"
                                   className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-white/30 transition focus:border-[#67c98b]"
                                />
                            </div>

                            {/* MESSAGE */}
                              <div>
                                <label
                                   htmlFor="message"
                                   className="mb-2 block text-sm font-medium text-white/80"
                                 >
                                    Message
                                </label>

                                <textarea 
                                   id="message"
                                   name="message"
                                   rows={5}
                                   placeholder="Tell us how we can help...."
                                   required
                                   className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-white/30 transition focus:border-[#67c98b]"
                                />
                            </div>

                            {/* SUBMIT */}
                            <button
                               type="submit"
                               className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#176b3a] px-6 py-3.5 font-semibold text-white transition hover:bg-[#21864d]"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                        {messageSent && (
                            <motion.div 
                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 className="mt-5 flex items-center gap-3 rounded-xl border border-[#67c98b]/30 bg-[#67c98b]/10 px-4 py-4"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#67c98b]">
                                    <CheckCircle2 size={22} className="text-[#122019]" />
                                </div>

                                <div>
                                    <p className="font-semibold text-[#67c98b]">
                                        Message sent successfully!
                                    </p>

                                    <p className="text-sm text-white/50">
                                      Your WhatsApp message is ready to send.
                                    </p>
                                </div>
                            </motion.div>    
                        )}
                    </motion.div>
                  </div>
                </section>

                    {/* LOCATION SECTION */}
                    <section className="px-6 pb-20">
                        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#e9f7ee]">
                            <div className="grid items-center lg:grid-cols-2">
                                <div className="p-8 sm:p-12">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176b3a]">
                                        Find Us
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                        Visit Baraka Garbage Services
                                    </h2>

                                    <p className="mt-5 leading-7 text-[#172019]/60">
                                       We are located in Kitengela, opposite Pizza Inn.
                                       Reach out before visiting and our team will be happy to assist you.
                                    </p>

                                    <a 
                                      href="https://www.google.com/maps/search/?api=1&query=Kitengela%20Pizza%20Inn"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#176b3a] px-6 py-3 font-semibold text-white transition hover:bg-[#21864d]"
                                    >
                                        <MapPin size={18} />
                                        Open in Google Maps
                                    </a>
                                </div>

                                <div className="flex min-h-[320px] items-center justify-center bg-[#122019] p-8">
                                    <div className="text-center">
                                        <MapPin size={52} className="mx-auto text-[#67c98b]" />
                                        <p className="mt-5 text-xl font-bold text-white">
                                            Kitengela 
                                        </p>

                                        <p className="mt-2 text-white/50">
                                            Opposite Pizza Inn
                                        </p>
                                    </div>
                                </div>

                            </div>
                </div>
             </section>

             <Footer />
        </main>
    );
}