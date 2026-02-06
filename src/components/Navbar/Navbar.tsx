// src/components/Navbar/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { FaSun, FaMoon, FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

type NavKey = "home" | "events" | "team" | "resources";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer); // Cleanup timer to prevent memory leaks
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleLanguage = () => setLocale(locale === "ar" ? "en" : "ar");

  const navItems = useMemo(
    () =>
      [
        { key: "home", href: "/" },
        { key: "events", href: "/events" },
        { key: "team", href: "/team" },
        { key: "resources", href: "/resources" },
      ] as const,
    []
  );

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="relative w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse z-20">
          <div className="relative w-35 h-20">
            <Image src="/assets/logo.png" alt="EgQCC Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="font-medium flex flex-row space-x-8 lg:space-x-12 rtl:space-x-reverse">
            {navItems.map(({ key, href }) => {
              const isActive = pathname === href;
              const label = t.nav[key as NavKey];

              return (
                <li key={key}>
                  <Link
                    href={href}
                    className={`block py-2 px-3 rounded-sm transition-colors text-lg ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-gray-900 dark:text-white hover:text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 z-20">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Language"
          >
            {locale === "ar" ? "EN" : "AR"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {/* 3. 'isClient' check is applied here */}
            {isClient ? (
              theme === "dark" ? (
                <FaSun className="text-accent text-xl" />
              ) : (
                <FaMoon className="text-primary text-xl" />
              )
            ) : (
              // Placeholder for Server Side Render
              <div className="w-5 h-5" /> 
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map(({ key, href }) => {
              const isActive = pathname === href;
              const label = t.nav[key as NavKey];

              return (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors text-lg ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}