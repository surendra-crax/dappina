import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, FileText, CheckCircle, TrendingUp, ShieldCheck, UserCheck } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/ui/animations";
import Image from "next/image";
export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden flex items-center justify-center min-h-[85vh] bg-[#0A2A4A]">
                {/* Background Pattern and Image */}
                <div className="absolute inset-0 z-0 bg-[#0A2A4A]">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Corporate Background"
                        fill
                        className="object-cover opacity-5 mix-blend-luminosity grayscale"
                        priority
                    />
                    {/* Dark gradient overlays so the white text pops seamlessly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A] via-[#0A2A4A]/90 to-[#0A2A4A]/70"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#134c80_1px,transparent_1px),linear-gradient(to_bottom,#134c80_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    <div className="max-w-4xl">
                        <FadeUp>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white mt-10">
                                India & U.S. <br />
                                <span className="text-secondary drop-shadow-md">Compliance.</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <p className="text-xl md:text-2xl font-semibold mb-6 text-accent drop-shadow-md">
                                Audit | Taxation | FEMA | Outsourcing Services
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Comprehensive Accounting, Taxation, Regulatory & Outsourcing Services for Individuals, Businesses & Global Clients.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.3} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
                            <Link href="/contact" className="bg-secondary text-white px-8 py-4 rounded-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg text-center flex items-center justify-center group text-lg w-full sm:w-auto">
                                Request Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/resources" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/20 transition-all text-center text-lg w-full sm:w-auto">
                                Download Firm Profile
                            </Link>
                        </FadeUp>

                        <StaggerContainer delay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/20">
                            {[
                                { label: "Years Experience", value: 10, suffix: "+" },
                                { label: "Professionals", value: 15, suffix: "+" },
                                { label: "Expertise", value: "India & U.S.", suffix: "" },
                                { label: "Handling", value: "Confidential", suffix: "" },
                            ].map((stat, i) => (
                                <StaggerItem key={i}>
                                    <div className="font-bold text-3xl md:text-4xl mb-2 text-accent flex items-center justify-center drop-shadow-md">
                                        {typeof stat.value === "number" ? <AnimatedCounter end={stat.value} /> : stat.value}
                                        {stat.suffix}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* ABOUT SNAPSHOT */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeUp>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                <Image src="/images/CA logo.png" alt="CA Logo" width={80} height={80} className="object-contain" unoptimized />
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">Built on Integrity. <br />Driven by Precision.</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Dappina & Co. is a Hyderabad-based Chartered Accountancy firm delivering end-to-end accounting, taxation, audit, and regulatory compliance services across India and the United States.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                With over a decade of professional expertise, we support startups, SMEs, corporates, NRIs, and U.S.-based CPAs with reliable and structured financial solutions.
                            </p>
                            <div className="relative h-64 w-full rounded-sm overflow-hidden shadow-sm">
                                <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Professional Consulting" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="bg-sectionBg p-8 rounded-sm lg:ml-auto w-full border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-4">Our Value Pillars</h3>
                            <ul className="space-y-5">
                                {[
                                    { title: "Timely Compliance", description: "Meeting all statutory deadlines without fail." },
                                    { title: "Risk Mitigation", description: "Identifying and resolving vulnerabilities proactively." },
                                    { title: "Regulatory Alignment", description: "Staying ahead of changing tax laws." },
                                    { title: "Scalable Financial Systems", description: "Building processes that grow with your business." },
                                ].map((pillar, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{pillar.title}</h4>
                                            <p className="text-sm text-gray-600 mt-1">{pillar.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <Link href="/about" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center group">
                                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* SERVICES OVERVIEW */}
            <section className="py-20 lg:py-28 bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Competencies</h2>
                        <p className="text-lg text-gray-600">
                            Specialized financial and regulatory services tailored for domestic markets and cross-border operations.
                        </p>
                    </FadeUp>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Indian Practice */}
                        <FadeUp delay={0.1} className="bg-white rounded-sm shadow-sm border border-gray-100 h-full flex flex-col group hover:shadow-md transition-shadow overflow-hidden">
                            <div className="relative h-48 w-full border-b border-gray-100">
                                <Image src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop" alt="Indian Practice" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center mb-6">
                                    <span className="text-4xl mr-4">🇮🇳</span>
                                    <h3 className="text-2xl font-bold text-primary">Indian Practice</h3>
                                </div>
                                <p className="text-gray-600 mb-8 flex-grow">
                                    Comprehensive audit, taxation, and advisory services ensuring full compliance with Indian regulatory frameworks including Income Tax, GST, and MCA.
                                </p>
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" /> Audit & Assurance
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" /> Taxation & Regulatory
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" /> Business Setup & Advisory
                                    </div>
                                </div>
                                <Link href="/services/india" className="bg-primary/5 text-primary w-full py-3 rounded-sm font-semibold hover:bg-primary hover:text-white transition-colors text-center mt-auto">
                                    View Indian Practice →
                                </Link>
                            </div>
                        </FadeUp>

                        {/* US Outsourcing */}
                        {/* US Outsourcing */}
                        <FadeUp delay={0.2} className="bg-white rounded-sm shadow-sm border border-gray-100 h-full flex flex-col group hover:shadow-md transition-shadow overflow-hidden">
                            <div className="relative h-48 w-full border-b border-gray-100">
                                <Image src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop" alt="U.S. Outsourcing" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center mb-6">
                                    <span className="text-4xl mr-4">🇺🇸</span>
                                    <h3 className="text-2xl font-bold text-primary">U.S. Outsourcing Services</h3>
                                </div>
                                <p className="text-gray-600 mb-8 flex-grow">
                                    Reliable back-office support for U.S. CPA firms and businesses, featuring secure data handling and time-zone aligned delivery.
                                </p>
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" /> Tax Return Preparation (1040, 1120, etc.)
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" /> Accounting & Bookkeeping
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" /> specialized CPA Support
                                    </div>
                                </div>
                                <Link href="/services/us" className="bg-primary/5 text-primary w-full py-3 rounded-sm font-semibold hover:bg-primary hover:text-white transition-colors text-center mt-auto">
                                    View U.S. Services →
                                </Link>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative py-20 lg:py-28 text-white overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Why Choose Us"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <FadeUp>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dappina & Co.</h2>
                            <p className="text-lg text-gray-300">
                                A partner-led approach ensuring technical excellence and uncompromising ethics.
                            </p>
                        </FadeUp>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "10+ Years Experience", icon: TrendingUp },
                            { title: "India & U.S. Expertise", icon: Globe },
                            { title: "Strong Regulatory Grasp", icon: FileText },
                            { title: "Client-Focused Advisory", icon: UserCheck },
                            { title: "Scalable Solutions", icon: CheckCircle },
                            { title: "Transparent & Ethical", icon: ShieldCheck },
                        ].map((feature, i) => (
                            <StaggerItem key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">Delivering structured review mechanisms under expert partner supervision.</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* INDUSTRIES SNAPSHOT */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
                        <FadeUp className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries Served</h2>
                            <p className="text-lg text-gray-600">
                                We bring sector-specific insights to navigate complex regulatory landscapes.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <Link href="/industries" className="inline-flex items-center font-semibold text-primary border-b-2 border-primary hover:text-secondary hover:border-secondary transition-colors pb-1">
                                View All Industries <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </FadeUp>
                    </div>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "IT & Software", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
                            { name: "Food & Hospitality", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" },
                            { name: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
                            { name: "Trading & Dist.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop" },
                            { name: "Prof. Services", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" },
                            { name: "Startups", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
                            { name: "Shipping", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop" },
                            { name: "Real Estate", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
                        ].map((industry, i) => (
                            <StaggerItem key={i} className="group relative h-40 md:h-48 rounded-sm overflow-hidden flex items-end shadow-sm">
                                <Image src={industry.img} alt={industry.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <h3 className="relative z-10 text-white font-semibold text-sm md:text-base p-4 w-full text-center">
                                    {industry.name}
                                </h3>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-sectionBg border-t border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Let’s Strengthen Your Compliance Framework</h2>
                        <p className="text-xl text-gray-600 mb-10">
                            Partner with a firm that prioritizes your financial integrity and growth.
                        </p>
                        <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20">
                            Schedule Consultation
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
