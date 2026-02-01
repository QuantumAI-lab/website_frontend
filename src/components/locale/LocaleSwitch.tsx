// src/components/locale/LocaleSwitch.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LocaleSwitch() {
  const pathname = usePathname();

  const toEnglish = pathname.replace(/^\/ar\b/, "/en");
  const toArabic = pathname.replace(/^\/en\b/, "/ar");

  return (
    <div className="flex gap-3">
      <Link href={toEnglish} className="text-sm underline">
        EN
      </Link>
      <Link href={toArabic} className="text-sm underline">
        AR
      </Link>
    </div>
  );
}
