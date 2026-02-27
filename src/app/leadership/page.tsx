import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { CheckCircle2, Award, BookOpen } from "lucide-react";
import Image from "next/image";

const leaders = [
    {
        name: "CA Pavan Dappina, FCA, DISA",
        role: "Managing Partner",
        description: "Fellow Member of ICAI with over 10 years of experience in audit, financial reporting, and regulatory compliance.",
        specializations: [
            "Statutory & Tax Audits",
            "Financial Statement Preparation",
            "Internal Controls & Compliance Review",
            "U.S. Accounting & Tax Return Preparation",
            "Cross-border Compliance Advisory"
        ]
    },
    {
        name: "CA Sable Pradeep, ACA",
        role: "Partner",
        description: "Associate Member of ICAI with expertise in accounting frameworks and statutory compliances.",
        specializations: [
            "Accounting & Bookkeeping Compliance",
            "GST Return Filing & Advisory",
            "GST Notices & Appeal Handling",
            "Representation before Tax Authorities"
        ]
    }
];

export default function LeadershipPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
                        alt="Leadership"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Leadership</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
                            Meet the minds driving excellence and compliance at Dappina & Co.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="space-y-12">
                        {leaders.map((leader, index) => (
                            <StaggerItem key={index} className="bg-white p-8 md:p-12 rounded-sm shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8 lg:gap-12 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10"></div>

                                {/* Profile Avatar Image */}
                                <div className="md:w-1/3 flex flex-col items-center text-center relative z-10">
                                    <h2 className="text-2xl font-bold text-primary mb-1">{leader.name}</h2>
                                    <p className="text-secondary font-semibold text-lg">{leader.role}</p>
                                </div>

                                {/* Profile Details */}
                                <div className="md:w-2/3 relative z-10">
                                    <div className="mb-8 bg-gray-50 p-6 rounded-sm border border-gray-100">
                                        <h3 className="flex items-center text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4">
                                            <BookOpen className="w-5 h-5 mr-3 text-accent" /> Profile Overview
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">{leader.description}</p>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
                                            <Award className="w-5 h-5 mr-3 text-accent" /> Core Specializations
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {leader.specializations.map((spec, specIndex) => (
                                                <li key={specIndex} className="flex items-start text-sm text-gray-700 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mr-3 mt-0.5" />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
