import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export type Translations = typeof en;

export const translations: Record<Lang, Translations> = { en, es };

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "es") return "es";
  return "en";
}

const SPANISH_LOCALES = ["es"];

export function detectLangFromHeader(acceptLanguage: string): Lang {
  const locales = acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase().slice(0, 2));
  if (locales.some((l) => SPANISH_LOCALES.includes(l))) return "es";
  return "en";
}
