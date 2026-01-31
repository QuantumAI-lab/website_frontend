"use client";

import { events } from "@/data/events";
import EventCard from "./EventCard";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
    // process events to get upcoming/open ones, sorted by date
  const sortedEvents = events
    .filter(event => event.status !== "Closed") // Remove closed events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Take the first 3 active events
  const featuredEvents = sortedEvents.slice(0, 3);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent relative z-10">
       <div className="max-w-7xl mx-auto">
        
        {/* title */}
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-primary mb-12"
        >
            Upcoming Events
        </motion.h2>

        {/* events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {featuredEvents.map((event, index) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }} 
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
                    <EventCard event={event} />
                </motion.div>
            ))}
        </div>

       </div>
    </section>
  );
}