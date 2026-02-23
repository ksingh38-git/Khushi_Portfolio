import { Database, Code2, LineChart, Wrench } from "lucide-react";

export function SkillsSection() {
    const skillGroups = [
        {
            title: "Data engineering & databases",
            icon: <Database className="w-6 h-6 text-blue-600 mb-4" />,
            description: "Advanced SQL, ETL/ELT concepts, data warehousing, and working with cloud storage/compute (e.g., Snowflake, Azure, BigQuery) to build and maintain data pipelines using orchestration tools like Airflow.",
            tags: ["SQL", "Snowflake", "BigQuery", "Airflow", "ETL/ELT", "Data Warehousing", "Data Modeling"]
        },
        {
            title: "Programming & analytics",
            icon: <Code2 className="w-6 h-6 text-blue-600 mb-4" />,
            description: "Python for data manipulation and analysis (Pandas, basic NumPy, plotting libraries), scripting recurring workflows, and automating data cleaning and reporting tasks.",
            tags: ["Python", "Pandas", "NumPy", "Automation"]
        },
        {
            title: "Visualization & dashboards",
            icon: <LineChart className="w-6 h-6 text-blue-600 mb-4" />,
            description: "Experience building interactive dashboards and data apps (for example with Streamlit, Power BI, or Incorta) to help non-technical stakeholders understand trends and metrics quickly.",
            tags: ["Incorta", "Streamlit", "Power BI", "Dashboards"]
        },
        {
            title: "Tools & practices",
            icon: <Wrench className="w-6 h-6 text-blue-600 mb-4" />,
            description: "Git/GitHub for version control, REST/Graph APIs for data ingestion, tracking work via Jira, and good practices like logging, testing, and documentation across Azure and GCP environments.",
            tags: ["Git", "Jira", "GCP", "REST APIs", "CI/CD"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
            <div className="mb-16">
                <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 block">02. Toolkit</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Core Toolkit</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillGroups.map((group, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        {group.icon}
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {group.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {group.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {group.tags.map((tag, tIndex) => (
                                <span key={tIndex} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm font-mono rounded-md border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
