// src/components/QuantumIntro/QuantumIntro.tsx
"use client";

import CardSection from "../Cards/Cards";
import { FaRoute, FaShieldAlt, FaFlask } from "react-icons/fa";
import { useMemo } from "react";

import { useI18n } from "@/i18n/LocaleProvider";

export default function QuantumIntro() {
  const { t } = useI18n();

  const features = useMemo(
    () => [
      {
        icon: <FaRoute className="text-5xl text-accent" />,
        title: t.quantumIntro.features.optimization.title,
        desc: t.quantumIntro.features.optimization.desc,
      },
      {
        icon: <FaShieldAlt className="text-5xl text-blue-400" />,
        title: t.quantumIntro.features.security.title,
        desc: t.quantumIntro.features.security.desc,
      },
      {
        icon: <FaFlask className="text-5xl text-purple-400" />,
        title: t.quantumIntro.features.simulation.title,
        desc: t.quantumIntro.features.simulation.desc,
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