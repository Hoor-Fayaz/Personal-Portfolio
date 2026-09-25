import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoor Fayaz — AI/ML Engineer | Computer Vision | Generative AI",
  description: "Portfolio of Hoor Fayaz, an AI/ML Engineer specializing in Computer Vision, Deep Learning, Generative AI, LLM/RAG applications, and full-stack engineering.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Hoor Fayaz — AI/ML Engineer | Computer Vision | Generative AI",
    description: "Portfolio of Hoor Fayaz, an AI/ML Engineer specializing in Computer Vision, Deep Learning, Generative AI, LLM/RAG applications, and full-stack engineering.",
    type: "website",
    url: "https://hoorfayaz.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoor Fayaz — AI/ML Engineer | Computer Vision | Generative AI",
    description: "Portfolio of Hoor Fayaz, an AI/ML Engineer specializing in Computer Vision, Deep Learning, Generative AI, LLM/RAG applications, and full-stack engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
