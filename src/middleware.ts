import { defineMiddleware } from "astro:middleware";
import { detectLangFromHeader } from "./i18n";

export const onRequest = defineMiddleware((context, next) => {
  const { url, request, cookies } = context;
  const pathname = url.pathname;

  // Don't redirect for API routes, static assets, or already on /es/
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/es") ||
    pathname.includes(".")
  ) {
    return next();
  }

  // Respect stored language preference
  const langCookie = cookies.get("lang")?.value;
  if (langCookie === "es") {
    return context.redirect("/es/", 302);
  }
  if (langCookie === "en") {
    return next();
  }

  // Auto-detect from Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language") ?? "";
  const detectedLang = detectLangFromHeader(acceptLanguage);

  if (detectedLang === "es") {
    return context.redirect("/es/", 302);
  }

  return next();
});
