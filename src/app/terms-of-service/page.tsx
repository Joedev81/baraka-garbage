"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Truck,
  CalendarCheck,
  CreditCard,
  AlertCircle,
  UserCheck,
  Scale,
  Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: Truck,
    number: "01",
    title: "Our Services",
    content: (
      <>
        <p>
          Baraka Garbage Services provides garbage collection and related
          waste-management services in Kitengela and surrounding areas.
        </p>

        <p>
          Our services may include scheduled garbage collection, waste
          collection arrangements, and the sale of garbage polythene bags or
          other related products.
        </p>

        <p>
          Service availability may depend on your location, collection
          schedule, and the type or quantity of waste involved.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Using Our Services",
    content: (
      <>
        <p>
          When requesting our services, you agree to provide accurate and
          reasonably complete information, including your name, phone number,
          location, and relevant service details where required.
        </p>

        <p>
          You are responsible for ensuring that the information you provide is
          accurate enough for our team to respond to your request or locate
          the agreed collection point.
        </p>
      </>
    ),
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Service Requests & Scheduling",
    content: (
      <>
        <p>
          Submitting a request through our website, WhatsApp, telephone, or
          another communication channel does not necessarily guarantee that a
          collection will take place until the request has been confirmed by
          Baraka Garbage Services.
        </p>

        <p>
          Collection times may occasionally change because of traffic,
          weather, operational requirements, vehicle availability, or other
          circumstances.
        </p>

        <p>
          Where a change affects a confirmed arrangement, we will make
          reasonable efforts to communicate with the customer.
        </p>
      </>
    ),
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Pricing & Payments",
    content: (
      <>
        <p>
          Prices for our services or products may vary depending on the type
          of service, collection frequency, location, quantity of waste, or
          other applicable factors.
        </p>

        <p>
          Any applicable price should be confirmed with Baraka Garbage
          Services before a service is provided where the price has not
          already been agreed.
        </p>

        <p>
          Customers are responsible for making agreed payments according to
          the payment arrangements communicated by Baraka Garbage Services.
        </p>
      </>
    ),
  },
  {
    icon: AlertCircle,
    number: "05",
    title: "Waste & Safety Requirements",
    content: (
      <>
        <p>
          Customers should not place hazardous, explosive, radioactive,
          poisonous, or otherwise dangerous materials out for ordinary
          garbage collection unless Baraka Garbage Services has specifically
          confirmed that it can safely and lawfully handle such materials.
        </p>

        <p>
          Customers should also ensure that waste is reasonably prepared for
          collection and does not create an unnecessary risk to our employees,
          contractors, members of the public, vehicles, or property.
        </p>

        <p>
          We may decline to collect waste that presents a significant safety,
          legal, or operational concern.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Website Information",
    content: (
      <>
        <p>
          We aim to keep the information on our website accurate and useful.
          However, service descriptions, prices, availability, images, and
          other information may change from time to time.
        </p>

        <p>
          Website content is provided for general informational purposes and
          should not be treated as a guarantee that a particular service will
          always be available in a particular location or at a particular
          time.
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    number: "07",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          Baraka Garbage Services will take reasonable care when providing its
          services. However, to the extent permitted by applicable law, we
          cannot be responsible for losses resulting from circumstances
          outside our reasonable control.
        </p>

        <p>
          This may include significant weather conditions, road closures,
          traffic disruptions, equipment failure, emergencies, third-party
          actions, or other unforeseen operational circumstances.
        </p>

        <p>
          Nothing in these Terms is intended to exclude or limit any liability
          or legal right that cannot lawfully be excluded or limited.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    number: "08",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, content appearing on this website,
          including text, branding, logos, graphics, photographs, and design
          elements, belongs to or is used by Baraka Garbage Services with
          appropriate permission.
        </p>

        <p>
          You may not reproduce, modify, distribute, or commercially use our
          website content without appropriate authorization, except where
          permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    number: "09",
    title: "Privacy",
    content: (
      <>
        <p>
          Your use of our website and the information you provide to us may be
          subject to our Privacy Policy.
        </p>

        <p>
          Our Privacy Policy explains how we collect, use, protect, and handle
          personal information.
        </p>

        <Link
          href="/privacy-policy"
          className="inline-flex items-center gap-2 font-semibold text-[#176b3a] transition-colors duration-300 hover:text-[#0f4d29]"
        >
          Read our Privacy Policy
          <ArrowLeft className="rotate-180" size={16} />
        </Link>
      </>
    ),
  },
  {
    icon: FileText,
    number: "10",
    title: "Third-Party Services & Links",
    content: (
      <>
        <p>
          Our website may contain links or features provided by third-party
          services, such as WhatsApp, social media platforms, hosting
          providers, or other external services.
        </p>

        <p>
          These third parties operate under their own terms and privacy
          policies. Baraka Garbage Services is not responsible for the
          policies or practices of third-party websites and services.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    number: "11",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms of Service from time to time to reflect
          changes to our services, website, business operations, or applicable
          requirements.
        </p>

        <p>
          Updated Terms will be published on this page. The effective version
          will be the version available on the website at the time of your use
          of the relevant service.
        </p>
      </>
    ),
  },
  {
    icon: Phone,
    number: "12",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about these Terms of Service, our services, or
          a service request, please contact Baraka Garbage Services.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:0717078680"
            className="inline-flex items-center gap-2 font-semibold text-[#176b3a] transition-colors duration-300 hover:text-[#0f4d29]"
          >
            <Phone size={17} />
            0717078680
          </a>

          <a
            href="tel:0726947844"
            className="inline-flex items-center gap-2 font-semibold text-[#176b3a] transition-colors duration-300 hover:text-[#0f4d29]"
          >
            <Phone size={17} />
            0726947844
          </a>
        </div>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#172019]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-[#122019] px-6 pb-10 pt-20 text-white lg:px-8 lg:pb-12 lg:pt-24"
        style={{
          backgroundImage: "url('/privacy/terms.jpg')",
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
                <FileText size={20} />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#67c98b]">
                  Service Guidelines
                </p>

                <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  Terms of Service
                </h1>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-xs leading-6 text-white/70 sm:text-sm">
              Please review the terms that apply when using the Baraka Garbage
              Services website and our garbage collection services.
            </p>

            <div className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] text-white/65 backdrop-blur-sm">
              Last updated: September 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-[#176b3a]/10 bg-[#e8f3eb] p-7 shadow-sm sm:p-9 lg:p-10"
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
                Welcome to Baraka Garbage Services. These Terms of Service set
                out the general terms that apply when you use our website or
                request our garbage collection and related services.
              </p>

              <p>
                By using our website or requesting our services, you agree to
                comply with these Terms together with any specific service
                arrangements communicated to you by Baraka Garbage Services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TERMS SECTIONS */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.article
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.025,
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

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#122019] px-6 py-16 text-white lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#176b3a]/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-5xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#67c98b]">
            Need More Information?
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Have questions about our services?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Contact Baraka Garbage Services and our team will be happy to
            assist you with your service request or any questions about these
            Terms.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:0717078680"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176b3a] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d8248]"
            >
              <Phone size={17} />
              0717078680
            </a>

            <a
              href="tel:0726947844"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone size={17} />
              0726947844
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#67c98b]/30 px-6 py-3 text-sm font-semibold text-[#67c98b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#67c98b]/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}