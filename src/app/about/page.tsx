import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
                        alt="About Us Background"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About Us</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
                            End-to-end accounting, taxation, audit, and regulatory compliance.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                        <FadeUp className="prose prose-lg prose-blue max-w-none">
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy of Excellence</h2>
                            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                                Dappina & Co. is a Hyderabad-based Chartered Accountancy firm delivering end-to-end accounting, taxation, audit, and regulatory compliance services across India and the United States.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We combine technical depth with practical business insight to ensure clients remain compliant while focusing on growth. Our practice is built on the core fundamentals of intellectual integrity, professional ethics, and a deep understanding of evolving regulatory frameworks.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.2} className="relative h-80 md:h-[400px] w-full rounded-sm overflow-hidden shadow-lg group border border-gray-100">
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our Workspace" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </FadeUp>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <FadeUp delay={0.3} className="bg-sectionBg border border-gray-100 p-8 md:p-12 rounded-sm shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-gray-200 pb-8">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Professional" fill className="object-cover" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-3">Our Team</h2>
                                    <p className="text-lg text-gray-600">
                                        A dedicated team of 15 professionals including Chartered Accountants, semi-qualified professionals, article assistants, and trained accounting staff.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-sans">We follow a multi-level review mechanism under partner supervision to ensure:</h3>

                            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "Accuracy in every deliverable",
                                    "Strict Regulatory Alignment",
                                    "Timely Delivery of services",
                                    "Absolute Confidentiality of data"
                                ].map((item, index) => (
                                    <StaggerItem key={index} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mr-3 mt-0.5" />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </div>
    );
}
