// src/components/AnnouncementBanner/AnnouncementBanner.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBell } from "react-icons/fa";
import Link from "next/link";

import { useI18n } from "@/i18n/LocaleProvider";

export default function AnnouncementBanner() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // removed the localStorage memory check here
    // it will wait 1.5 seconds and pop up every time the page reloads.
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    // It just hides it for now, but will NOT permanently memorize that you closed it.
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 end-6 z-50 w-[90%] max-w-sm"
        >
          <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-5 relative overflow-hidden">
            {/* Glowing Accent Bar */}
            <div className="absolute top-0 start-0 w-full h-1 bg-linear-to-r from-accent to-yellow-500" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 end-3 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Dismiss Announcement"
            >
              <FaTimes size={14} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full text-accent mt-1 shrink-0">
                <FaBell size={18} />
              </div>
              <div className="pe-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base">
                  {t.announcement?.title || "New Update"}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {t.announcement?.desc || "Check out our latest community activities."}
                </p>
                
                <Link
                  href="/events"
                  onClick={() => setIsVisible(false)} // Hides when clicked, but resets on reload
                  className="inline-block px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black text-xs md:text-sm font-bold rounded-lg hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-colors"
                >
                  {t.announcement?.cta || "View"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}