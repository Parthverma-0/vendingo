import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendi 'N' Go — India's Fintech Vending Investment Platform",
  description:
    "Fund a smart, IoT-connected vending machine. Earn transparent, monthly passive income — tracked in real time. Jaipur pilot now open to founding investors.",
  keywords: [
    "Vendi 'N' Go",
    "vending machine investment",
    "passive income India",
    "IoT vending",
    "Jaipur fintech",
    "automated retail investment",
  ],
  authors: [{ name: "Vendi 'N' Go" }],
  openGraph: {
    title: "Vendi 'N' Go — Own the machine. Earn the income.",
    description:
      "Fund a smart, IoT-connected vending machine. Earn transparent, monthly passive income — tracked in real time.",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas-deep font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
