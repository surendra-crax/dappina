import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Monitor, Coffee, Factory, TrendingUp, Briefcase, Zap, Bus, Building2 } from "lucide-react";
import Image from "next/image";

const industries = [
    {
        name: "IT & Software Services",
        icon: Monitor,
        description: "Navigating complex cross-border tech transactions and IT/ITES export compliance securely.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Food & Hospitality",
        icon: Coffee,
        description: "Streamlining working capital management, FSSAI compliance, and multi-state GST challenges.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Manufacturing",
        icon: Factory,
        description: "Cost audits, inventory valuations, and factory compliances for scalable operations.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Trading & Distribution",
        icon: TrendingUp,
        description: "Optimizing supply chain taxation, TDS on purchases, and rapid book reconciliation.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Consulting & Professional Services",
        icon: Briefcase,
        description: "Ensuring regulatory integrity, professional tax compliance, and smart structuring for individuals and firms.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Startups & E-commerce",
        icon: Zap,
        description: "Valuations, funding compliance (FEMA), scalable accounting setups, and virtual CFO services.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Shipping & Logistics",
        icon: Bus,
        description: "Managing specific tax challenges, freight bill audits, and cross-border payment compliances.",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Real Estate & Construction",
        icon: Building2,
        description: "RERA audits, project accounting, joint development tax mapping, and contract cost optimizations.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Industries Served"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Industries Served</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
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
                            <StaggerItem key={index} className="bg-white rounded-sm shadow-sm border border-gray-100 hover:shadow-lg transition-all group hover:-translate-y-1 overflow-hidden flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image src={industry.image} alt={industry.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-primary">
                                        <industry.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{industry.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">{industry.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
