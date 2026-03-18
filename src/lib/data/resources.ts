export type ResourceItem =
  | string
  | {
      title: string;
      subItems: string[];
    };

export type ResourceSection = {
  title: string | null;
  subtitle?: string;
  items: ResourceItem[];
};

export type ResourceTopic = {
  id: string;
  title: string;
  sections: ResourceSection[];
};

export type ResourceCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  topics: ResourceTopic[];
};

export const resourcesData: Record<string, ResourceCategory> = {
  proprietor: {
    id: "proprietor",
    title: "Proprietor / Individual",
    description: "Documentation checklists for individual business registrations and compliance.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    topics: [
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
    ]
  },
  "private-limited": {
    id: "private-limited",
    title: "Private Limited Company",
    description: "Incorporation and compliance documentation checklists.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    topics: [
  {
    id: "incorporation",
    title: "Incorporation",
    sections: [
      {
        title: "Company Information",
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
          "PAN, Aadhaar & Passport (Mandatory for Foreign Nationals)",
          "Existing DIN (if already allotted)",
          "Residential Address",
          "Address Proof (Bank Statement, Electricity Bill, Telephone / Mobile Bill)",
          "Duration of Stay at Present Address",
          "Educational Qualification",
          {
            title: "Details of other entities in which Director has interest:",
            subItems: [
              "CIN / LLPIN / FCRN / Registration Numbers",
              "Percentage of Shareholding",
              "Amount Invested"
            ]
          }
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
    ]
  },
  "llp": {
    id: "llp",
    title: "LLP (Limited Liability Partnership)",
    description: "Incorporation and compliance documentation checklist.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    topics: [
      {
        id: "llp-incorporation",
        title: "LLP Incorporation",
        sections: [
          {
            title: "LLP Information",
            items: [
              "Proposed LLP name",
              "Partner PAN & Aadhaar",
              "Registered office proof (Rental agreement + Electricity bill)",
              "Capital contribution details",
              "LLP Mobile number & Mail ID"
            ]
          },
          {
            title: "Designated Partner Documents",
            items: [
              "PAN",
              "Aadhaar",
              "DIN (If already available)",
              "Address proof (Bank Statement) – If No existing DIN",
              "Passport (if foreign national)"
            ]
          }
        ]
      },
      {
        id: "gst-registration",
        title: "GST Registration – LLP",
        sections: [
          {
            title: null,
            items: [
              "LLP incorporation Certificate",
              "LLP Agreement",
              "PAN of LLP",
              "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
              "Registered office proof (Rental agreement + Electricity bill)"
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
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Address proof of business premises (Rental agreement + Electricity bill)",
              "Total space in square feet",
              "Business activity details",
              "Mobile & Email of LLP",
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
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
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
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
              "Business activity details",
              "Address of business premises",
              "Mobile & Mail ID of LLP"
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
              "Certificate of Incorporation, PAN, LLP Agreement",
              "Partners KYC, Mobile Number, Mail ID",
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
      }
    ]
  },
  "partnership": {
    id: "partnership",
    title: "Partnership Firm",
    description: "Registration and compliance documentation checklist.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    topics: [
      {
        id: "firm-registration",
        title: "Firm Registration (Registrar of Firms)",
        sections: [
          {
            title: null,
            items: [
              "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
              "Registered office proof (Rental agreement + Electricity bill)",
              "Profit Sharing Ratio’s",
              "Managing Partner and Remuneration details",
              "Any other clauses required to add in deed"
            ]
          }
        ]
      },
      {
        id: "gst-registration",
        title: "GST Registration – Partnership",
        sections: [
          {
            title: null,
            items: [
              "Partnership deed",
              "PAN of Firm",
              "Partner KYC, Mobile Number, Mail ID & Passport Size Photo",
              "Registered office proof (Rental agreement + Electricity bill)"
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
              "Partnership Deed, PAN",
              "Partners KYC, Mobile Number, Mail ID",
              "Address proof of business premises (Rental agreement + Electricity bill)",
              "Total space in square feet",
              "Business activity details",
              "Mobile & Email of Firm",
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
              "Partnership Deed, PAN",
              "Partners KYC, Mobile Number, Mail ID",
              "Bank proof (Cancelled Cheque)",
              "Employee details (if applicable)",
              "GST Certificate (if registered)"
            ]
          }
        ]
      },
      {
        id: "msme-registration",
        title: "MSME Registration",
        sections: [
          {
            title: null,
            items: [
              "PAN of Firm",
              "Aadhaar of managing partner",
              "Investment & turnover details",
              "Bank Account details of the firm"
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
              "Partnership deed",
              "PAN of Firm",
              "Registered office proof (Rental agreement + Electricity bill)",
              "Employee details",
              "Telugu Name Board",
              "Partner KYC, Mobile Number, Mail ID"
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
    ]
  }
};
