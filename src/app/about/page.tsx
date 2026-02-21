import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            End-to-end accounting, taxation, audit, and regulatory compliance.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp className="prose prose-lg prose-blue max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                            Dappina & Co. is a Hyderabad-based Chartered Accountancy firm delivering end-to-end accounting, taxation, audit, and regulatory compliance services across India and the United States.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            We combine technical depth with practical business insight to ensure clients remain compliant while focusing on growth. Our practice is built on the core fundamentals of intellectual integrity, professional ethics, and a deep understanding of evolving regulatory frameworks.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.2} className="bg-sectionBg border border-gray-100 p-8 md:p-12 rounded-sm shadow-sm">
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            A dedicated team of 15 professionals including Chartered Accountants, semi-qualified professionals, article assistants, and trained accounting staff.
                        </p>
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
            </section>
        </div>
    );
}
