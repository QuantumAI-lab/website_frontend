// src/app/resources/page.tsx
"use client";

import { useMemo, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resources, QuantumField } from "@/data/resources";
// import { roadmaps } from "@/data/roadmaps"; // <-- ROADMAP IMPORT (Commented for future use)
import { podcasts } from "@/data/podcasts"; 
import ResourceCard from "@/components/ResourceCard/ResourceCard";
// import Roadmap from "@/components/Roadmap/Roadmap"; // <-- ROADMAP IMPORT (Commented for future use)
import { FaSearch, FaFilter, FaLayerGroup, FaNetworkWired, FaMapSigns, FaBook, FaPodcast, FaHardHat, FaPlayCircle } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

type CategoryKey = "all" | "presentations" | "recordings" | "articles" | "projects" ;
type LevelKey = "all" | "beginner" | "intermediate" | "advanced" | "allLevels";
type FieldKey = "all" | QuantumField;

type ViewMode = "podcasts" | "library" | "roadmaps";

function ResourcesContent() {
  const { t } = useI18n();

  const [activeView, setActiveView] = useState<ViewMode>("library"); 
  
  // const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>(""); // <-- ROADMAP STATE
  
  // Library State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [selectedLevel, setSelectedLevel] = useState<LevelKey>("all");
  const [selectedField, setSelectedField] = useState<FieldKey>("all");

  // NEW: Podcast State
  const [podcastSearchTerm, setPodcastSearchTerm] = useState("");

  const categoryOptions = useMemo(() => [
        { value: "all", label: t.resourcesPage?.filters?.categoryAll || "All (Categories)" },
        { value: "presentations", label: t.resourcesPage?.filters?.categoryPresentations || "Presentations" },
        { value: "recordings", label: t.resourcesPage?.filters?.categoryRecordings || "Recordings" },
        { value: "articles", label: t.resourcesPage?.filters?.categoryArticles || "Articles & Guides" },
        { value: "projects", label: t.resourcesPage?.filters?.categoryProjects || "Code & Projects" },
  ] as const, [t]);

  const levelOptions = useMemo(() => [
        { value: "all", label: t.resourcesPage?.filters?.levelAll || "All (Levels)" },
        { value: "beginner", label: t.resourcesPage?.filters?.levelBeginner || "Beginner" },
        { value: "intermediate", label: t.resourcesPage?.filters?.levelIntermediate || "Intermediate" },
        { value: "advanced", label: t.resourcesPage?.filters?.levelAdvanced || "Advanced" },
        { value: "allLevels", label: t.resourcesPage?.filters?.levelAllLevels || "All Levels" },
  ] as const, [t]);

  const fieldOptions = useMemo(() => [
        { value: "all", label: t.resourcesPage?.filters?.fieldAll || "All (Fields)" },
        { value: "Introduction to quantum computing", label: t.resourcesPage?.filters?.fieldIntro || "Introduction to Quantum Computing" },
        { value: "Quantum Machine Learning", label: t.resourcesPage?.filters?.fieldQML || "Quantum Machine Learning" },
        { value: "Quantum Cryptography", label: t.resourcesPage?.filters?.fieldCrypto || "Quantum Cryptography" },
        { value: "Quantum simulations", label: t.resourcesPage?.filters?.fieldSimulations || "Quantum Simulations" },
        { value: "General", label: t.resourcesPage?.filters?.fieldGeneral || "General" },
  ] as const, [t]);

  // Library Filter Logic
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || resource.category.toLowerCase() === selectedCategory;
      const matchesLevel = selectedLevel === "all" || (selectedLevel === "allLevels" ? resource.level.toLowerCase() === "all levels" : resource.level.toLowerCase() === selectedLevel);
      const matchesField = selectedField === "all" || resource.field === selectedField;
      return matchesSearch && matchesCategory && matchesLevel && matchesField;
    });
  }, [searchTerm, selectedCategory, selectedLevel, selectedField]);

  // NEW: Podcast Filter Logic
  const filteredPodcasts = useMemo(() => {
    return podcasts.filter((podcast) => {
      return podcast.title.toLowerCase().includes(podcastSearchTerm.toLowerCase()) || 
             podcast.desc.toLowerCase().includes(podcastSearchTerm.toLowerCase());
    });
  }, [podcastSearchTerm]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSelectedField("all");
  };

  // const activeRoadmap = roadmaps.find(r => r.id === selectedRoadmapId) || null; // <-- ROADMAP DATA

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t.resourcesPage?.titlePrefix || "Explore"} <span className="text-accent">{t.resourcesPage?.titleHighlight || "Resources"}</span>
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            {t.resourcesPage?.subtitle || "Discover learning materials, podcasts, and structured roadmaps."}
          </p>

          {/* View Toggle (Tabs) */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-[#111] p-1.5 rounded-2xl border border-gray-200 dark:border-gray-800">
              
              <button
                onClick={() => setActiveView("podcasts")}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeView === "podcasts" ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <FaPodcast className={activeView === "podcasts" ? "text-purple-500" : ""} /> {t.resourcesPage?.tabs?.podcasts || "Podcasts"}
              </button>

              <button
                onClick={() => setActiveView("library")}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeView === "library" ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <FaBook className={activeView === "library" ? "text-accent" : ""} /> {t.resourcesPage?.tabs?.library || "Resource Library"}
              </button>

              <button
                onClick={() => setActiveView("roadmaps")}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeView === "roadmaps" ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <FaMapSigns className={activeView === "roadmaps" ? "text-green-500" : ""} /> {t.resourcesPage?.tabs?.roadmaps || "Learning Paths"}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Rendering based on Tab */}
        <AnimatePresence mode="wait">
          
          {/* VIEW: PODCASTS */}
          {activeView === "podcasts" && (
            <motion.div key="podcasts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              
              {/* NEW: Podcast Search Bar */}
              <div className="flex flex-col gap-4 max-w-2xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-10">
                <div className="relative w-full">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text" 
                    placeholder={t.resourcesPage?.filters?.searchPlaceholder || "Search podcasts..."}
                    value={podcastSearchTerm} 
                    onChange={(e) => setPodcastSearchTerm(e.target.value)}
                    className="w-full bg-transparent outline-none py-2 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500 text-lg"
                  />
                </div>
              </div>

              {filteredPodcasts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPodcasts.map((podcast, i) => (
                    <a key={podcast.id} href={podcast.url} target="_blank" rel="noreferrer" className="group block">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col"
                      >
                        <div className="relative h-48 w-full bg-gray-900 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-black/80 z-0" />
                          <FaPlayCircle className="text-white/80 text-6xl z-10 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                        </div>
                        
                        <div className="p-6 flex flex-col grow">
                          <span className="text-purple-500 text-xs font-bold uppercase tracking-wider mb-2 block">{podcast.date}</span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">{podcast.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{podcast.desc}</p>
                        </div>
                      </motion.div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-12 bg-white dark:bg-[#111] py-16 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800 max-w-3xl mx-auto">
                  <p className="text-lg font-medium">No podcasts found.</p>
                  <button 
                    onClick={() => setPodcastSearchTerm("")} 
                    className="mt-4 px-6 py-2 bg-purple-500/20 text-purple-500 font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* VIEW: LIBRARY */}
          {activeView === "library" && (
            <motion.div key="library" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {/* Filters Wrapper */}
              <div className="flex flex-col gap-4 max-w-4xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-12">
                <div className="relative w-full">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text" placeholder={t.resourcesPage?.filters?.searchPlaceholder || "Search..."}
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-accent outline-none py-3 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500 text-lg"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="relative">
                    <FaNetworkWired className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select value={selectedField} onChange={(e) => setSelectedField(e.target.value as FieldKey)} className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm text-ellipsis">
                      {fieldOptions.map((opt) => (<option key={opt.value} value={opt.value} className="bg-white dark:bg-black">{opt.label}</option>))}
                    </select>
                  </div>
                  <div className="relative">
                    <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as CategoryKey)} className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm text-ellipsis">
                      {categoryOptions.map((opt) => (<option key={opt.value} value={opt.value} className="bg-white dark:bg-black">{opt.label}</option>))}
                    </select>
                  </div>
                  <div className="relative">
                    <FaLayerGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value as LevelKey)} className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm text-ellipsis">
                      {levelOptions.map((opt) => (<option key={opt.value} value={opt.value} className="bg-white dark:bg-black">{opt.label}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid */}
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <motion.div key={resource.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <ResourceCard resource={resource} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-12 bg-white dark:bg-[#111] py-16 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800">
                  <p className="text-lg font-medium">{t.resourcesPage?.emptyState || "No resources found."}</p>
                  <button onClick={clearFilters} className="mt-4 px-6 py-2 bg-accent text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors">
                    {t.resourcesPage?.resetFilters || "Reset"}
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* VIEW: ROADMAPS (UNDER CONSTRUCTION + COMMENTED REAL CODE) */}
          {activeView === "roadmaps" && (
            <motion.div key="roadmaps" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              
              {/* CURRENT ACTIVE VIEW: Under Construction */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-20 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-800 max-w-3xl mx-auto shadow-xl"
              >
                <div className="relative inline-block mb-6">
                  <FaHardHat className="text-6xl md:text-7xl text-accent relative z-10" />
                  <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t.resourcesPage?.underConstruction?.title || "Under Construction"}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium max-w-xl mx-auto px-4">
                  {t.resourcesPage?.underConstruction?.desc || "Our curated learning paths are currently being crafted by our community experts. Check back soon to start your structured quantum journey!"}
                </p>
              </motion.div>

              {/* === REAL ROADMAP CODE (COMMENTED OUT FOR FUTURE USE) === */}
              {/* <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md">
                  <FaMapSigns className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                  <select
                    value={selectedRoadmapId}
                    onChange={(e) => setSelectedRoadmapId(e.target.value)}
                    className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-6 text-gray-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-accent shadow-lg appearance-none cursor-pointer transition-all"
                  >
                    <option value="" disabled>{t.resourcesPage?.roadmap?.selectTitle || "Choose a Career Path"}</option>
                    {roadmaps.map(r => (
                      <option key={r.id} value={r.id} className="bg-white dark:bg-black font-medium text-base">
                         {r.title} ({r.field})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {activeRoadmap ? (
                <Roadmap roadmap={activeRoadmap} />
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-20 bg-white/30 dark:bg-white/5 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800 max-w-4xl mx-auto"
                >
                  <FaMapSigns className="text-5xl text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    Please select a path from the dropdown above to view your journey.
                  </p>
                </motion.div>
              )}
              */}

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center dark:bg-[#0a0a0a]"><div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
      <ResourcesContent />
    </Suspense>
  );
}