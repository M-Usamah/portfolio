import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";
import { JsonLd } from "@/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const titleDefault = `${site.name} | ${site.title} — Computer Vision & Digital Twins`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Mohammed Usamah",
    "M-Usamah",
    "AI Engineer",
    "ML Engineer",
    "Computer Vision",
    "NLP",
    "Digital Twin",
    "Unreal Engine 5",
    "Unreal Python",
    "YOLO",
    "YOLO-World",
    "PyTorch",
    "TensorFlow",
    "RAG",
    "freelance AI",
    "InfotainmentAcademy",
    "JayzenAI",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  applicationName: `${site.name} Portfolio`,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: titleDefault,
    description: site.shortDescription,
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.title} — computer vision, digital twins, and Unreal Engine`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.shortDescription,
    images: [
      {
        url: "/assets/images/og-image.jpg",
        alt: `${site.name}, ${site.title}`,
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/assets/images/favicon.svg", type: "image/svg+xml" }],
    apple: "/assets/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": site.themeColor,
    "color-scheme": "dark",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} ${mono.variable} h-full`}>
      <head>
        <link rel="me" href={site.github} />
        <link rel="me" href={site.linkedin} />
        <link rel="author" href={`${site.url}/`} />
        <JsonLd />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
