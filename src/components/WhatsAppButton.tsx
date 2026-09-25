"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
    const [open, setOpen] = useState(false);

    const phoneNumber = "254717078680";

    const message = encodeURIComponent(
        "Hello Baraka Garbage Services, I'd like to request a garbage pickup."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* CHAT CARD */}
            {open && (
                <div className="w-[280px] overflow-hidden rounded-2xl border border-[#176b3a]/20 bg-white shadow-2xl">
                    {/* HEADER */}
                    <div className="bg-[#176b3a] px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold">
                                    Baraka Garbage Services
                                </p>

                                <div className="mt-1 flex items-center gap-2 text-xs text-white/80">
                                    <span className="h-2 w-2 rounded-full bg-[#67c98b]" />
                                      Usually responds quickly
                                </div>
                            </div>

                            <button 
                                onClick={() => setOpen(false)}
                                aria-label="Close WhatsApp assistant"
                                className="rounded-full p-1 transition hover:bg-white/10"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="bg-[#f7f9f6] px-5 py-5">
                        <div className="rounded-2xl rounded-tl-none bg-white p-4 text-sm leading-6 text-[#172019] shadow-sm">
                                👋 <strong>Need a pickup?</strong>
                                <br />
                                Chat with our Operations & Customer Service and request your garbage collection.
                        </div>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#176b3a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#125a30] hover:shadow-lg"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
               onClick={() => setOpen(!open)}
               aria-label="Open WhatsApp assistant"
               className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#176b3a] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#125a30]"
            >
                {open ? (
                    <X size={24} />
                ) : (
                    <MessageCircle size={26} className="transition group-hover:scale-110" />
                )}

                {/* PULSE */}
                {!open && (
                    <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#176b3a] opacity-20" />
                )}
            </button>
        </div>
    );
}