// src/components/EventCard/EventCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Event } from "@/data/events";
import { FaMapMarkerAlt, FaGraduationCap, FaNetworkWired } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";
import defaultEventImg from "../../../public/assets/event-default.png";

interface EventCardProps {
  event: Event;
  disableLink?: boolean;
  onOpen?: () => void;
}

const resolveImagePath = (path: string | undefined) => {
  if (!path) return defaultEventImg;
  if (path.startsWith("http")) return path;
  const prefix = process.env.NODE_ENV === "production" ? "/website_frontend" : "";
  return `${prefix}${path}`;
};

export default function EventCard({ event, disableLink = false, onOpen }: EventCardProps) {
  const { t } = useI18n();
  const imageUrl = resolveImagePath(event.image);

  let statusLabel = "";
  let statusColor = "";
  switch (event.status) {
    case "Upcoming":
      statusLabel = t.events.status.other;
      statusColor = "bg-blue-500";
      break;
    case "Open":
      statusLabel = t.events.status.open;
      statusColor = "bg-green-500";
      break;
    case "Closed":
      statusLabel = t.events.status.closed;
      statusColor = "bg-gray-500";
      break;
  }

  // Dynamic color logic matching the Resource Cards
  const getLevelColor = () => {
    switch (event.level) {
      case "Beginner": return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      default: return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={imageUrl} alt={event.title} fill unoptimized={true} className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-4 end-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${statusColor}`}>
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow justify-between">
        <div>
          {/* Field & Level Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-accent/10 text-accent border border-accent/20 flex items-center gap-1 w-fit">
              <FaNetworkWired size={10} />
              {event.field}
            </span>
            
            {/* Applied dynamic colors */}
            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border flex items-center gap-1 w-fit ${getLevelColor()}`}>
              <FaGraduationCap size={12} />
              {event.level}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2">
            {event.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-2">
            {event.description}
          </p>

          <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm mt-4">
            <span className="font-medium">{event.date}</span>
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <FaMapMarkerAlt className="text-accent" />
              <span className="truncate max-w-30">{event.location}</span>
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full pt-6">
          {disableLink ? (
            <button onClick={onOpen} className="w-full py-2.5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-sm text-gray-900 dark:text-white transition-all font-bold">
              {t.events.card.seeDetails}
            </button>
          ) : (
            <Link href={`/events?id=${event.id}`} className="block w-full">
              <button className="w-full py-2.5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-sm text-gray-900 dark:text-white transition-all font-bold">
                {t.events.card.seeDetails}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}