"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Event } from "@/data/events";
import { useMemo, useState } from "react";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaLink,
  FaCheck,
  FaEnvelope,
} from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

// import default image as module to get correct path (fixes GitHub Pages issue)
import defaultEventImg from "../../../public/assets/event-default.png";

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

// 2. HELPER FUNCTION (Fixes Paths for GitHub Pages)
const resolveImagePath = (path: string | undefined) => {
  // If no image path exists in the data, return the imported default object
  if (!path) return defaultEventImg;
  // If it's an external link (http...), leave it alone
  if (path.startsWith("http")) return path;
  // If we are in Production (GitHub), add the repo prefix
  const prefix = process.env.NODE_ENV === "production" ? "/website_frontend" : "";

  // Return fixed path (e.g., "/website_frontend/assets/event1.jpg")
  return `${prefix}${path}`;
};

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const { locale, t } = useI18n();
  const [copied, setCopied] = useState(false);

  // SAFE EXTRACTION START 
  const eventTitle = event?.title || "";
  const eventDate = event?.date || "";
  const eventLocation = event?.location || "";
  const eventId = event?.id || "";

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/events?id=${eventId}`
      : "";

  const shareText = useMemo(
    () => t.events.share.text.replace("{title}", eventTitle),
    [t, eventTitle]
  );

  const emailSubject = useMemo(
    () => t.events.share.emailSubject.replace("{title}", eventTitle),
    [t, eventTitle]
  );

  const emailBody = useMemo(() => {
    return t.events.share.emailBody
      .replace("{title}", eventTitle)
      .replace("{date}", eventDate)
      .replace("{location}", eventLocation)
      .replace("{url}", shareUrl);
  }, [t, eventTitle, eventDate, eventLocation, shareUrl]);
  // SAFE EXTRACTION END 

  // 3. CONDITIONAL RETURN (Must be AFTER hooks)
  if (!event || !isOpen) return null;

  // helper to get img url
  const imageUrl = resolveImagePath(event.image);

  const statusLabel =
    event.status === "Open"
      ? t.events.status.open
      : event.status === "Closed"
      ? t.events.status.closed
      : t.events.status.other;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-white dark:bg-[#121212] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="relative h-48 md:h-64 w-full shrink-0">
          {/* use url */}
          <Image src={imageUrl} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md z-10"
            aria-label={t.events.modal.close}
          >
            <FaTimes />
          </button>

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block ${
                event.status === "Open"
                  ? "bg-green-500 text-white"
                  : event.status === "Closed"
                  ? "bg-red-500 text-white"
                  : "bg-accent text-black"
              }`}
            >
              {statusLabel}
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {event.title}
            </h2>
          </div>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
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

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t.events.modal.about}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {event.fullDetails || event.description}
            </p>
          </div>

          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t.events.modal.speakers}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {speaker.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">
                        {speaker.name}
                      </p>
                      <p className="text-gray-500 text-xs">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 pt-4 border-t border-gray-200 dark:border-white/10">
            <div className="flex-1">
              {event.resources && (
                <>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {t.events.modal.resources}
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    {event.resources.github && (
                      <a
                        href={event.resources.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl" /> <span>GitHub</span>
                      </a>
                    )}

                    {event.resources.youtube && (
                      <a
                        href={event.resources.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <FaYoutube className="text-xl" /> <span>YouTube</span>
                      </a>
                    )}

                    {event.resources.slides && (
                      <a
                        href={event.resources.slides}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                      >
                        <span className="text-xl">📄</span>{" "}
                        <span>{t.events.modal.slides}</span>
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t.events.modal.shareTitle}
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-white transition-colors"
                  title={t.events.share.copyLink}
                  aria-label={t.events.share.copyLink}
                >
                  {copied ? <FaCheck className="text-green-500" /> : <FaLink />}
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    shareText + " " + shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#25D366] text-white hover:brightness-110 transition-all"
                  title={t.events.share.whatsapp}
                  aria-label={t.events.share.whatsapp}
                >
                  <FaWhatsapp />
                </a>

                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    emailSubject
                  )}&body=${encodeURIComponent(emailBody)}`}
                  className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-all"
                  title={t.events.share.email}
                  aria-label={t.events.share.email}
                >
                  <FaEnvelope />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#1877F2] text-white hover:brightness-110 transition-all"
                  title={t.events.share.facebook}
                  aria-label={t.events.share.facebook}
                >
                  <FaFacebook />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#0A66C2] text-white hover:brightness-110 transition-all"
                  title={t.events.share.linkedin}
                  aria-label={t.events.share.linkedin}
                >
                  <FaLinkedin />
                </a>
              </div>

              {copied && (
                <p className="mt-3 text-sm text-green-600 dark:text-green-400">
                  {t.events.share.copied}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}