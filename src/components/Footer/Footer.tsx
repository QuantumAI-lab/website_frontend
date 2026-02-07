"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

import logoImg from "../../../public/assets/logo.png";

type NavKey = "home" | "events" | "team" | "resources";

export default function Footer() {
  const { t } = useI18n();

  const navItems: { key: NavKey; href: string }[] = [
    { key: "home", href: "/" },
    { key: "events", href: "/events" },
    { key: "team", href: "/team" },
    { key: "resources", href: "/resources" },
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo & Mission */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative w-16 h-16">
                <Image
                  src={logoImg}
                  alt="EgQCC Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.missionLine1}
              <span className="block mt-2">
                {t.footer.missionLine2}
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="text-lg font-bold text-primary mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {navItems.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:justify-self-center">
            <h3 className="text-lg font-bold text-primary mb-6">
              {t.footer.connect}
            </h3>

            <div className="flex space-x-4 rtl:space-x-reverse mb-6">
              <a
                href="https://www.linkedin.com/company/egypt-quantum-computing-community/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/18AjjJbSv4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.youtube.com/@iQafe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all"
              >
                <FaYoutube size={18} />
              </a>

              {/* whatsApp*/}
              <a
                href="https://chat.whatsapp.com/DYOkJh2s1lPHnyz1MmaZ21?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-[#25D366] hover:text-white transition-all"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </footer>
  );
}