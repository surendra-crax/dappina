import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Monitor, Coffee, Factory, TrendingUp, Briefcase, Zap, Bus, Building2 } from "lucide-react";

const industries = [
    {
        name: "IT & Software Services",
        icon: Monitor,
        description: "Navigating complex cross-border tech transactions and IT/ITES export compliance securely."
    },
    {
        name: "Food & Hospitality",
        icon: Coffee,
        description: "Streamlining working capital management, FSSAI compliance, and multi-state GST challenges."
    },
    {
        name: "Manufacturing",
        icon: Factory,
        description: "Cost audits, inventory valuations, and factory compliances for scalable operations."
    },
    {
        name: "Trading & Distribution",
        icon: TrendingUp,
        description: "Optimizing supply chain taxation, TDS on purchases, and rapid book reconciliation."
    },
    {
        name: "Consulting & Professional Services",
        icon: Briefcase,
        description: "Ensuring regulatory integrity, professional tax compliance, and smart structuring for individuals and firms."
    },
    {
        name: "Startups & E-commerce",
        icon: Zap,
        description: "Valuations, funding compliance (FEMA), scalable accounting setups, and virtual CFO services."
    },
    {
        name: "Shipping & Logistics",
        icon: Bus,
        description: "Managing specific tax challenges, freight bill audits, and cross-border payment compliances."
    },
    {
        name: "Real Estate & Construction",
        icon: Building2,
        description: "RERA audits, project accounting, joint development tax mapping, and contract cost optimizations."
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries Served</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            We bring sector-specific insights to navigate complex regulatory landscapes.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <StaggerItem key={index} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-all group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <industry.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{industry.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
