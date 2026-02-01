// src/components/QuantumIntro/QuantumIntro.tsx
"use client";

import CardSection from "../Cards/Cards";
import { FaAtom, FaProjectDiagram, FaRocket } from "react-icons/fa";
import { useMemo } from "react";

import { useI18n } from "@/i18n/LocaleProvider";

export default function QuantumIntro() {
  const { t } = useI18n();

  const features = useMemo(
    () => [
      {
        icon: <FaAtom className="text-5xl text-accent" />,
        title: t.quantumIntro.features.superposition.title,
        desc: t.quantumIntro.features.superposition.desc,
      },
      {
        icon: <FaProjectDiagram className="text-5xl text-blue-400" />,
        title: t.quantumIntro.features.entanglement.title,
        desc: t.quantumIntro.features.entanglement.desc,
      },
      {
        icon: <FaRocket className="text-5xl text-purple-400" />,
        title: t.quantumIntro.features.exponentialSpeed.title,
        desc: t.quantumIntro.features.exponentialSpeed.desc,
      },
    ],
    [t],
  );

  return (
    <CardSection
      title={t.quantumIntro.title}
      highlightedWord={t.quantumIntro.highlightedWord}
      subtitle={t.quantumIntro.subtitle}
      features={features}
    />
  );
}
