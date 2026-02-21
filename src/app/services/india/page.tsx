import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { ShieldCheck, BookOpen, Settings, CheckCircle } from "lucide-react";

export default function IndianPracticePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Practice</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
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
