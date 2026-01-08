import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dngjeiowy | Verifiable Healthcare Data Infrastructure | Blockchain Health Records",
  description:
    "Dngjeiowy builds secure, privacy-preserving healthcare data infrastructure using blockchain technology. Enable verifiable health records, patient data sovereignty, and HIPAA/GDPR compliant data exchange.",
  keywords: ["healthcare data", "blockchain", "health records", "data privacy", "HIPAA", "GDPR", "medical data", "patient data", "healthcare infrastructure", "verifiable data"],
  openGraph: {
    title: "Dngjeiowy | Verifiable Healthcare Data Infrastructure",
    description: "Building long-term infrastructure for verifiable, privacy-preserving healthcare data exchange. A foundation for the next generation of clinical trust.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dngjeiowy | Verifiable Healthcare Data Infrastructure",
    description: "Building long-term infrastructure for verifiable, privacy-preserving healthcare data exchange.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <LanguageProvider>
          <ClientBody>{children}</ClientBody>
        </LanguageProvider>
      </body>
    </html>
  );
}
