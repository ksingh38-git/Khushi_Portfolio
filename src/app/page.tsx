"use client";

import { HeroSection } from "@/components/Minimal/HeroSection";
import { SkillsSection } from "@/components/Minimal/SkillsSection";
import { EducationSection } from "@/components/Minimal/EducationSection";
import { ExperienceSection } from "@/components/Minimal/ExperienceSection";
import { ExtraCurricularSection } from "@/components/Minimal/ExtraCurricularSection";
import { ProjectsSection } from "@/components/Minimal/ProjectsSection";
import { ContactSection } from "@/components/Minimal/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      <EducationSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      <SkillsSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      <ExperienceSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      <ExtraCurricularSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />

      <ProjectsSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-10" />

      <ContactSection />

      <footer className="w-full py-8 text-center text-sm text-gray-400 font-mono">
        <p>&copy; {new Date().getFullYear()} Khushi Singh. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
