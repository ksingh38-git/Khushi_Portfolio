import { Briefcase, FlaskConical } from "lucide-react";

export function ExperienceSection() {
    const experiences = [
        {
            company: "University at Buffalo",
            title: "Research Assistant",
            location: "Buffalo, NY",
            dates: "Feb 2026 – Present",
            type: "Academic",
            icon: <FlaskConical className="w-5 h-5" />,
            bullets: [
                "Designed and deployed ETL pipelines to ingest and process multi-year hourly time-series datasets (8,000+ records per source) across live sensor streams and EPW climate files.",
                "Implemented schema normalization, data validation, and transformation workflows across 10+ time-series columns, storing curated datasets in Parquet format.",
                "Built hourly and day-of-year aggregation pipelines to compute climate bias and performance metrics across heterogeneous datasets."
            ]
        },

        {
            company: "Minedco Holdings, Inc.",
            title: "Data Engineering Intern (AI Software Eng)",
            location: "Remote",
            dates: "May 2025 – Aug 2025",
            type: "Internship",
            icon: <Briefcase className="w-5 h-5" />,
            bullets: [
                "Engineered a Python-based ingestion pipeline to collect and store 500+ posts per user in Azure Blob Storage via Facebook Graph API.",
                "Built a small end-to-end pipeline handling ingestion via OAuth, cleaning, and preparation for downstream LLM processing.",
                "Implemented on-demand workflows that fetch data only when triggered, preventing unnecessary API calls and reducing compute costs."
            ]
        },
        {
            company: "Deloitte US India (USI)",
            title: "Analyst – Data Engineering & Analytics",
            location: "India",
            dates: "May 2021 – Aug 2024",
            type: "Full-time",
            icon: <Briefcase className="w-5 h-5" />,
            bullets: [
                "At Deloitte, I worked on enterprise-scale financial data systems supporting daily operations and month-end reporting across large datasets.",
                "Designed and maintained SQL- and Python-based data pipelines to ingest, transform, and consolidate multi-source enterprise data into analytics-ready tables within Google BigQuery.",
                "Developed and optimized complex transformation logic within a 10,000+ line BigQuery SQL pipeline, reducing batch execution time from 6 hours to 25 minutes through query refactoring and performance tuning.",
                "Executed a large-scale on-prem to cloud migration (Incorta to cloud), performing schema alignment, data reconciliation, and validation across 85+ dashboards and analytical assets.",
                "Contributed to the Enterprise Data Hub (EDH) by building analytical views and maintaining structured data models to enable downstream reporting and business analytics.",
                "Performed production data troubleshooting, root cause analysis, and data quality validation to ensure reliability of enterprise datasets.",
                "This role strengthened my expertise in data warehousing, cloud migration, SQL optimization, and production-grade data engineering practices."
            ]
        },
        {
            company: "KPMG",
            title: "Data Analyst",
            location: "India",
            dates: "Jan 2021 – Apr 2021",
            type: "Full-time",
            icon: <Briefcase className="w-5 h-5" />,
            bullets: [
                "At KPMG, I began my career in the industry by owning structured operational data workflows for HR and IT systems.",
                "Managed structured data tracking and reporting processes across employee lifecycle workflows (Joiner–Mover–Leaver).",
                "Automated recurring data validation and reconciliation workflows using Excel (VLOOKUP) and scripting logic, reducing operational support tickets by 30%."
            ]
        }
    ];

    return (
        <section id="experience" className="bg-gray-50 py-24">
            <div className="max-w-5xl mx-auto px-6 w-full relative">
                <div className="mb-16">
                    <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 block">03. Career Path</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Experience</h2>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative">
                            <div className="md:grid md:grid-cols-[1fr_3fr] md:gap-8 items-start">

                                {/* Left side: Meta */}
                                <div className="md:text-right md:border-r md:border-gray-200 md:pr-8 md:py-2 relative">
                                    <div className="hidden md:absolute right-[-10px] top-4 w-5 h-5 bg-white border-4 border-blue-100 rounded-full group-hover:border-blue-500 transition-colors z-10" />
                                    <div className="text-gray-900 font-bold mb-1">{exp.dates}</div>
                                    <div className="text-sm font-mono text-gray-500 mb-2">{exp.location}</div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-gray-200 text-xs font-semibold text-gray-600 shadow-sm">
                                        {exp.icon}
                                        {exp.type}
                                    </div>
                                </div>

                                {/* Right side: Content */}
                                <div className="mt-4 md:mt-0 pt-2 pb-6 md:pb-0 relative">

                                    {/* Mobile timeline indicator */}
                                    <div className="md:hidden absolute left-0 top-3 w-3 h-3 bg-white border-2 border-blue-400 rounded-full" />

                                    <div className="pl-6 md:pl-0">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <h4 className="text-lg text-blue-600 font-medium mb-4">{exp.company}</h4>

                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="text-gray-600 leading-relaxed text-base flex items-start">
                                                    <span className="text-blue-300 mr-3 mt-1 text-sm font-mono">▸</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
