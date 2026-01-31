"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

// Component inside Suspense to handle search params
function EventsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("id");

  //filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("earliest");
  //derived state
  const selectedEvent = highlightId 
    ? events.find(e => e.id === highlightId) || null 
    : null;
  //dropdown options for filters
  const categories = ["All", "Hackathon", "Workshop", "Lecture", "Meetup"];
  const statuses = ["All", "Upcoming", "Open", "Closed"];
  const sortOptions = [
    { value: "earliest", label: "Earliest Date First" },
    { value: "latest", label: "Latest Date First" },
  ];
  //filter ane sort logic
  const filteredEvents = events
    .filter((event) => {
        const matchesSearch = 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
        const matchesStatus = selectedStatus === "All" || event.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "earliest" ? dateA - dateB : dateB - dateA;
    });

  //helpters to clean filters
  const clearFilters = () => {
      setSearchTerm("");
      setSelectedCategory("All");
      setSelectedStatus("All");
      setSortOrder("earliest");
  };

  //handlers
  const handleOpenModal = (id: string) => {
      router.push(`?id=${id}`, { scroll: false });
  };

  const handleCloseModal = () => {
      router.push('/events', { scroll: false });
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      
      <div className="max-w-5xl mx-auto">
        {/* header of events */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Our <span className="text-accent">Events</span>
          </motion.h1>
          {/* search adn filteration section*/}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            {/* searchbar by word row */}
            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search events by keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-accent outline-none py-3 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500 text-lg"
              />
            </div>
            {/* filteration row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                
                {/* category */}
                <div className="relative">
                    <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat} className="bg-white dark:bg-black">
                                {/* shows the word category only if it's all */}
                                {cat === "All" ? "All (Category)" : cat}
                            </option>
                        ))}
                    </select>
                </div>
                {/* status */}
                <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${selectedStatus === 'All' ? 'bg-gray-400' : selectedStatus === 'Open' ? 'bg-green-500' : selectedStatus === 'Closed' ? 'bg-red-500' : 'bg-accent'}`} />
                    <select 
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                    >
                        {statuses.map(stat => (
                            <option key={stat} value={stat} className="bg-white dark:bg-black">
                                {/* shows the word status only if it's all */}
                                {stat === "All" ? "All (Status)" : stat}
                            </option>
                        ))}
                    </select>
                </div>
                {/* date sort */}
                <div className="relative">
                    <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select 
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                    >
                        {sortOptions.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-white dark:bg-black">{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>
          </div>
        </div>
        {/* events grid */}
        {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start justify-items-center">
                {filteredEvents.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-full flex justify-center"
                    >
                        <EventCard 
                            event={event} 
                            disableLink={true} 
                            onOpen={() => handleOpenModal(event.id)} 
                        />
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="text-center text-gray-500 mt-12">
                <p>No events found matching your criteria.</p>
                <button 
                    onClick={clearFilters}
                    className="mt-4 text-accent hover:underline font-bold"
                >
                    Reset All Filters
                </button>
            </div>
        )}
      </div>
      {/* popup modal */}
      <AnimatePresence>
        {selectedEvent && (
            <EventModal 
                event={selectedEvent} 
                isOpen={!!selectedEvent} 
                onClose={handleCloseModal} 
            />
        )}
      </AnimatePresence>

    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Events...</div>}>
      <EventsContent />
    </Suspense>
  );
}