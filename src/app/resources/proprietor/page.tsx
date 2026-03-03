"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function ProprietorPage() {
  return (
    <div className="bg-white">

      {/* HEADER */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Proprietor"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proprietor / Individual
          </h1>
          <p className="text-lg text-gray-200">
            Documentation checklists for individual business registrations and compliance.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* Reusable Section Component Style */}
          {[
            {
              title: "Income Tax Return – Individual Checklist",
              items: [
                "PAN Card",
                "Aadhaar Card (linked with PAN)",
                "Income Tax Credentials",
                "Form 16 (if salaried)",
                "Bank Statements (FY relevant)",
                "Capital Gain Statements (if any)",
                "Interest Certificates (FD/RD/NBFC)",
                "Housing Loan Interest Certificate",
                "Investment Proofs (80C, 80D, 80G etc.)",
                "Foreign Income / Asset Details (if applicable)",
                "Previous Year ITR copy"
              ]
            },
            {
              title: "GST Registration – Proprietor Checklist",
              items: [
                "PAN of Proprietor",
                "Aadhaar of Proprietor",
                "Passport size photo",
                "Business address proof",
                "Own property: Property tax receipt / Electricity bill",
                "Rented property: Rental agreement + Property tax receipt + Electricity bill",
                "Mobile & Email",
                "Nature of business details"
              ]
            },
            {
              title: "Trade License Checklist",
              items: [
                "PAN & Aadhaar of Proprietor",
                "Address proof of business premises (Rental agreement + Electricity bill)",
                "Total space in square feet",
                "Business activity details",
                "Mobile & Email",
                "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
              ]
            },
            {
              title: "Professional Tax Registration (PTRC/PTEC)",
              items: [
                "PAN & Aadhaar",
                "Address proof",
                "Bank proof (Cancelled Cheque)",
                "Employee details (if applicable)",
                "GST Certificate (if registered)"
              ]
            },
            {
              title: "MSME (Udyam) Registration",
              items: [
                "Aadhaar of Proprietor",
                "PAN of Proprietor",
                "Business activity details",
                "Address of business premises",
                "Mobile & Mail ID"
              ]
            },
            {
              title: "Shops & Establishment",
              items: [
                "Aadhaar of Proprietor",
                "PAN of Proprietor",
                "Registered office proof (Rental agreement + Electricity bill)",
                "Employee details",
                "Telugu Name Board"
              ]
            },
            {
              title: "DSC (Digital Signature Certificate)",
              items: [
                "PAN",
                "Aadhaar",
                "Photo",
                "Mobile & Email"
              ]
            },
            {
              title: "PF & ESI Registration",
              items: [
                "PAN & Aadhaar of proprietor",
                "Business address proof (Rental agreement + Electricity bill)",
                "GST Certificate (if applicable)",
                "Employee list (Name, Gender & Salary)",
                "Date of crossing threshold (20 employees for PF & 10 employees for ESI)"
              ]
            }
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary">
                  {section.title}
                </h2>

                {/* Download Placeholder */}
                <button className="flex items-center text-sm font-medium text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>

              <ul className="grid md:grid-cols-2 gap-y-3 gap-x-10 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}