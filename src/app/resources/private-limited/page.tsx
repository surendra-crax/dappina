"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const topics = [
  {
    id: "incorporation",
    title: "Incorporation",
    sections: [
      {
        title: "Incorporation – Company Information",
        items: [
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
        title: "Directors’ Details",
        subtitle: "For each proposed Director provide:",
        items: [
          "Occupation",
          "Email ID (Personal)",
          "Mobile Number (Personal)",
          "Recent passport-size photograph",
          "Existing DIN (if already allotted)",
          "Residential Address",
          "Duration of Stay at Present Address",
          "Educational Qualification",
          "CIN / LLPIN / FCRN / Registration numbers of other entities",
          "Percentage of Shareholding",
          "Amount Invested"
        ]
      },
      {
        title: "Identity Proof (Mandatory)",
        items: [
          "PAN Card (Self-attested)",
          "Aadhaar Card (Self-attested)",
          "Passport (Mandatory for Foreign Nationals)"
        ]
      },
      {
        title: "Address Proof (Not older than 2 months)",
        subtitle: "Only when director doesn’t have valid DIN",
        items: [
          "Bank Statement",
          "Electricity Bill",
          "Telephone / Mobile Bill"
        ]
      },
      {
        title: "Registered Office Proof",
        items: [
          "Ownership document (if self-owned property)",
          "OR Rent Agreement + NOC from Owner",
          "Utility Bill (not older than 2 months)"
        ]
      }
    ]
  },
  {
    id: "gst-registration",
    title: "GST Registration – Company",
    sections: [
      {
        title: null,
        items: [
          "PAN of Company",
          "Certificate of Incorporation",
          "MOA / AOA",
          "Board Resolution",
          "Director KYC, Mobile Number, Mail ID & Passport Size Photo",
          "Registered office proof (Rental agreement + Electricity bill)"
        ]
      }
    ]
  },
  {
    id: "fema-fdi-reporting",
    title: "FEMA / FDI Reporting",
    sections: [
      {
        title: "If foreign investment involved",
        items: [
          "FIRC",
          "KYC of foreign remitter",
          "Board Resolution",
          "Valuation Certificate (CA / Registered Valuer)",
          "FC-GPR filing details"
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
          "Certificate of Incorporation, PAN, MOA & AOA of the company",
          "Director KYC, Mobile Number, Mail ID",
          "Address proof of business premises (Rental agreement + Electricity bill)",
          "Total space in square feet",
          "Business activity details",
          "Mobile & Email of Company",
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
          "Certificate of Incorporation, PAN, MOA & AOA of the company",
          "Director KYC, Mobile Number, Mail ID",
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
          "Certificate of Incorporation, PAN, MOA & AOA of the company",
          "Director KYC, Mobile Number, Mail ID",
          "Business activity details",
          "Address of business premises",
          "Mobile & Mail ID of the company"
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
          "Certificate of Incorporation, PAN",
          "Director KYC, Mobile Number, Mail ID",
          "Registered office proof (Rental agreement + Electricity bill)",
          "Employee details",
          "Telugu Name Board",
          "Nature of Business"
        ]
      }
    ]
  },
  {
    id: "pf-epfo-esi-registration",
    title: "PF (EPFO) & ESI Registration",
    sections: [
      {
        title: null,
        items: [
          "Certificate of Incorporation",
          "PAN of Company",
          "Registered Office Address (Rental agreement + Electricity bill)",
          "Email ID & Mobile Number",
          "Director KYC, Mobile Number, Mail ID",
          "Employee list (Name, Gender & Salary)",
          "Date of crossing threshold (20 employees for PF & 10 employees for ESI)",
          "Cancelled Cheque"
        ]
      }
    ]
  },
  {
    id: "clra-contractor-license",
    title: "CLRA – Contractor License (Company Documents)",
    sections: [
      {
        title: "Company Documents",
        items: [
          "Certificate of Incorporation",
          "PAN of Company",
          "MOA & AOA",
          "S&E Certificate of the company"
        ]
      },
      {
        title: "Principal Employer Documents",
        items: [
          "Copy of CLRA Registration Certificate (Form II)",
          "Form V (Certificate issued by Principal Employer)",
          "Work Order / Contract Agreement"
        ]
      },
      {
        title: "Establishment & Contract Details",
        items: [
          "Address of Work Location",
          "Nature of Work / Scope of Contract",
          "Duration of Contract",
          "Maximum number of contract labour proposed"
        ]
      },
      {
        title: "Directors / Authorized Signatory Details",
        items: [
          "PAN & Aadhaar",
          "Address Proof",
          "Mobile Number & Email ID"
        ]
      },
      {
        title: "Employee / Labour Details",
        items: [
          "Proposed number of contract labour",
          "List of employees"
        ]
      }
    ]
  }
];

export default function PrivateLimitedPage() {
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Private Limited Company"
            fill
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Private Limited Company
          </h1>
          <p className="text-lg text-gray-200">
            Incorporation and compliance documentation checklists.
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
                      {(sec as any).subtitle && (
                        <p className="text-gray-600 mb-4 font-medium">{(sec as any).subtitle}</p>
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