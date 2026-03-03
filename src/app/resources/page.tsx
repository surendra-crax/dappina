"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Downloads"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Downloads – Document Checklists
          </h1>
          <p className="text-lg text-gray-200">
            Updated as per latest applicable laws & procedural requirements
          </p>
        </div>
      </section>

      {/* MAIN 4 CATEGORIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {[
            { name: "1️⃣ Proprietor / Individual", link: "/resources/proprietor" },
            { name: "2️⃣ Private Limited Company", link: "/resources/private-limited" },
            { name: "3️⃣ LLP (Limited Liability Partnership)", link: "/resources/llp" },
            { name: "4️⃣ Partnership Firm", link: "/resources/partnership" }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition group"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {item.name}
              </h2>
              <div className="flex items-center text-primary font-medium">
                View Checklists
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}

        </div>
      </section>
    </div>
  );
}