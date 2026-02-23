"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function MinimalNavBar() {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "experience", "extracurricular", "projects", "contact"];
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    current = section;
                }
            }
            setActiveHash(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Community", href: "#extracurricular" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav py-4 transition-all duration-300">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
                <Link href="#home" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
                    Khushi Singh<span className="text-blue-600">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors hover:text-blue-600 ${activeHash === link.href.substring(1) ? "text-blue-600" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/Khushi-Singh-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile menu could be added here, but keeping it minimal for now */}
            </div>
        </nav>
    );
}
