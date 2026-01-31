"use client";

import Image from "next/image";
import Link from "next/link";
import { Event } from "@/data/events";
import { FaMapMarkerAlt } from "react-icons/fa";

interface EventCardProps {
  event: Event;
  disableLink?: boolean;     // if true then the button opens modal
  onOpen?: () => void;       // callback to open modal
}

export default function EventCard({ event, disableLink = false, onOpen }: EventCardProps) {
  const imageUrl = event.image || "/assets/event-default.png";

  return (
    <div className="relative w-full h-[380px] rounded-2xl overflow-hidden group border border-white/10 shadow-lg transition-transform hover:scale-[1.02] bg-white/5 backdrop-blur-sm flex flex-col">
      
      {/* top section for image*/}
      <div className="relative h-[220px] w-full shrink-0">
        
        {/* background image */}
        <Image
          src={imageUrl}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-transform duration-500 group-hover:scale-110" />

        {/* status badge */}
        <div className="absolute top-4 left-4">
             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                event.status === 'Open' ? 'bg-green-500/80 text-white' : 
                event.status === 'Closed' ? 'bg-red-500/80 text-white' : 
                'bg-accent/80 text-black'
             }`}>
                {event.status}
             </span>
        </div>
      </div>

      {/* bottom section for content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
            {/* title and date */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2">
                {event.title}
              </h3>
              <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
                 <span>{event.date}</span>
                 <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-accent" /> {event.location}</span>
              </div>
            </div>

            {/* see more logic based on page */}
            <div className="w-full pt-4">
                {disableLink ? (
                    //if events page then open modal button
                    <button 
                        onClick={onOpen}
                        className="w-full py-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 rounded-lg text-sm text-gray-900 dark:text-white transition-all font-bold"
                    >
                        See Details
                    </button>
                ) : (
                    //if landing page then link to event page
                    <Link href={`/events?id=${event.id}`} className="block w-full">
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-gray-900 dark:text-white transition-all font-bold">
                            See More
                        </button>
                    </Link>
                )}
            </div>
      </div>

    </div>
  );
}