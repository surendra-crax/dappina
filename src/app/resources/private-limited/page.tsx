"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function PrivateLimitedPage() {
  return (
    <div className="bg-white">

      {/* HEADER */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Private Limited Company"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Private Limited Company
          </h1>
          <p className="text-lg text-gray-200">
            Incorporation and compliance documentation checklists.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* COMPANY INFORMATION */}
          <Section
            title="Company Information"
            items={[
              "Proposed Company Name (2–3 options in order of preference)",
              "Nature of Business / Main Objects",
              "Registered Office Address",
              "Official Email ID",
              "Official Mobile Number",
              "Authorized Share Capital",
              "Paid-up Share Capital",
              "Shareholding Pattern (Subscriber-wise details)"
            ]}
          />

          {/* DIRECTORS DETAILS */}
          <Section
            title="Directors’ Details"
            items={[
              "Occupation",
              "Email ID (Personal)",
              "Mobile Number (Personal)",
              "Recent passport-size photograph",
              "Existing DIN (if already allotted)",
              "Residential Address",
              "Duration of Stay at Present Address",
              "Educational Qualification",
              "Details of other entities (CIN / LLPIN / FCRN)",
              "Percentage of Shareholding",
              "Amount Invested"
            ]}
          />

          <SubSection
            title="Identity Proof (Mandatory)"
            items={[
              "PAN Card (Self-attested)",
              "Aadhaar Card (Self-attested)",
              "Passport (Mandatory for Foreign Nationals)"
            ]}
          />

          <SubSection
            title="Address Proof (Not older than 2 months)"
            items={[
              "Bank Statement",
              "Electricity Bill",
              "Telephone / Mobile Bill"
            ]}
          />

          <SubSection
            title="Registered Office Proof"
            items={[
              "Ownership document (if self-owned property)",
              "OR Rent Agreement + NOC from Owner",
              "Utility Bill (not older than 2 months)"
            ]}
          />

          {/* GST */}
          <Section
            title="GST Registration – Company"
            items={[
              "PAN of Company",
              "Certificate of Incorporation",
              "MOA / AOA",
              "Board resolution",
              "Director KYC, Mobile Number, Mail ID & Passport Size Photo",
              "Registered office proof (Rental agreement + Electricity bill)"
            ]}
          />

          {/* FEMA */}
          <Section
            title="FEMA / FDI Reporting (If foreign investment involved)"
            items={[
              "FIRC",
              "KYC of foreign remitter",
              "Board resolution",
              "Valuation certificate (CA/Registered Valuer)",
              "FC-GPR filing details"
            ]}
          />

          {/* TRADE LICENSE */}
          <Section
            title="Trade License Checklist"
            items={[
              "Certificate of Incorporation, PAN, MOA & AOA",
              "Director KYC, Mobile Number, Mail ID",
              "Address proof of business premises",
              "Total space in square feet",
              "Business activity details",
              "Mobile & Email of Company",
              "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
            ]}
          />

          {/* PROFESSIONAL TAX */}
          <Section
            title="Professional Tax Registration (PTRC/PTEC)"
            items={[
              "Certificate of Incorporation, PAN, MOA & AOA",
              "Director KYC",
              "Bank proof (Cancelled Cheque)",
              "Employee details (if applicable)",
              "GST Certificate (if registered)"
            ]}
          />

          {/* MSME */}
          <Section
            title="MSME (Udyam) Registration"
            items={[
              "Certificate of Incorporation, PAN, MOA & AOA",
              "Director KYC",
              "Business activity details",
              "Address of business premises",
              "Mobile & Mail ID of the company"
            ]}
          />

          {/* SHOPS */}
          <Section
            title="Shops & Establishment"
            items={[
              "Certificate of Incorporation, PAN",
              "Director KYC",
              "Registered office proof",
              "Employee details",
              "Telugu Name Board",
              "Nature of Business"
            ]}
          />

          {/* PF & ESI */}
          <Section
            title="PF (EPFO) & ESI Registration"
            items={[
              "Certificate of Incorporation",
              "PAN of Company",
              "Registered Office Address",
              "Email ID & Mobile Number",
              "Director KYC",
              "Employee list",
              "Date of crossing threshold",
              "Cancelled Cheque"
            ]}
          />

          {/* CLRA */}
          <Section
            title="CLRA – Contractor License Checklist"
            items={[
              "Certificate of Incorporation",
              "PAN of Company",
              "MOA & AOA",
              "S&E Certificate",
              "Copy of CLRA Registration Certificate (Form II)",
              "Form V",
              "Work Order / Contract Agreement",
              "Address of Work Location",
              "Nature of Work / Scope of Contract",
              "Duration of Contract",
              "Maximum number of contract labour proposed",
              "Authorized Signatory PAN & Aadhaar",
              "Employee list"
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

/* SUB SECTION (Indented Block) */
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