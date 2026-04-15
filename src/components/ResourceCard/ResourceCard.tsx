// src/components/ResourceCard/ResourceCard.tsx
"use client";

import Link from "next/link";
import { Resource } from "@/data/resources";
import { FaBook, FaGraduationCap, FaTools, FaUsers, FaNewspaper, FaExternalLinkAlt, FaNetworkWired } from "react-icons/fa";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  
  const getIcon = () => {
    switch (resource.category) {
      case "Books": return <FaBook className="text-4xl text-white" />;
      case "Courses": return <FaGraduationCap className="text-4xl text-white" />;
      case "Tools": return <FaTools className="text-4xl text-white" />;
      case "Community": return <FaUsers className="text-4xl text-white" />;
      case "News": return <FaNewspaper className="text-4xl text-white" />;
      default: return <FaBook className="text-4xl text-white" />;
    }
  };

  const getLevelColor = () => {
    switch (resource.level) {
      case "Beginner": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-600 border-red-500/20";
      default: return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    }
  };

  return (
    <div className="group relative bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      {/* Top Banner Area */}
      <div className="h-32 bg-gray-900 dark:bg-black relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent" />
        <div className="z-10 transform group-hover:scale-110 transition-transform duration-500">
          {getIcon()}
        </div>
        
        <div className="absolute top-4 end-4 z-10">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                {resource.category}
            </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col grow">
        
        {/* NEW: Field & Level Badges */}
        <div className="mb-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-accent/10 text-accent border border-accent/20 flex items-center gap-1 w-fit">
              <FaNetworkWired size={10} />
              {resource.field}
            </span>
            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border flex items-center gap-1 w-fit ${getLevelColor()}`}>
              <FaGraduationCap size={12} />
              {resource.level}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {resource.title}
        </h3>
        
        {/* Author */}
        {resource.author && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                by {resource.author}
            </p>
        )}
        
        {/* Desc */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {resource.description}
        </p>

        {/* Spacer to push button to bottom */}
        <div className="grow" />

        {/* Visit Link */}
        <Link 
            href={resource.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-sm text-gray-900 dark:text-white transition-all font-bold"
        >
            Visit Resource <FaExternalLinkAlt size={12} />
        </Link>
      </div>
    </div>
  );
}