"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const topics = [
  {
    id: "income-tax-return",
    title: "Income Tax Return – Individual Checklist",
    sections: [
      {
        title: null,
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
      }
    ]
  },
  {
    id: "gst-registration",
    title: "GST Registration – Proprietor Checklist",
    sections: [
      {
        title: null,
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
      }
    ]
  },
  {
    id: "trade-license",
    title: "Trade License Checklist",
    sections: [
      {
        title: null,
        items: [
          "PAN & Aadhaar of Proprietor",
          "Address proof of business premises (Rental agreement + Electricity bill)",
          "Total space in square feet",
          "Business activity details",
          "Mobile & Email",
          "Any 2 neighbours’ details (Name, Mobile & Mail ID)"
        ]
      }
    ]
  },
  {
    id: "professional-tax-ptrc-ptec",
    title: "Professional Tax Registration (PTRC/PTEC)",
    sections: [
      {
        title: null,
        items: [
          "PAN & Aadhaar",
          "Address proof",
          "Bank proof (Cancelled Cheque)",
          "Employee details (if applicable)",
          "GST Certificate (if registered)"
        ]
      }
    ]
  },
  {
    id: "msme-udyam-registration",
    title: "MSME (Udyam) Registration",
    sections: [
      {
        title: null,
        items: [
          "Aadhaar of Proprietor",
          "PAN of Proprietor",
          "Business activity details",
          "Address of business premises",
          "Mobile & Mail ID"
        ]
      }
    ]
  },
  {
    id: "shops-establishment",
    title: "Shops & Establishment",
    sections: [
      {
        title: null,
        items: [
          "Aadhaar of Proprietor",
          "PAN of Proprietor",
          "Registered office proof (Rental agreement + Electricity bill)",
          "Employee details",
          "Telugu Name Board"
        ]
      }
    ]
  },
  {
    id: "dsc-digital-signature",
    title: "DSC (Digital Signature Certificate)",
    sections: [
      {
        title: null,
        items: [
          "PAN",
          "Aadhaar",
          "Photo",
          "Mobile & Email"
        ]
      }
    ]
  },
  {
    id: "pf-esi-registration",
    title: "PF & ESI Registration",
    sections: [
      {
        title: null,
        items: [
          "PAN & Aadhaar of proprietor",
          "Business address proof (Rental agreement + Electricity bill)",
          "GST Certificate (if applicable)",
          "Employee list (Name, Gender & Salary)",
          "Date of crossing threshold (20 employees for PF & 10 employees for ESI)"
        ]
      }
    ]
  }
];

export default function ProprietorPage() {
  const [activeId, setActiveId] = useState(topics[0].id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && topics.some((t) => t.id === hash)) {
        setActiveId(hash);
      }
    };
    // Check initial hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeTopic = topics.find((t) => t.id === activeId) || topics[0];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HEADER */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Proprietor"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proprietor / Individual
          </h1>
          <p className="text-lg text-gray-200">
            Documentation checklists for individual business registrations and compliance.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">
          {/* SIDEBAR */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveId(topic.id);
                  window.location.hash = topic.id;
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`shrink-0 md:w-full text-left px-5 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium transition ${activeId === topic.id && isMounted
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {topic.title}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12 min-h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 pb-6 border-b border-gray-100">
                {isMounted ? activeTopic.title : topics[0].title}
              </h2>

              <div className="space-y-12">
                {(isMounted ? activeTopic.sections : topics[0].sections).map(
                  (sec, idx) => (
                    <div key={idx}>
                      {sec.title && (
                        <h3 className="text-xl font-semibold text-primary mb-5">
                          {sec.title}
                        </h3>
                      )}
                      {sec.items && sec.items.length > 0 && (
                        <ul className="grid lg:grid-cols-2 gap-y-4 gap-x-12 text-gray-700">
                          {sec.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <span className="text-primary font-bold mt-1.5 text-lg leading-none">
                                •
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}