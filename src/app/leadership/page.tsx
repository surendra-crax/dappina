import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { CheckCircle2, User, Award, BookOpen } from "lucide-react";

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
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
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
                            <StaggerItem key={index} className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">

                                {/* Profile Avatar Placeholder */}
                                <div className="md:w-1/3 flex flex-col items-center text-center">
                                    <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">
                                        <User className="w-20 h-20 text-gray-300" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary mb-1">{leader.name}</h2>
                                    <p className="text-secondary font-semibold">{leader.role}</p>
                                </div>

                                {/* Profile Details */}
                                <div className="md:w-2/3">
                                    <div className="mb-8">
                                        <h3 className="flex items-center text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
                                            <BookOpen className="w-5 h-5 mr-3 text-accent" /> Profile Overview
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
                                            <Award className="w-5 h-5 mr-3 text-accent" /> Core Specializations
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {leader.specializations.map((spec, specIndex) => (
                                                <li key={specIndex} className="flex items-start text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mr-2 mt-0.5" />
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
