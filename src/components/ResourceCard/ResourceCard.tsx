// src/components/ResourceCard/ResourceCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Resource } from "@/data/resources";
import { FaBook, FaGraduationCap, FaTools, FaUsers, FaNewspaper, FaExternalLinkAlt } from "react-icons/fa";

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

  const getGradient = () => {
    switch (resource.category) {
      case "Books": return "from-orange-400 to-red-500";
      case "Courses": return "from-blue-400 to-indigo-600";
      case "Tools": return "from-purple-400 to-pink-500";
      case "Community": return "from-green-400 to-teal-600";
      case "News": return "from-gray-500 to-gray-700";
      default: return "from-gray-700 to-black";
    }
  };

  const getLevelColor = () => {
    switch (resource.level) {
      case "Beginner": return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30";
    }
  };

  return (
    <Link 
      href={resource.link} 
      target="_blank" 
      className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden"
    >
      
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        {resource.image ? (
          <>
            <Image 
               src={resource.image} 
               alt={resource.title}
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </>
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getGradient()} group-hover:scale-105 transition-transform duration-500`}>
             <div className="p-4 bg-white/20 backdrop-blur-md rounded-full shadow-inner">
                {getIcon()}
             </div>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                {resource.category}
            </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
             <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getLevelColor()}`}>
                {resource.level}
            </span>
        </div>

        {/* title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {resource.title}
        </h3>
        
        {/* author */}
        {resource.author && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                by {resource.author}
            </p>
        )}
        
        {/* desc */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {resource.description}
        </p>

        {/* visit link of resource */}
        <div className="mt-auto flex items-center text-accent text-sm font-bold gap-2 group-hover:gap-3 transition-all">
           Visit Resource <FaExternalLinkAlt className="text-xs" />
        </div>
      </div>

    </Link>
  );
}