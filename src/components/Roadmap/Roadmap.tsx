// src/components/Roadmap/Roadmap.tsx
"use client";

import { motion } from "framer-motion";
import { Roadmap as RoadmapType } from "@/data/roadmaps";
import { FaCheckCircle, FaClock, FaBrain } from "react-icons/fa";
import { useI18n } from "@/i18n/LocaleProvider";

interface RoadmapProps {
  roadmap: RoadmapType;
}

export default function Roadmap({ roadmap }: RoadmapProps) {
  const { t } = useI18n();

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500 text-white shadow-green-500/30";
      case "Intermediate": return "bg-yellow-500 text-white shadow-yellow-500/30";
      case "Advanced": return "bg-red-500 text-white shadow-red-500/30";
      default: return "bg-accent text-black shadow-accent/30";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {roadmap.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
        >
          {roadmap.description}
        </motion.p>
      </div>

      <div className="relative border-l-2 md:border-l-0 md:border-t-0 md:border-gray-200 dark:md:border-gray-800 ml-4 md:ml-0">
        {/* Central Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

        {roadmap.steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Center Dot */}
              <div className="absolute -left-6.25 md:static md:left-auto flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-gray-100 dark:bg-gray-900 z-10 md:mx-8">
                <div className={`w-4 h-4 rounded-full shadow-lg ${getLevelColor(step.level)}`} />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className={`bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${getLevelColor(step.level)}`}>
                      {step.level}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                      <FaClock /> {step.estimatedWeeks} {t.resourcesPage?.roadmap?.weeks || "weeks"}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3">
                      <FaBrain className="text-accent" /> {t.resourcesPage?.roadmap?.skills || "Skills:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-1.5">
                          <FaCheckCircle className="text-green-500 text-[10px]" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}