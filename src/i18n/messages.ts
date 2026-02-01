// src/i18n/messages.ts
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const messages = {
  en,
  ar,
} as const;

export type Locale = keyof typeof messages;
export type Messages = (typeof messages)["en"];
