"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/animations";
import Image from "next/image";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const resourceCategories = [
  {
    category: "Proprietor / Individual",
    registrations: [
      {
        name: "Income Tax Return – Individual Checklist",
        checklist: [
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
        name: "GST Registration – Proprietor Checklist",
        checklist: [
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
        name: "Trade License Checklist",
        checklist: [
          "PAN & Aadhaar of Proprietor",
          "Address proof of business premises (Rental agreement + Electricity bill)",
          "Total space in square feet",
          "Business activity details",
          "Mobile & Email",
          "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
        ]
      },
      {
        name: "Professional Tax Registration (PTRC/PTEC)",
        checklist: [
          "PAN & Aadhaar",
          "Address proof",
          "Bank proof (Cancelled Cheque)",
          "Employee details (if applicable)",
          "GST Certificate (if registered)"
        ]
      },
      {
        name: "MSME (Udyam) Registration",
        checklist: [
          "Aadhaar of Proprietor",
          "PAN of Proprietor",
          "Business activity details",
          "Address of business premises",
          "Mobile & Mail ID"
        ]
      },
      {
        name: "Shops & Establishment",
        checklist: [
          "Aadhaar of Proprietor",
          "PAN of Proprietor",
          "Registered office proof (Rental agreement + Electricity bill)",
          "Employee details",
          "Telugu Name Board"
        ]
      },
      {
        name: "DSC (Digital Signature Certificate)",
        checklist: [
          "PAN",
          "Aadhaar",
          "Photo",
          "Mobile & Email"
        ]
      },
      {
        name: "PF & ESI Registration",
        checklist: [
          "PAN & Aadhaar of proprietor",
          "Business address proof (Rental agreement + Electricity bill)",
          "GST Certificate (if applicable)",
          "Employee list (Name, Gender & Salary)",
          "Date of crossing threshold (20 employees for PF & 10 employees for ESI)"
        ]
      }
    ]
  },

  {
    category: "Private Limited Company",
    registrations: [
      {
        name: "Company Information",
        checklist: [
          "Proposed Company Name (2–3 options in order of preference)",
          "Nature of Business / Main Objects",
          "Registered Office Address",
          "Official Email ID",
          "Official Mobile Number",
          "Authorized Share Capital",
          "Paid-up Share Capital",
          "Shareholding Pattern (Subscriber-wise details)"
        ]
      },
      {
        name: "Directors’ Details",
        checklist: [
          "Occupation",
          "Personal Email ID",
          "Personal Mobile Number",
          "Passport-size photograph",
          "Existing DIN (if allotted)",
          "Residential Address",
          "Duration of Stay",
          "Educational Qualification",
          "Other entity interest details (CIN / LLPIN / FCRN)",
          "Identity Proof: PAN, Aadhaar, Passport (if foreign)",
          "Address Proof (Not older than 2 months)",
          "Registered Office Proof (Ownership / Rent Agreement + NOC + Utility Bill)"
        ]
      },
      {
        name: "GST Registration – Company",
        checklist: [
          "PAN of Company",
          "Certificate of Incorporation",
          "MOA / AOA",
          "Board resolution",
          "Director KYC",
          "Registered office proof"
        ]
      },
      {
        name: "FEMA / FDI Reporting",
        checklist: [
          "FIRC",
          "KYC of foreign remitter",
          "Board resolution",
          "Valuation certificate",
          "FC-GPR filing details"
        ]
      },
      {
        name: "Trade License Checklist",
        checklist: [
          "Certificate of Incorporation, PAN, MOA & AOA",
          "Director KYC",
          "Business address proof",
          "Total space in square feet",
          "Business activity details",
          "Company Mobile & Email",
          "Any 2 neighbours’ details"
        ]
      },
      {
        name: "Professional Tax Registration (PTRC/PTEC)",
        checklist: [
          "Certificate of Incorporation, PAN, MOA & AOA",
          "Director KYC",
          "Cancelled Cheque",
          "Employee details",
          "GST Certificate"
        ]
      },
      {
        name: "MSME (Udyam) Registration",
        checklist: [
          "Certificate of Incorporation, PAN, MOA & AOA",
          "Director KYC",
          "Business activity details",
          "Address of business premises",
          "Company Mobile & Mail ID"
        ]
      },
      {
        name: "Shops & Establishment",
        checklist: [
          "Certificate of Incorporation, PAN",
          "Director KYC",
          "Registered office proof",
          "Employee details",
          "Telugu Name Board",
          "Nature of Business"
        ]
      },
      {
        name: "PF (EPFO) & ESI Registration",
        checklist: [
          "Certificate of Incorporation",
          "PAN of Company",
          "Registered Office Address proof",
          "Email ID & Mobile Number",
          "Director KYC",
          "Employee list",
          "Threshold crossing date",
          "Cancelled Cheque"
        ]
      },
      {
        name: "CLRA – Contractor License Checklist",
        checklist: [
          "Certificate of Incorporation",
          "PAN of Company",
          "MOA & AOA",
          "S&E Certificate",
          "CLRA Registration Certificate (Form II)",
          "Form V",
          "Work Order / Contract Agreement",
          "Work Location Address",
          "Nature of Work",
          "Contract Duration",
          "Maximum contract labour proposed",
          "Authorized Signatory PAN & Aadhaar",
          "Employee list"
        ]
      }
    ]
  },

  {
  category: "LLP (Limited Liability Partnership)",
  registrations: [
    {
      name: "LLP Incorporation",
      checklist: [
        "Proposed LLP name",
        "Partner PAN & Aadhaar",
        "Registered office proof (Rental agreement + Electricity bill)",
        "Capital contribution details",
        "LLP Mobile number & Mail ID",
        "Designated Partner Documents:",
        "• PAN",
        "• Aadhaar",
        "• DIN (If already available)",
        "• Address proof (Bank Statement) – If no existing DIN",
        "• Passport (if foreign national)"
      ]
    },
    {
      name: "GST Registration – LLP",
      checklist: [
        "LLP incorporation Certificate",
        "LLP Agreement",
        "PAN of LLP",
        "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
        "Registered office proof (Rental agreement + Electricity bill)"
      ]
    },
    {
      name: "Trade License Checklist",
      checklist: [
        "Certificate of Incorporation, PAN, LLP Agreement",
        "Partners KYC, Mobile Number, Mail ID",
        "Address proof of business premises (Rental agreement + Electricity bill)",
        "Total space in square feet",
        "Business activity details",
        "Mobile & Email of LLP",
        "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
      ]
    },
    {
      name: "Professional Tax Registration (PTRC/PTEC)",
      checklist: [
        "Certificate of Incorporation, PAN, LLP Agreement",
        "Partners KYC, Mobile Number, Mail ID",
        "Bank proof (Cancelled Cheque)",
        "Employee details (if applicable)",
        "GST Certificate (if registered)"
      ]
    },
    {
      name: "MSME (Udyam) Registration",
      checklist: [
        "Certificate of Incorporation, PAN, LLP Agreement",
        "Partners KYC, Mobile Number, Mail ID",
        "Business activity details",
        "Address of business premises",
        "Mobile & Mail ID of the company"
      ]
    },
    {
      name: "Shops & Establishment",
      checklist: [
        "Certificate of Incorporation, PAN, LLP Agreement",
        "Partners KYC, Mobile Number, Mail ID",
        "Registered office proof (Rental agreement + Electricity bill)",
        "Employee details",
        "Telugu Name Board",
        "Nature of Business"
      ]
    },
    {
      name: "PF (EPFO) & ESI Registration",
      checklist: [
        "Certificate of Incorporation, LLP Agreement",
        "PAN of LLP",
        "Registered Office Address (Rental agreement + Electricity bill)",
        "Email ID & Mobile Number",
        "Partner KYC, Mobile Number, Mail ID",
        "Employee list (Name, Gender & Salary)",
        "Date of crossing threshold (20 employees for PF & 10 employees for ESI)",
        "Cancelled Cheque"
      ]
    }
  ]
},

  {
  category: "Partnership Firm",
  registrations: [
    {
      name: "Partnership Deed Documentation",
      checklist: [
        "Draft partnership deed",
        "Stamp paper (as per state rules)",
        "Partner PAN & Aadhaar",
        "Capital contribution details"
      ]
    },
    {
      name: "Firm Registration (Registrar of Firms)",
      checklist: [
        "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
        "Registered office proof (Rental agreement + Electricity bill)",
        "Profit Sharing Ratio’s",
        "Managing Partner and Remuneration details",
        "Any other clauses required to add in deed"
      ]
    },
    {
      name: "GST Registration – Partnership",
      checklist: [
        "Partnership deed",
        "PAN of Firm",
        "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
        "Registered office proof (Rental agreement + Electricity bill)"
      ]
    },
    {
      name: "Trade License Checklist",
      checklist: [
        "Partnership Deed, PAN",
        "Partners KYC, Mobile Number, Mail ID",
        "Address proof of business premises (Rental agreement + Electricity bill)",
        "Total space in square feet",
        "Business activity details",
        "Mobile & Email of Firm",
        "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
      ]
    },
    {
      name: "Professional Tax Registration (PTRC/PTEC)",
      checklist: [
        "Partnership Deed, PAN",
        "Partners KYC, Mobile Number, Mail ID",
        "Bank proof (Cancelled Cheque)",
        "Employee details (if applicable)",
        "GST Certificate (if registered)"
      ]
    },
    {
      name: "MSME Registration",
      checklist: [
        "PAN of Firm",
        "Aadhaar of managing partner",
        "Investment & turnover details",
        "Bank Account details of the firm"
      ]
    },
    {
      name: "Shops & Establishment",
      checklist: [
        "Partnership deed",
        "PAN of Firm",
        "Registered office proof (Rental agreement + Electricity bill)",
        "Employee details",
        "Telugu Name Board",
        "Partner KYC, Mobile Number, Mail ID"
      ]
    },
    {
      name: "PF (EPFO) & ESI Registration",
      checklist: [
        "Partnership Deed",
        "PAN of Firm",
        "Registered Office Address (Rental agreement + Electricity bill)",
        "Email ID & Mobile Number",
        "Partner KYC, Mobile Number, Mail ID",
        "Employee list (Name, Gender & Salary)",
        "Date of crossing threshold (20 employees for PF & 10 employees for ESI)",
        "Cancelled Cheque"
      ]
    }
  ]
}
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
            alt="Client Resources"
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-black"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Client Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Structured compliance documentation checklists categorized for clarity.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 flex-grow bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <FadeUp className="mb-14 text-center">
            <div className="bg-white border border-gray-200 text-gray-700 px-6 py-4 rounded-lg shadow-sm inline-block">
              <span className="font-semibold">Updated:</span> March 2026 – As per latest MCA, GST & Income Tax regulations.
            </div>
          </FadeUp>

          <div className="space-y-12">
            {resourceCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-5 text-xl font-semibold tracking-wide">
                  {cat.category}
                </div>

                {/* Registrations */}
                <div className="divide-y">
                  {cat.registrations.map((reg, j) => {
                    const key = `${i}-${j}`;
                    const isOpen = openIndex === key;

                    return (
                      <div key={j} className="transition-all">
                        <button
                          onClick={() => toggleAccordion(key)}
                          className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-gray-50 transition"
                        >
                          <span className="font-medium text-gray-900">
                            {reg.name}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-primary" : "text-gray-500"
                            }`}
                          />
                        </button>

                        {/* Checklist */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-10 pb-6">
                            <ul className="space-y-3 mt-2">
                              {reg.checklist.map((item, k) => (
                                <li key={k} className="flex items-start gap-3 text-gray-700">
                                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}