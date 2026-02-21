import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Download, FileText } from "lucide-react";

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
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Resources</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Downloadable checklists and guides for standard compliance procedures.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <FadeUp className="mb-10 text-center">
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-sm inline-block shadow-sm">
                            <span className="font-semibold">Note:</span> Files are periodically updated as per the latest MCA, GST & Income Tax regulations. Last updated: October 2023.
                        </div>
                    </FadeUp>

                    <StaggerContainer className="space-y-4">
                        {resources.map((res, index) => (
                            <StaggerItem key={index} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex items-center justify-between group hover:border-primary transition-colors">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary/10 transition-colors">
                                        <FileText className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{res.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{res.type} • {res.size}</p>
                                    </div>
                                </div>
                                <button className="flex items-center text-primary font-semibold border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white px-4 py-2 rounded-sm transition-all">
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
