// src/components/Cards/Cards.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface CardSectionProps {
  title: string;
  highlightedWord?: string;
  subtitle: string;
  features: FeatureItem[];
}

export default function CardSection({
  title,
  highlightedWord,
  subtitle,
  features,
}: CardSectionProps) {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}{" "}
            {highlightedWord && (
              <span className="text-accent">{highlightedWord}</span>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
