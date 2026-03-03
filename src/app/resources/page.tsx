"use client";

import { FadeUp } from "@/components/ui/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ===== ORIGINAL HERO RESTORED ===== */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
            alt="Client Resources"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Downloads – Document Checklists
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
              Updated as per latest applicable laws & procedural requirements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== MAIN 4 CATEGORIES ===== */}
      <section className="py-24 bg-sectionBg flex-grow">
        <div className="max-w-5xl mx-auto px-6">

          <FadeUp>
            <div className="space-y-10">

              {/* CATEGORY BLOCK */}
              <Link
                href="/resources/proprietor"
                className="group block bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    1️⃣ Proprietor / Individual
                  </h2>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Income Tax, GST, Trade License, MSME, Shops & Establishment,
                  DSC, PF & ESI documentation checklists.
                </p>
              </Link>

              <Link
                href="/resources/private-limited"
                className="group block bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    2️⃣ Private Limited Company
                  </h2>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Incorporation, Director KYC, GST, FEMA, CLRA, MSME,
                  Professional Tax, PF & ESI compliance requirements.
                </p>
              </Link>

              <Link
                href="/resources/llp"
                className="group block bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    3️⃣ LLP (Limited Liability Partnership)
                  </h2>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  LLP Incorporation, GST, Trade License, MSME, Shops &
                  Establishment, Professional Tax, PF & ESI documentation.
                </p>
              </Link>

              <Link
                href="/resources/partnership"
                className="group block bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    4️⃣ Partnership Firm
                  </h2>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Partnership Deed, Firm Registration, GST, MSME, Shops &
                  Establishment, Trade License, PF & ESI requirements.
                </p>
              </Link>

            </div>
          </FadeUp>

        </div>
      </section>

    </div>
  );
}