import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Download, FileText } from "lucide-react";
import Image from "next/image";

const resources = [
    {
        title: "PAN / TAN Applications",
        type: "PDF Checklist",
        size: "124 KB"
    },
    {
        title: "Company & LLP Incorporation",
        type: "Document Checklist",
        size: "210 KB"
    },
    {
        title: "GST Registration",
        type: "Compliance Guide",
        size: "185 KB"
    },
    {
        title: "PF / ESI Compliance",
        type: "Documentation List",
        size: "150 KB"
    },
    {
        title: "DSC Documentation",
        type: "Application Requirements",
        size: "95 KB"
    }
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
                        alt="Client Resources"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/95"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Client Resources</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
                            Downloadable checklists and guides for standard compliance procedures.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <FadeUp className="mb-12 text-center">
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-5 rounded-sm inline-block shadow-sm">
                            <span className="font-bold">Note:</span> Files are periodically updated as per the latest MCA, GST & Income Tax regulations. Last updated: October 2023.
                        </div>
                    </FadeUp>

                    <StaggerContainer className="space-y-4">
                        {resources.map((res, index) => (
                            <StaggerItem key={index} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex flex-col sm:flex-row sm:items-center justify-between group hover:border-primary hover:shadow-md transition-all">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                                        <FileText className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">{res.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{res.type} • {res.size}</p>
                                    </div>
                                </div>
                                <button className="flex justify-center items-center text-primary font-semibold border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-sm transition-all sm:w-auto w-full">
                                    <Download className="w-4 h-4 mr-2" /> Download
                                </button>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
