// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers/Providers";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "EgQCC - Egypt Quantum Computing Community",
  description: "Fostering collaboration and knowledge in quantum computing across Egypt.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${cairo.variable}
          min-h-screen flex flex-col
          text-gray-900 dark:text-white
          transition-colors duration-300
          font-en
        `}
      >
        <LocaleProvider>
          <Providers>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </LocaleProvider>
      </body>
    </html>
  );
}
