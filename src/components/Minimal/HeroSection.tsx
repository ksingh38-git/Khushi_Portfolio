import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section id="home" className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center md:items-start pt-20 pb-16 px-6 max-w-6xl mx-auto w-full relative gap-12">
            <div className="absolute top-1/2 -right-[20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left order-2 md:order-1 mt-8 md:mt-0">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium animate-fade-in-up">
                    Available for Data Engineering / Data Analyst Roles
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    Hi, I&apos;m <span className="text-blue-600 relative inline-block whitespace-nowrap">Khushi Singh.
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-10 -rotate-2"></span>
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    I am an early-career data engineer and analytics professional who enjoys building data pipelines, working with real-world datasets, and turning them into clear, visual stories for decision-makers. My portfolio presents me as a hands-on engineer who can take data from raw sources to clean, reliable, and insightful outputs using Python, SQL, and cloud tools, and who is actively looking for data engineering and analytics roles in the US.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                    >
                        View Selected Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-all hover:-translate-y-0.5"
                    >
                        Contact Me
                    </a>
                </div>

                <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <a href="https://www.linkedin.com/in/khushisingh03/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://github.com/ksingh38-git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="mailto:khushisingh.021103@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full">
                        <Mail className="w-6 h-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <ArrowDown className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 flex justify-center items-center order-1 md:order-2 w-full max-w-[280px] md:max-w-[400px] animate-fade-in-up md:mt-12" style={{ animationDelay: '200ms' }}>
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                        src="/Profile.PNG"
                        alt="Khushi Singh"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
