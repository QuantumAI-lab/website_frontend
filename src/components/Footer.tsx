"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* grid container three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* logo and mission */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image 
                  src="/assets/logo.png" 
                  alt="EgQCC Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                EgQCC, Democratizing the Quantum Leap.
                <span className="block mt-2">
                    Our mission is to empower one million students with Quantum Computing by 2026.
                </span>
            </p>
          </div>

          {/* quick links */}
          <div className="md:justify-self-center">
            <h3 className="text-lg font-bold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Events", "Team", "Resources"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: contact us */}
          <div className="md:justify-self-center">
            <h3 className="text-lg font-bold text-primary mb-6">Connect With Us</h3>
            
            {/* social media icons */}
            {/* "NOTE" we haven't yet settled down on github global and email for the community */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/company/egypt-quantum-computing-community/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.facebook.com/share/18AjjJbSv4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              
              <a href="https://www.youtube.com/@iQafe" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all">
                <FaYoutube size={18} />
              </a>
              {/*
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-gray-800 hover:text-white transition-all">
                <FaGithub size={18} />
              </a>
              */}
            </div>

            {/*
            <a href="mailto:contact@egqcc.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm">
                <FaEnvelope />
                <span>contact@egqcc.com</span>
            </a>
            */}
          </div>

        </div>

      </div>
    </footer>
  );
}