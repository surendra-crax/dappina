"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function LLPPage() {
  return (
    <div className="bg-white">

      {/* HEADER */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="LLP"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LLP (Limited Liability Partnership)
          </h1>
          <p className="text-lg text-gray-200">
            Incorporation and compliance documentation checklist.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* LLP INCORPORATION */}
          <Section
            title="LLP Incorporation"
            items={[
              "Proposed LLP name",
              "Partner PAN & Aadhaar",
              "Registered office proof (Rental agreement + Electricity bill)",
              "Capital contribution details",
              "LLP Mobile number & Mail ID"
            ]}
          />

          <SubSection
            title="Designated Partner Documents"
            items={[
              "PAN",
              "Aadhaar",
              "DIN (If already available)",
              "Address proof (Bank Statement) – If No existing DIN",
              "Passport (if foreign national)"
            ]}
          />

          {/* GST */}
          <Section
            title="GST Registration – LLP"
            items={[
              "LLP incorporation Certificate",
              "LLP Agreement",
              "PAN of LLP",
              "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
              "Registered office proof (Rental agreement + Electricity bill)"
            ]}
          />

          {/* TRADE LICENSE */}
          <Section
            title="Trade License Checklist"
            items={[
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Address proof of business premises (Rental agreement + Electricity bill)",
              "Total space in square feet",
              "Business activity details",
              "Mobile & Email of LLP",
              "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
            ]}
          />

          {/* PROFESSIONAL TAX */}
          <Section
            title="Professional Tax Registration (PTRC/PTEC)"
            items={[
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Bank proof (Cancelled Cheque)",
              "Employee details (if applicable)",
              "GST Certificate (if registered)"
            ]}
          />

          {/* MSME */}
          <Section
            title="MSME (Udyam) Registration"
            items={[
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Business activity details",
              "Address of business premises",
              "Mobile & Mail ID of the company"
            ]}
          />

          {/* SHOPS */}
          <Section
            title="Shops & Establishment"
            items={[
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Registered office proof (Rental agreement + Electricity bill)",
              "Employee details",
              "Telugu Name Board",
              "Nature of Business"
            ]}
          />

          {/* PF & ESI */}
          <Section
            title="PF (EPFO) & ESI Registration"
            items={[
              "Certificate of Incorporation, LLP Agreement",
              "PAN of LLP",
              "Registered Office Address (Rental agreement + Electricity bill)",
              "Email ID & Mobile Number",
              "Partner KYC, Mobile Number, Mail ID",
              "Employee list (Name, Gender & Salary)",
              "Date of crossing threshold (20 employees for PF & 10 employees for ESI)",
              "Cancelled Cheque"
            ]}
          />

        </div>
      </section>
    </div>
  );
}


/* REUSABLE SECTION */
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
        <button className="flex items-center text-sm font-medium text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
          <Download className="w-4 h-4 mr-2" />
          Download
        </button>
      </div>

      <ul className="grid md:grid-cols-2 gap-y-3 gap-x-10 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* SUB SECTION */
function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border-l-4 border-primary rounded-xl shadow-sm p-8">
      <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}