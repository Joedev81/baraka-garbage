"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Request Pickup", href: "/request-pickup" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 text-[#172019] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#f1f6f2]">
                        <img
                            src="/logo/logo.jpeg"
                            alt="Baraka Garbage Services"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-tight">
                            BARAKA GARBAGE
                        </p>

                        <p className="text-[10px] font-medium tracking-[0.2em] text-[#176b3a]">
                            SERVICES
                        </p>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-8 text-sm font-medium text-[#172019] md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-[#176b3a]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* DESKTOP WHATSAPP */}
                <a
                    href="https://wa.me/254717078680"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full bg-[#176b3a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#12572f] md:block"
                >
                    WhatsApp Us
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            {menuOpen && (
                <div className="border-t border-black/5 bg-white px-6 py-5 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[#f1f6f2] hover:text-[#176b3a]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/254717078680"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 rounded-xl bg-[#176b3a] px-4 py-3 text-center text-sm font-semibold text-white"
                        >
                            WhatsApp Us
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}