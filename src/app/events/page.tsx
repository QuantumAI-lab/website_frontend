// from src/app/events/page.tsx
"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard/EventCard";
import EventModal from "@/components/EventModal/EventModal";
import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

type CategoryKey = "all" | "hackathon" | "workshop" | "lecture" | "meetup";
type StatusKey = "all" | "upcoming" | "open" | "closed";
type SortKey = "earliest" | "latest";

function EventsContent() {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("id");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [selectedStatus, setSelectedStatus] = useState<StatusKey>("all");
  const [sortOrder, setSortOrder] = useState<SortKey>("earliest");

  const selectedEvent = useMemo(() => {
    if (!highlightId) return null;
    return events.find((e) => e.id === highlightId) || null;
  }, [highlightId]);

  const categoryOptions = useMemo(
    () =>
      [
        { value: "all", label: t.eventsPage.filters.categoryAll },
        { value: "hackathon", label: t.eventsPage.filters.categoryHackathon },
        { value: "workshop", label: t.eventsPage.filters.categoryWorkshop },
        { value: "lecture", label: t.eventsPage.filters.categoryLecture },
        { value: "meetup", label: t.eventsPage.filters.categoryMeetup },
      ] as const,
    [t],
  );

  const statusOptions = useMemo(
    () =>
      [
        { value: "all", label: t.eventsPage.filters.statusAll },
        { value: "upcoming", label: t.eventsPage.filters.statusUpcoming },
        { value: "open", label: t.eventsPage.filters.statusOpen },
        { value: "closed", label: t.eventsPage.filters.statusClosed },
      ] as const,
    [t],
  );

  const sortOptions = useMemo(
    () =>
      [
        { value: "earliest", label: t.eventsPage.filters.sortEarliest },
        { value: "latest", label: t.eventsPage.filters.sortLatest },
      ] as const,
    [t],
  );

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const matchesSearch =
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" ||
          event.category.toLowerCase() === selectedCategory;

        const matchesStatus =
          selectedStatus === "all" ||
          event.status.toLowerCase() === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "earliest" ? dateA - dateB : dateB - dateA;
      });
  }, [searchTerm, selectedCategory, selectedStatus, sortOrder]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSortOrder("earliest");
  };

  const handleOpenModal = (id: string) => {
    router.push(`?id=${id}`, { scroll: false });
  };

  const handleCloseModal = () => {
    router.push("/events", { scroll: false });
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
          >
            {t.eventsPage.titlePrefix}{" "}
            <span className="text-accent">{t.eventsPage.titleHighlight}</span>
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            {/* Search */}
            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.eventsPage.filters.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-accent outline-none py-3 pl-10 pr-4 text-gray-800 dark:text-white transition-colors placeholder-gray-500 text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Category */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                <select
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(e.target.value as CategoryKey)
                  }
                  className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                >
                  {categoryOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-white dark:bg-black"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div className="relative">
                <div
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                    selectedStatus === "all"
                      ? "bg-gray-400"
                      : selectedStatus === "open"
                        ? "bg-green-500"
                        : selectedStatus === "closed"
                          ? "bg-red-500"
                          : "bg-accent"
                  }`}
                />
                <select
                  value={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus(e.target.value as StatusKey)
                  }
                  className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                >
                  {statusOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-white dark:bg-black"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortKey)}
                  className="w-full bg-gray-100 dark:bg-white/10 rounded-lg py-3 pl-8 pr-4 text-gray-800 dark:text-white outline-none cursor-pointer border border-transparent hover:border-accent transition-all appearance-none text-sm"
                >
                  {sortOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-white dark:bg-black"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
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
            <p>{t.eventsPage.emptyState}</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-accent hover:underline font-bold"
            >
              {t.eventsPage.resetFilters}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <EventsContent />
    </Suspense>
  );
}
