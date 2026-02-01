// src/i18n/LocaleProvider.tsx
"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { messages, type Locale, type Messages } from "./messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string): value is Locale {
  return value === "en" || value === "ar";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

const applyDocumentLocale = (l: Locale) => {
  const root = document.documentElement;

  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";

  if (l === "ar") {
    root.classList.add("font-ar");
    root.classList.remove("font-en");
  } else {
    root.classList.add("font-en");
    root.classList.remove("font-ar");
  }
};


  useEffect(() => {
    const saved = window.localStorage.getItem("locale");
    if (saved && isLocale(saved)) {
      setLocaleState(saved);
      applyDocumentLocale(saved);
    } else {
      applyDocumentLocale("en");
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem("locale", l);
    applyDocumentLocale(l);
  };

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used inside LocaleProvider");
  return ctx;
}
