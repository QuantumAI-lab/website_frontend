"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Event } from "@/data/events";
import { useState } from "react";
import { 
    FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaGithub, FaYoutube, 
    FaFacebook, FaWhatsapp, FaLinkedin, FaLink, FaCheck, FaEnvelope, FaTelegramPlane
} from "react-icons/fa";

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const [copied, setCopied] = useState(false);

  if (!event || !isOpen) return null;

  const imageUrl = event.image || "/assets/event-default.png";
  
  //construct url "Client side"
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/events?id=${event.id}` : '';
  
  //custom message for sharing based on the platform
  const shareText = `Check out this event: ${event.title} by EgQCC!`;
  const emailSubject = `Invitation: ${event.title}`;
  const emailBody = `Hi,\n\nI found this event and thought you might be interested:\n\n${event.title}\nDate: ${event.date}\nLocation: ${event.location}\n\nSee details here: ${shareUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); //reset checkmark after 2s
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* BACKDROP */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/*modal popup content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-white dark:bg-[#121212] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        
        {/*image of the header*/}
        <div className="relative h-48 md:h-64 w-full shrink-0">
            <Image
                src={imageUrl}
                alt={event.title}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* close button */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md z-10"
            >
                <FaTimes />
            </button>

            {/* title overlay and status */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block ${
                    event.status === 'Open' ? 'bg-green-500 text-white' : 
                    event.status === 'Closed' ? 'bg-red-500 text-white' : 
                    'bg-accent text-black'
                 }`}>
                    {event.status}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {event.title}
                </h2>
            </div>
        </div>

        {/* scrolling for body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
            
            {/* date and location row */}
            <div className="flex flex-wrap gap-6 mb-6 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-white/10 pb-6">
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span className="font-medium">{event.location}</span>
                </div>
            </div>

            {/* description of the event */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About Event</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {event.fullDetails || event.description}
                </p>
            </div>

            {/* speakers */}
            {event.speakers && event.speakers.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Speakers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {event.speakers.map((speaker, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                    {speaker.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm">{speaker.name}</p>
                                    <p className="text-gray-500 text-xs">{speaker.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* resources and share links on two columns */}
            <div className="flex flex-col md:flex-row gap-8 pt-4 border-t border-gray-200 dark:border-white/10">
                
                {/* resources */}
                <div className="flex-1">
                    {event.resources && (
                        <>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Resources</h3>
                            <div className="flex flex-wrap gap-4">
                                {event.resources.github && (
                                    <a href={event.resources.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                        <FaGithub className="text-xl" /> <span>GitHub</span>
                                    </a>
                                )}
                                {event.resources.youtube && (
                                    <a href={event.resources.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                                        <FaYoutube className="text-xl" /> <span>YouTube</span>
                                    </a>
                                )}
                                {event.resources.slides && (
                                    <a href={event.resources.slides} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                                        <span className="text-xl">📄</span> <span>Slides</span>
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* share column "NOTE" GET BACK FOR EDITING DIRECT MESSAGE */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Share via Message</h3>
                    <div className="flex flex-wrap items-center gap-3">
                        {/* copy Link */}
                        <button 
                            onClick={handleCopy}
                            className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-white transition-colors relative group"
                            title="Copy Link"
                        >
                            {copied ? <FaCheck className="text-green-500" /> : <FaLink />}
                        </button>

                        {/* whatsapp */}
                        <a 
                            href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-3 rounded-full bg-[#25D366] text-white hover:brightness-110 transition-all"
                            title="Send via WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        {/* email */}
                        <a 
                            href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                            className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-all"
                            title="Send via Email"
                        >
                            <FaEnvelope />
                        </a>

                        {/* facebook */}
                        <a 
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-3 rounded-full bg-[#1877F2] text-white hover:brightness-110 transition-all"
                            title="Share on Facebook (Select 'Send in Messenger')"
                        >
                            <FaFacebook />
                        </a>

                        {/* linkedin */}
                        <a 
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-3 rounded-full bg-[#0A66C2] text-white hover:brightness-110 transition-all"
                            title="Share on LinkedIn (Select 'Send as Message')"
                        >
                            <FaLinkedin />
                        </a>
                        
                    </div>
                </div>

            </div>
        </div>

      </motion.div>
    </div>
  );
}