// src/components/Hero/Hero.tsx 
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { useI18n } from "@/i18n/LocaleProvider";
import quantumAnimation from "@/animation/quantum-hero.json";

const motionTitle = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const motionSubtitle = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 },
};

const motionVisual = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1 },
};

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-transparent transition-colors duration-300 px-6 md:px-12 pt-32 md:pt-20 pb-12 flex flex-col md:flex-row items-center justify-between">
      {/* Content */}
      <div className="w-full md:w-1/2 z-10 md:pl-10 lg:pl-20">
        <motion.h1
          {...motionTitle}
          className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          <span className="text-accent">{t.hero.brand}</span>
          <span className="block">{t.hero.headlineLine1}</span>
          <span>{t.hero.headlineLine2}</span>
        </motion.h1>

        <motion.p
          {...motionSubtitle}
          className="mt-8 max-w-2xl text-lg md:text-lg lg:text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300"
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="mt-8">
          <Link href="/team" className="inline-block">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent hover:bg-yellow-500 text-black text-lg md:text-xl font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(228,168,60,0.4)]"
            >
              {t.hero.cta}
              <span className="text-2xl">→</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Visual */}
      <motion.div
        {...motionVisual}
        className="w-full md:w-1/2 relative z-0 flex justify-center md:justify-end mt-12 md:mt-0 lg:-mt-40"
      >
        <div className="w-full h-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1000px] drop-shadow-[0_0_50px_rgba(59,130,246,0.2)] dark:drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]">
          <Lottie animationData={quantumAnimation} loop autoplay />
        </div>
      </motion.div>
    </section>
  );
}
