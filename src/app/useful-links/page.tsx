"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Building2, Landmark, Briefcase, FileSignature, FileText, BadgePercent } from "lucide-react";
import { FadeUp } from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const linkCategories = [
    {
        title: "Taxation & Finance",
        icon: <BadgePercent className="w-6 h-6 text-primary" />,
        color: "bg-blue-50/50",
        links: [
            {
                name: "Income Tax e-Filing",
                description: "Official portal for filing Income Tax Returns, linking Aadhaar-PAN, and checking refund status.",
                href: "https://eportal.incometax.gov.in/iec/foservices/#/login"
            },
            {
                name: "GST Portal",
                description: "Goods and Services Tax portal for registration, return filing, and payments.",
                href: "https://www.gst.gov.in/"
            },
            {
                name: "GST E-Way Bill System",
                description: "Generate E-Way Bills for the movement of goods.",
                href: "https://ewaybillgst.gov.in/"
            },
            {
                name: "TDS / TRACES",
                description: "TDS Reconciliation Analysis and Correction Enabling System.",
                href: "https://www.tdscpc.gov.in/app/login.xhtml"
            }
        ]
    },
    {
        title: "Corporate Compliance",
        icon: <Building2 className="w-6 h-6 text-primary" />,
        color: "bg-amber-50/50",
        links: [
            {
                name: "Ministry of Corporate Affairs (MCA)",
                description: "Portal for company/LLP incorporation, director DIN filing, and annual statutory filings.",
                href: "https://www.mca.gov.in/content/mca/global/en/home.html"
            },
            {
                name: "Udyam Registration (MSME)",
                description: "Official Ministry of MSME portal for new enterprise registration.",
                href: "https://udyamregistration.gov.in/"
            },
            {
                name: "Startup India",
                description: "Government of India initiative to promote startups and claim DPIIT recognition.",
                href: "https://www.startupindia.gov.in/"
            }
        ]
    },
    {
        title: "Labour & Employment",
        icon: <Briefcase className="w-6 h-6 text-primary" />,
        color: "bg-emerald-50/50",
        links: [
            {
                name: "EPFO Portal",
                description: "Employees' Provident Fund Organisation - Member / Employer Portal.",
                href: "https://www.epfindia.gov.in/"
            },
            {
                name: "ESIC Portal",
                description: "Employees' State Insurance Corporation login Portal.",
                href: "https://www.esic.in/"
            },
            {
                name: "Shram Suvidha",
                description: "Unified web portal for Labour & Employment regulatory compliance.",
                href: "https://shramsuvidha.gov.in/home"
            }
        ]
    },
    {
        title: "Intellectual Property & Licensing",
        icon: <FileSignature className="w-6 h-6 text-primary" />,
        color: "bg-purple-50/50",
        links: [
            {
                name: "IP India (Trademarks/Patents)",
                description: "Intellectual Property India portal for Trademark and Patent registrations.",
                href: "https://ipindia.gov.in/"
            },
            {
                name: "DGFT",
                description: "Directorate General of Foreign Trade - IEC Registration.",
                href: "https://www.dgft.gov.in/CP/"
            },
            {
                name: "FSSAI",
                description: "Food Safety and Standards Authority of India licensing portal.",
                href: "https://foscos.fssai.gov.in/"
            }
        ]
    }
];

export default function UsefulLinksPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                        alt="Important Government Links"
                        fill
                        className="object-cover opacity-30 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            Useful <span className="text-accent">Links</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                            Quick access to essential Indian Government portals for taxation, corporate compliance, and regulatory registrations.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* LINKS DIRECTORY SECTION */}
            <section className="py-20 lg:py-28 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-16">
                        {linkCategories.map((category, idx) => (
                            <FadeUp key={idx} delay={idx * 0.1}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {category.title}
                                    </h2>
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.links.map((link, linkIdx) => (
                                        <a
                                            key={linkIdx}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "group flex flex-col p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300",
                                                "hover:shadow-lg hover:border-primary/20",
                                                "bg-white"
                                            )}
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors pr-4">
                                                    {link.name}
                                                </h3>
                                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                                                {link.description}
                                            </p>

                                            <div className="mt-auto flex items-center text-sm font-medium text-primary bg-primary/5 w-fit px-3 py-1.5 rounded-full group-hover:bg-primary/10 transition-colors">
                                                Visit Portal
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
