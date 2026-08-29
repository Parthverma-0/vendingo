import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendingo — Vending Machine Business in India | Smart Vending",
  description:
    "Vendingo is building a smart vending network in India with IoT-enabled machines, digital payments, real-time monitoring and managed operations across high-footfall locations.",
  keywords: [
    "Vendingo",
    "vending machine business in India",
    "smart vending machines India",
    "IoT vending machines",
    "automated retail India",
    "vending machine investment",
  ],
  authors: [{ name: "Vendingo" }],
  openGraph: {
    title: "Vendingo — Smart Vending. Built for Real-World Retail.",
    description:
      "Vendingo is building a technology-enabled vending network across high-footfall locations in India — IoT-enabled machines, digital payments, real-time monitoring and managed operations.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://vendingo.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
