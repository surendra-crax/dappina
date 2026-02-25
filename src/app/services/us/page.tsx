import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { FileText, Calculator, Users, Clock, Lock, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function USTaxPracticePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop"
                        alt="U.S. Tax Services"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeUp className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">U.S. Outsourcing Services</h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Reliable, secure, and time-zone aligned back-office support for U.S. CPA firms and businesses.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-10 mb-20">
                        <FadeUp>
                            <h2 className="text-3xl font-bold text-primary mb-6">Why Outsource to Us?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We empower U.S.-based CPAs and firms to scale efficiently by handling labor-intensive accounting, tax preparation, and compliance tasks securely from India. Our processes are rigorous, tested, and rely heavily on comprehensive review checklists to ensure zero defect delivery.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <Clock className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Time-Zone Aligned Delivery</h4>
                                        <p className="text-sm text-gray-600">Faster turnaround cycles maximizing productivity.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <Lock className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Secure Data Handling</h4>
                                        <p className="text-sm text-gray-600">Strict IT protocols and absolute confidentiality.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                                    <ShieldCheck className="w-8 h-8 text-secondary mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Structured Review Systems</h4>
                                        <p className="text-sm text-gray-600">Multi-layer checks for absolute accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2} className="bg-primary text-white p-8 md:p-12 rounded-sm shadow-lg flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Users className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Software Proficiency</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Our team is extensively trained and experienced in major U.S. accounting and tax platforms. Seamless integration into your existing tech stack.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["QuickBooks Online", "QuickBooks Desktop", "Xero", "Wave", "Drake Software", "ProConnect", "Lacerte"].map((software, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
                                            {software}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Link href="/contact" className="inline-block bg-secondary text-white px-8 py-3 rounded-sm font-bold shadow-md hover:bg-opacity-90 transition-colors">
                                        Partner With Us
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {/* Tax Prep */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <FileText className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Return Preparation</h3>
                            <ul className="space-y-3 flex-grow">
                                {["Form 1040 (Individuals)", "Form 1065 (Partnerships)", "Form 1120 (C-Corps)", "Form 1120S (S-Corps)"].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Accounting */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <Calculator className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Accounting & Bookkeeping</h3>
                            <ul className="space-y-3 flex-grow">
                                {[
                                    "General Ledger Maintenance",
                                    "Bank & Credit Card Reconciliation",
                                    "Payroll Processing Support",
                                    "Financial Statements Preparation",
                                    "Year-end Closing Support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>

                        {/* Specialized Support */}
                        <StaggerItem className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary transition-colors">
                            <Users className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Support</h3>
                            <ul className="space-y-3 flex-grow">
                                {[
                                    "IRS Notice Handling",
                                    "Voluntary Disclosures",
                                    "NRI U.S. Tax Filings",
                                    "Dedicated CPA Support Model"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3" /> {item}
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
