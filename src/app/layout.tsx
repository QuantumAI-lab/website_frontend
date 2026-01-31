import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EgQCC - Egypt Quantum Computing Community",
  description: "Fostering collaboration and knowledge in quantum computing across Egypt.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* CHANGED: Removed 'bg-white dark:bg-darkbg' from className.
          The background is now controlled by globals.css to support the gradient lights.
      */}
      <body className={`${inter.className} text-gray-900 dark:text-white transition-colors duration-300`}>
        <Providers>
          <Navbar />
          
          <div className="flex-grow">
            {children}
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}