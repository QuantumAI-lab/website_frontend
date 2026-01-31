"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSun, FaMoon, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu

  //helper to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //helper to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //list of links 
  const navItems = ["Home", "Events", "Team", "Resources"];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      
      {/* main container */}
      <div className="relative w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between py-2">
        
        {/* left section logo*/}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse z-20">
          <div className="relative w-35 h-20">
            <Image 
              src="/assets/logo.png" 
              alt="EgQCC Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>
        {/* center for pages for laptop/tablet mode */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="font-medium flex flex-row space-x-8 lg:space-x-12 rtl:space-x-reverse">
              {navItems.map((item) => {
                const linkPath = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = pathname === linkPath;

                return (
                  <li key={item}>
                    <Link 
                      href={linkPath} 
                      className={`block py-2 px-3 rounded-sm transition-colors font-sans text-lg ${
                        isActive 
                          ? "text-primary font-bold" 
                          : "text-gray-900 dark:text-white hover:text-primary" 
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
        </div>


        {/* right section for toggling theme and mobile menu */}
        <div className="flex items-center gap-4 z-20 w-25">
          
          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group relative"
            aria-label="Toggle Theme"
          >
            <span className="hidden dark:block">
               <FaSun className="text-accent text-xl" />
            </span>
            <span className="block dark:hidden">
               <FaMoon className="text-primary text-xl" />
            </span>
          </button>

          {/* dropdown menu arrow for mobile */}
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
            {navItems.map((item) => {
              const linkPath = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = pathname === linkPath;

              return (
                <li key={item}>
                  <Link 
                    href={linkPath}
                    onClick={() => setIsMenuOpen(false)} // close menu when clicked
                    className={`block py-3 px-4 rounded-lg transition-colors text-lg ${
                      isActive 
                        ? "bg-primary/10 text-primary font-bold" 
                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" 
                    }`}
                  >
                    {item}
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