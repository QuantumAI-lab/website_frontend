"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { resources } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { FaSearch, FaFilter, FaLayerGroup } from "react-icons/fa";

function ResourcesContent() {
  
 { /* filter states */}
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = ["All", "Books", "Courses", "Tools", "Community", "News"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

 { /* filter logic */}
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || resource.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

 { /* helper to clean filters */}
  const clearFilters = () => {
      setSearchTerm("");
      setSelectedCategory("All");
      setSelectedLevel("All");
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      
      <div className="max-w-6xl mx-auto">
        
        {/* header of resourses section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Quantum <span className="text-accent">Resources</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Curated links, books, and tools to help you master quantum computing, 
            whether you are just starting or conducting advanced research.
          </p>
          
          {/* filter bar and search*/}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            
            {/* search  */}
            <div className="relative w-full md:w-2/4">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-accent outline-none py-3 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500"
              />
            </div>

            {/*category */}
            <div className="relative w-full md:w-1/4">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-white dark:bg-black">
                            {cat === "All" ? "All (Category)" : cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* level */}
            <div className="relative w-full md:w-1/4">
                <FaLayerGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                <select 
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                >
                    {levels.map(lvl => (
                        <option key={lvl} value={lvl} className="bg-white dark:bg-black">
                             {lvl === "All" ? "All (Level)" : lvl}
                        </option>
                    ))}
                </select>
            </div>

          </div>
        </div>

        {/*resources grid */}
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
                <p>No resources found matching your criteria.</p>
                <button 
                    onClick={clearFilters}
                    className="mt-4 text-accent hover:underline font-bold"
                >
                    Reset All Filters
                </button>
            </div>
        )}

      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Resources...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}