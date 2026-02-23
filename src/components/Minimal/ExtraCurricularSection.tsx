import { HeartHandshake } from "lucide-react";

export function ExtraCurricularSection() {
    const experiences = [
        {
            company: "University at Buffalo",
            title: "Student Assistant (UB Sustainability)",
            location: "Buffalo, NY",
            dates: "Nov 2024 – Dec 2025",
            type: "Academic",
            icon: <HeartHandshake className="w-5 h-5" />,
            bullets: [
                "Promoting green kit usage to reduce plastic waste.",
                "Collaborated on building a microforest to support campus sustainability initiatives."
            ]
        },
        {
            company: "University at Buffalo",
            title: "Graduate Grader (CSE 574: Intro to ML)",
            location: "Buffalo, NY",
            dates: "Jan 2025 – May 2025",
            type: "Academic",
            icon: <HeartHandshake className="w-5 h-5" />,
            bullets: [
                "Evaluated coursework and provided constructive technical feedback for Introduction to Machine Learning (CSE 574).",
                "Collaborated with faculty to enforce coding standards and ensure robust grading mechanisms for technical assignments."
            ]
        },
        {
            company: "Women in Science and Engineering (WiSE)",
            title: "Student Outreach Member",
            location: "Buffalo, NY",
            dates: "2024 – 2025",
            type: "Outreach",
            icon: <HeartHandshake className="w-5 h-5" />,
            bullets: [
                "Participated as a member in interactive science outreach events for local high school students.",
                "Helped demonstrate science experiments and discussed STEM topics in a fun, engaging way to inspire the next generation of engineers."
            ]
        }
    ];

    return (
        <section id="extracurricular" className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-6 w-full relative">
                <div className="mb-16">
                    <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 block">04. Community & Leadership</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Extracurricular Experience</h2>
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
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 shadow-sm">
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
                                                    <span className="text-blue-400 mr-3 mt-1 text-sm font-mono">▸</span>
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
