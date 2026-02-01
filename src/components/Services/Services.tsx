// src/components/Services/Services.tsx
"use client";

import CardSection from "../Cards/Cards";
import { FaGraduationCap, FaTrophy, FaUniversity } from "react-icons/fa";
import { useMemo } from "react";

import { useI18n } from "@/i18n/LocaleProvider";

export default function Services() {
  const { t } = useI18n();

  const features = useMemo(
    () => [
      {
        icon: <FaGraduationCap className="text-5xl text-accent" />,
        title: t.services.features.education.title,
        desc: t.services.features.education.desc,
      },
      {
        icon: <FaTrophy className="text-5xl text-green-400" />,
        title: t.services.features.events.title,
        desc: t.services.features.events.desc,
      },
      {
        icon: <FaUniversity className="text-5xl text-blue-400" />,
        title: t.services.features.universityChapters.title,
        desc: t.services.features.universityChapters.desc,
      },
    ],
    [t],
  );

  return (
    <CardSection
      title={t.services.title}
      highlightedWord={t.services.highlightedWord}
      subtitle={t.services.subtitle}
      features={features}
    />
  );
}
