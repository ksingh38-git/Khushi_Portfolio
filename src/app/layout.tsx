import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { MinimalNavBar } from "@/components/Shared/MinimalNavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khushi Singh | Data Engineer",
  description: "Portfolio of Khushi Singh, an early-career data engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmMono.variable} font-sans antialiased bg-white text-gray-900 relative min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 bg-dotted-pattern pointer-events-none -z-10" />
        <MinimalNavBar />
        <div className="flex-grow flex flex-col pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
