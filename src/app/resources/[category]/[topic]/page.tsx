import { notFound } from "next/navigation";
import Image from "next/image";
import { Download } from "lucide-react";
import { resourcesData } from "@/lib/data/resources";
import { FadeUp } from "@/components/ui/animations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{
    category: string;
    topic: string;
  }>;
};

// Generate static routes at build time
export async function generateStaticParams() {
  const paths: { category: string; topic: string }[] = [];

  Object.values(resourcesData).forEach((category) => {
    category.topics.forEach((topic) => {
      paths.push({ category: category.id, topic: topic.id });
    });
  });

  return paths;
}

export default async function TopicPage({ params }: Props) {
  const resolvedParams = await params;
  const { category, topic } = resolvedParams;

  const categoryData = resourcesData[category];
  
  if (!categoryData) {
    notFound();
  }

  const topicData = categoryData.topics.find((t) => t.id === topic);

  if (!topicData) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HEADER */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={categoryData.image}
            alt={categoryData.title}
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>

          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {topicData.title}
            </h1>
            <p className="text-lg text-gray-200">
              {categoryData.title} Checklist
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12">
            
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Document Checklist
              </h2>
              <button className="flex items-center text-sm font-medium text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition shadow-sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            <div className="space-y-12">
              {topicData.sections.map((sec, idx) => (
                <div key={idx}>
                  {sec.title && (
                    <h3 className="text-xl font-semibold text-primary mb-5">
                      {sec.title}
                    </h3>
                  )}
                  {sec.subtitle && (
                    <p className="text-gray-600 mb-4 font-medium">{sec.subtitle}</p>
                  )}
                 {sec.items.map((item, i) => {
  // Case 1: Normal string
  if (typeof item === "string") {
    return (
      <li key={i} className="flex items-start gap-4">
        <span className="text-primary font-bold mt-1.5 text-lg leading-none">
          •
        </span>
        <span className="leading-relaxed">{item}</span>
      </li>
    );
  }

  // Case 2: Nested object
  return (
    <li key={i} className="flex flex-col gap-2">
      <div className="flex items-start gap-4">
        <span className="text-primary font-bold mt-1.5 text-lg leading-none">
          •
        </span>
        <span className="leading-relaxed font-medium">{item.title}</span>
      </div>

      <ul className="ml-8 space-y-2 text-gray-600">
        {item.subItems.map((sub, j) => (
          <li key={j} className="flex items-start gap-3">
            <span className="text-gray-400 mt-1">–</span>
            <span>{sub}</span>
          </li>
        ))}
      </ul>
    </li>
  );
})}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
