import type { MetadataRoute } from "next";

const BASE = "https://tools.dhlm-studio.com";

const routes = [
  "",
  "salary", "severance", "loan", "vat", "deposit", "margin", "youtube", "percent",
  "exchange", "time", "gold", "hourly", "loan-compare", "rent-vs-buy", "investment-return", "coupang-fee",
  "bmi", "age", "date", "unit-converter", "stopwatch", "calorie", "tip-calculator", "countdown", "electricity", "typing-speed",
  "unit-weight", "cpk", "uph", "defect", "oee",
  "json", "base64", "jwt", "cron", "sql", "color-picker", "lorem-ipsum", "url-encoder", "regex-tester",
  "ip-check", "screen-size", "markdown-preview", "font-preview", "tax-calculator", "timestamp", "subnet", "chmod",
  "binary-converter", "html-entity",
  "image-compress", "image-convert", "image-resize", "youtube-thumbnail", "qr",
  "resign-letter", "reject-message", "congratulation", "annual-leave", "late-excuse", "text-summary", "character-count", "text-transform",
  "nickname-gen", "company-name-gen", "team-name-gen", "random-picker", "password-gen", "hashtag-gen", "emoji-search", "random-number", "morse-code",
  "deposit-compare", "card-compare", "phone-compare",
  "privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
