import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { FileText, Calculator, Users, Clock, Lock, ShieldCheck, CheckCircle, BookOpen, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function IndianPracticePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop"
                        alt="Indian Practice Services"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeUp className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Indian Practice</h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            End-to-end audit, taxation, and advisory services ensuring full compliance with Indian regulatory frameworks.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-10 mb-20">
                        <FadeUp>
                            <h2 className="text-3xl font-bold text-primary mb-6">Why Partner With Us?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We provide comprehensive financial and regulatory solutions tailored to the Indian business landscape. Our team of experienced professionals ensures that your business remains compliant while optimizing for growth and efficiency.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <Clock className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Timely Compliance</h4>
                                        <p className="text-sm text-gray-600">Strict adherence to statutory deadlines and filing cycles.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <Lock className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Data Integrity & Privacy</h4>
                                        <p className="text-sm text-gray-600">Secure handling of sensitive financial information.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <ShieldCheck className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Expert Advisory</h4>
                                        <p className="text-sm text-gray-600">Strategic insights from seasoned Chartered Accountants.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2} className="bg-primary text-white p-8 md:p-12 rounded-sm shadow-lg flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Users className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    We leverage modern accounting and ERP systems to deliver accurate and real-time financial reporting for our clients.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Tally Prime", "SAP", "Oracle", "Zoho Books", "Microsoft Dynamics", "QuickBooks India"].map((software, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
                                            {software}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Link href="/contact" className="inline-block bg-secondary text-white px-8 py-3 rounded-sm font-bold shadow-md hover:bg-opacity-90 transition-colors">
                                        Connect With Us
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8">

                        {/* Accounting & Assurance */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <Calculator className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Accounting & Assurance</h3>
                            <ul className="space-y-3 flex-grow">
                                {[
                                    "Accounting & Bookkeeping Services",
                                    "Financial Statement Preparation",
                                    "Statutory Audit",
                                    "Tax Audit (Income Tax Act)",
                                    "Internal Audit",
                                    "GST Audit",
                                    "Transfer Pricing Audit",
                                    "Concurrent Audit",
                                    "Stock & Revenue Audit",
                                    "Management & Forensic Audit",
                                    "Due Diligence (Financial & Tax)",
                                    "Business Valuation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Taxation Services */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <FileText className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Taxation Services</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-wider">Direct Tax</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Income Tax Return Filing",
                                            "Corporate Tax Advisory",
                                            "Tax Planning & Structuring",
                                            "Tax Assessments & Notices Handling",
                                            "Representation before Income Tax Authorities",
                                            "Appeals before CIT(A) / ITAT"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                                <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-wider">Indirect Tax (GST)</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "GST Registration",
                                            "GST Returns Filing",
                                            "GST Advisory",
                                            "GST Refund Processing",
                                            "GST Annual Returns (GSTR-9 / 9C)",
                                            "GST Litigation & Department Representation"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                                <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2">
                                        {[
                                            "TDS Compliance & Returns",
                                            "Professional Tax Registration & Returns"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                                <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Corporate & Regulatory Compliance */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate & Regulatory Compliance</h3>
                            <ul className="space-y-3 flex-grow">
                                {[
                                    "Private Limited Company Incorporation",
                                    "LLP Registration",
                                    "Partnership Firm Registration",
                                    "Proprietorship Setup",
                                    "ROC Compliance (AOC-4, MGT-7 etc.)",
                                    "Director KYC & DIN Services",
                                    "Share Allotment & PAS Filings",
                                    "Corporate Restructuring Advisory",
                                    "FEMA & RBI Compliances",
                                    "PF & ESI Registrations",
                                    "Labour Law Compliance",
                                    "RERA Certifications",
                                    "Startup India Registration",
                                    "MSME / Udyam Registration",
                                    "FSSAI Registration",
                                    "Trust & Society Registration",
                                    "HUF Formation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Business Advisory & Financial Services */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <Users className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Advisory & Financial Services</h3>
                            <ul className="space-y-3 flex-grow">
                                {[
                                    "Virtual CFO Services",
                                    "MIS & Financial Reporting",
                                    "Budgeting & Forecasting",
                                    "Financial Modelling",
                                    "Project Reports & CMA Data for Bank Loans",
                                    "Startup Advisory & Business Structuring",
                                    "Business Performance Analysis",
                                    "Investment Structuring Advisory"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}

