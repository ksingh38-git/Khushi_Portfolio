import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
    const projects = [
        {
            title: "Climate & Sensor Data Analytics Platform",
            summary: "End-to-end interactive data app for analyzing building performance.",
            problem: "Stakeholders needed to understand building performance (temperature, humidity, energy) but lacked a unified view of heterogeneous climate models (EPW) and live sensor data.",
            tools: ["Python", "Pandas", "Streamlit", "Plotly", "API Integrations"],
            solution: "Designed an automated pipeline to ingest live sensor streams and static EPW files, clean anomalous recordings, structure the data into optimized dataframes, and surface insights dynamically through an interactive Streamlit UI.",
            impact: "Reduced data preparation time by 80% and enabled non-technical stakeholders to visually explore complex environmental patterns. Learned how to build robust ingestion layers that fail gracefully on bad sensor data.",
            featured: true,
            github: "https://github.com/UB-BEVL/climateclock",
            demo: "https://bevl-climateclock.streamlit.app/"
        },
        {
            title: "Airline Delay Prediction Pipeline",
            summary: "Machine learning data pipeline for flight delay forecasting.",
            problem: "Airlines needed to identify recurring operational bottlenecks that cause flight delays across massive datasets.",
            tools: ["Python", "SQL", "Scikit-Learn", "Data Warehousing"],
            solution: "Engineered a pipeline to extract and clean 1M+ raw flight records, handled missing values and categorical encoding via SQL/Python, and structured a feature-rich dataset to train classifiers.",
            impact: "Built a predictive model that achieved 82% accuracy in identifying key delay drivers. Showcased ability to manage large-scale data transformations for ML workloads.",
            featured: false,
            github: "https://github.com/ksingh38-git/Flight_delay_analysis",
            demo: null
        },
        {
            title: "Transportation Safety Analytics",
            summary: "Geospatial data analysis of NYC traffic collisions.",
            problem: "Urban planners required structured analytical datasets to uncover high-risk locations and safety patterns from unstructured crash reports.",
            tools: ["Python", "SQL", "Pandas"],
            solution: "Processed 1M+ NYC collision records, validating schema consistency and writing aggregation queries to highlight spatial and temporal crash clusters.",
            impact: "Created reliable, analytics-ready tables that instantly map high-risk zones, improving query speeds for city analysts by structurally optimizing the database.",
            featured: false,
            github: "https://github.com/ksingh38-git/Explorer-Transportation-Data-Science-Project",
            demo: null
        },
        {
            title: "Netflix Data Extraction and Analysis",
            summary: "End-to-end data pipeline to extract, transform, and analyze Netflix content data.",
            problem: "Needed a structured way to analyze Netflix's vast library of shows and movies to uncover trends in genres, ratings, and release years.",
            tools: ["Python", "Pandas", "ETL", "Data Analysis"],
            solution: "Developed a Python-based extraction script to pull Netflix dataset, performed extensive data cleaning and exploratory data analysis (EDA) using Pandas, and structured the data for visualization.",
            impact: "Created a clean, analytics-ready dataset that provided actionable insights into Netflix's content strategy and distribution patterns over time.",
            featured: false,
            github: "https://github.com/ksingh38-git/Netflix-Extraction-and-Analysis",
            demo: null
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
            <div className="mb-16">
                <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 block">04. Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl border ${proj.featured ? 'border-blue-200 shadow-xl shadow-blue-900/5' : 'border-gray-100 shadow-sm hover:shadow-md'} p-6 md:p-10 transition-all duration-300 relative overflow-hidden group`}
                    >
                        {proj.featured && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                Featured Data App
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-500 font-medium italic">{proj.summary}</p>
                            </div>
                            <div className="flex gap-3">
                                {proj.github && (
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {proj.demo && (
                                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {proj.tools.map((tool, tIndex) => (
                                <span key={tIndex} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-blue-700 text-xs font-mono rounded">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 text-sm md:text-base">
                            <div>
                                <strong className="text-gray-900 font-semibold block mb-1">Problem:</strong>
                                <p className="text-gray-600 leading-relaxed">{proj.problem}</p>
                            </div>
                            <div>
                                <strong className="text-gray-900 font-semibold block mb-1">Solution:</strong>
                                <p className="text-gray-600 leading-relaxed">{proj.solution}</p>
                            </div>
                            <div>
                                <strong className="text-gray-900 font-semibold block mb-1">Impact & Learning:</strong>
                                <p className="text-gray-600 leading-relaxed">{proj.impact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
