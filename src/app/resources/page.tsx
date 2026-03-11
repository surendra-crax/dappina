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
              Resources – Document Checklists
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* CATEGORY BLOCK 1 */}
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    1️⃣ Proprietor / Individual
                  </h2>
                </div>
                <ul className="space-y-3 flex-grow">
                  {[
                    "Income Tax Return",
                    "GST Registration",
                    "Trade License",
                    "Professional Tax (PTRC/PTEC)",
                    "MSME (Udyam) Registration",
                    "Shops & Establishment",
                    "DSC (Digital Signature)",
                    "PF & ESI Registration"
                  ].map((item, i) => {
                    const hashId = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <li key={i}>
                        <Link
                          href={`/resources/proprietor/${hashId}`}
                          className="text-gray-600 hover:text-primary transition flex items-center group"
                        >
                          <span className="text-primary font-bold mr-2 opacity-70 group-hover:opacity-100">•</span>
                          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CATEGORY BLOCK 2 */}
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    2️⃣ Private Limited Company
                  </h2>
                </div>
                <ul className="space-y-3 flex-grow">
                  {[
                    "Incorporation",
                    "GST Registration",
                    "FEMA / FDI Reporting",
                    "Trade License",
                    "Professional Tax (PTRC/PTEC)",
                    "MSME (Udyam) Registration",
                    "Shops & Establishment",
                    "PF (EPFO) & ESI Registration",
                    "CLRA – Contractor License"
                  ].map((item, i) => {
                    const hashId = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <li key={i}>
                        <Link
                          href={`/resources/private-limited/${hashId}`}
                          className="text-gray-600 hover:text-primary transition flex items-center group"
                        >
                          <span className="text-primary font-bold mr-2 opacity-70 group-hover:opacity-100">•</span>
                          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CATEGORY BLOCK 3 */}
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    3️⃣ LLP (Limited Liability Partnership)
                  </h2>
                </div>
                <ul className="space-y-3 flex-grow">
                  {[
                    "LLP Incorporation",
                    "GST Registration",
                    "Trade License",
                    "Professional Tax (PTRC/PTEC)",
                    "MSME (Udyam) Registration",
                    "Shops & Establishment",
                    "PF (EPFO) & ESI Registration"
                  ].map((item, i) => {
                    const hashId = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <li key={i}>
                        <Link
                          href={`/resources/llp/${hashId}`}
                          className="text-gray-600 hover:text-primary transition flex items-center group"
                        >
                          <span className="text-primary font-bold mr-2 opacity-70 group-hover:opacity-100">•</span>
                          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CATEGORY BLOCK 4 */}
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    4️⃣ Partnership Firm
                  </h2>
                </div>
                <ul className="space-y-3 flex-grow">
                  {[
                    "Firm Registration",
                    "GST Registration",
                    "Trade License",
                    "Professional Tax (PTRC/PTEC)",
                    "MSME Registration",
                    "Shops & Establishment",
                    "PF (EPFO) & ESI Registration"
                  ].map((item, i) => {
                    const hashId = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <li key={i}>
                        <Link
                          href={`/resources/partnership/${hashId}`}
                          className="text-gray-600 hover:text-primary transition flex items-center group"
                        >
                          <span className="text-primary font-bold mr-2 opacity-70 group-hover:opacity-100">•</span>
                          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </FadeUp>

        </div>
      </section>

    </div>
  );
}
