import { GraduationCap } from "lucide-react";

export function EducationSection() {
    const educationData = [
        {
            degree: "Master's in Computer Science",
            institution: "University at Buffalo, The State University of New York",
            location: "Buffalo, New York, USA",
            dates: "Aug 2023 – Dec 2025",
            iscompleted: true,
            description: [
                "Graduate coursework focused on databases, data engineering, big data analytics, and applied machine learning.",
                "Completed multiple end-to-end data projects, including climate/sensor analytics and interactive data apps, several of which are showcased in this portfolio.",
                "Active in academic and community roles such as grading/TA work and women-in-tech initiatives, strengthening communication and mentoring skills."
            ]
        },
        {
            degree: "Bachelor of Science (B.Sc.) in Information Technology",
            institution: "St. Xavier's College, Ranchi",
            location: "Ranchi, Jharkhand, India",
            dates: "2017 – 2020",
            iscompleted: true,
            description: [
                "Built a solid foundation in programming, databases, networking, and software development through the B.Sc. Information Technology curriculum.",
                "Worked on academic projects involving basic data processing, software design, and database-driven applications, which sparked my interest in data engineering.",
                "Graduated in 2020 with strong fundamentals that I later extended into analytics and data engineering roles."
            ]
        }
    ];

    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
            <div className="mb-16">
                <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 block">01. Academic Background</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-12">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        <div className="md:grid md:grid-cols-[1fr_3fr] md:gap-8 items-start">
                            {/* Left Column (Dates & Location) */}
                            <div className="hidden md:block text-right mt-1">
                                <div className="text-gray-900 font-medium">{edu.dates}</div>
                                <div className="text-sm text-gray-500 mt-1">{edu.location}</div>
                                {edu.iscompleted && (
                                    <div className="inline-block mt-2 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded border border-green-100">
                                        Graduated
                                    </div>
                                )}
                            </div>

                            {/* Mobile Dates overlay */}
                            <div className="md:hidden mt-1 mb-2">
                                <div className="text-sm text-gray-500 font-mono">{edu.dates} • {edu.location}</div>
                            </div>

                            {/* Right Column (Content) */}
                            <div className="relative border-l-2 border-gray-100 pl-6 md:pl-8 pb-8 transition-colors hover:border-blue-200">
                                <div className="absolute -left-3 md:-left-3.5 top-0 bg-white p-1 rounded-full border border-gray-200 text-blue-600 shadow-sm">
                                    <GraduationCap className="w-4 h-4" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                                <h4 className="text-lg text-blue-600 font-medium mb-4">{edu.institution}</h4>

                                <ul className="space-y-3">
                                    {edu.description.map((item, i) => (
                                        <li key={i} className="text-gray-600 leading-relaxed text-base flex leading-snug">
                                            <span className="text-blue-300 mr-2 mt-1">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
