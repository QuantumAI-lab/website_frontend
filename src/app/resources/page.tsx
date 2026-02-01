// from src/app/resources/page.tsx
"use client";

import { useMemo, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { resources } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
import { FaSearch, FaFilter, FaLayerGroup } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

type CategoryKey = "all" | "books" | "courses" | "tools" | "community" | "news";
type LevelKey = "all" | "beginner" | "intermediate" | "advanced" | "allLevels";

function ResourcesContent() {
  const { t } = useI18n();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [selectedLevel, setSelectedLevel] = useState<LevelKey>("all");

  const categoryOptions = useMemo(
    () =>
      [
        { value: "all", label: t.resourcesPage.filters.categoryAll },
        { value: "books", label: t.resourcesPage.filters.categoryBooks },
        { value: "courses", label: t.resourcesPage.filters.categoryCourses },
        { value: "tools", label: t.resourcesPage.filters.categoryTools },
        { value: "community", label: t.resourcesPage.filters.categoryCommunity },
        { value: "news", label: t.resourcesPage.filters.categoryNews },
      ] as const,
    [t]
  );

  const levelOptions = useMemo(
    () =>
      [
        { value: "all", label: t.resourcesPage.filters.levelAll },
        { value: "beginner", label: t.resourcesPage.filters.levelBeginner },
        { value: "intermediate", label: t.resourcesPage.filters.levelIntermediate },
        { value: "advanced", label: t.resourcesPage.filters.levelAdvanced },
        { value: "allLevels", label: t.resourcesPage.filters.levelAllLevels },
      ] as const,
    [t]
  );

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        resource.category.toLowerCase() === selectedCategory;

      const matchesLevel =
        selectedLevel === "all" ||
        (selectedLevel === "allLevels"
          ? resource.level.toLowerCase() === "all levels"
          : resource.level.toLowerCase() === selectedLevel);

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t.resourcesPage.titlePrefix}{" "}
            <span className="text-accent">{t.resourcesPage.titleHighlight}</span>
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            {t.resourcesPage.subtitle}
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="relative w-full md:w-2/4">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.resourcesPage.filters.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-accent outline-none py-3 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500"
              />
            </div>

            {/* Category */}
            <div className="relative w-full md:w-1/4">
              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryKey)}
                className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white dark:bg-black">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Level */}
            <div className="relative w-full md:w-1/4">
              <FaLayerGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as LevelKey)}
                className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
              >
                {levelOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white dark:bg-black">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12">
            <p>{t.resourcesPage.emptyState}</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-accent hover:underline font-bold"
            >
              {t.resourcesPage.resetFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResourcesContent />
    </Suspense>
  );
}
