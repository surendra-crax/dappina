import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { ShieldCheck, BookOpen, Settings, CheckCircle } from "lucide-react";
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
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Indian Practice</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
                            End-to-end audit, taxation, and advisory services ensuring full compliance with Indian regulatory frameworks.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid lg:grid-cols-3 gap-8">

                        {/* Auditing & Assurance */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-secondary mr-4" />
                                <h3 className="text-2xl font-bold text-primary">Accounting & Audit</h3>
                            </div>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Statutory Audit",
                                    "Tax Audit (Income Tax Act)",
                                    "Internal Audit",
                                    "Transfer Pricing Audit",
                                    "GST Audit",
                                    "Stock & Revenue Audit",
                                    "Management & Forensic Audit",
                                    "Government Audits"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mr-3 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Taxation */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <BookOpen className="w-8 h-8 text-secondary mr-4" />
                                <h3 className="text-2xl font-bold text-primary">Taxation & Compliance</h3>
                            </div>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Income Tax Return Filing",
                                    "TDS Compliance",
                                    "GST Registration & Returns",
                                    "Professional Tax",
                                    "PF & ESI Registrations",
                                    "FEMA & RBI Compliances",
                                    "RERA Certifications",
                                    "Companies Act, 2013 Compliance",
                                    "Labour Codes Navigation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mr-3 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Business Setup */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <Settings className="w-8 h-8 text-secondary mr-4" />
                                <h3 className="text-2xl font-bold text-primary">Setup & Advisory</h3>
                            </div>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Private Limited Company",
                                    "LLP Registration",
                                    "Partnership / Proprietorship",
                                    "Trusts & Societies",
                                    "HUF Formation",
                                    "FSSAI Registration",
                                    "MSME / Udyam",
                                    "PAN / TAN / DSC Assistance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mr-3 mt-0.5" />
                                        {item}
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
