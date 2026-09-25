import Link from "next/link";
import {
    MapPin,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#122019] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

                    {/* BRAND */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                                <img
                                    src="/logo/logo.jpeg"
                                    alt="Baraka Garbage Services"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div>
                                <p className="font-bold tracking-tight">
                                    BARAKA GARBAGE
                                </p>

                                <p className="text-[10px] tracking-[0.2em] text-[#67c98b]">
                                    SERVICES
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-md leading-7 text-white/60">
                            A cleaner space. A better life. Professional garbage
                            collection and garbage polythene solutions in Kitengela.
                        </p>

                        {/* SOCIAL LINKS */}
                        <div className="mt-6 flex gap-3">

                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/@barakagarbageservices"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"
                            >
                                <span className="text-sm font-bold">f</span>
                            </a>

                            {/* TIKTOK */}
                            <a
                                href="https://www.tiktok.com/@1barakagarbageservice"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"
                            >
                                <span className="text-sm font-bold">
                                    ♪
                                </span>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"
                            >
                                <span className="text-sm font-bold">◎</span>
                            </a>

                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Quick Links
                        </h3>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className="transition hover:text-white"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/services"
                                className="transition hover:text-white"
                            >
                                Services
                            </Link>

                            <Link
                                href="/request-pickup"
                                className="transition hover:text-white"
                            >
                                Request Pickup
                            </Link>

                            <Link
                                href="/contact"
                                className="transition hover:text-white"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-white/60">

                            {/* PRIMARY NUMBER */}
                            <a
                                href="tel:0717078680"
                                className="flex items-start gap-3 transition hover:text-white"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    <span className="block font-semibold text-white">
                                        0717078680
                                    </span>

                                    <span className="text-xs text-[#67c98b]">
                                        Primary
                                    </span>
                                </span>
                            </a>

                            {/* SECONDARY NUMBER */}
                            <a
                                href="tel:0726947844"
                                className="flex items-start gap-3 transition hover:text-white"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    <span className="block font-semibold text-white">
                                        0726947844
                                    </span>

                                    <span className="text-xs text-white/40">
                                        Alternative
                                    </span>
                                </span>
                            </a>

                            {/* LOCATION */}
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    Kitengela,
                                    <br />
                                    Opposite Pizza Inn
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Legal
                        </h3>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                            <Link
                                href="/faqs"
                                className="transition hover:text-white"
                            >
                                FAQs
                            </Link>

                            <Link
                                href="/privacy-policy"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms-of-service"
                                className="transition hover:text-white"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-14 border-t border-white/10 pt-7">
                    <div className="flex flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

                        <p>
                            © {new Date().getFullYear()} Baraka Garbage Services.
                        </p>

                        <p>
                            A cleaner space. A better life.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}