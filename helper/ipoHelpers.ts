// src/helpers/ipoHelpers.ts
import type { Ipo } from "@/types/api/ipo";
import { DisplayIpo } from "@/types/ipo";

export const formatDateRange = (open: string, close: string): string => {
  if (!open || !close) return "-";
  const openDate = new Date(open);
  const closeDate = new Date(close);
  if (isNaN(openDate.getTime()) || isNaN(closeDate.getTime())) return "-";

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  return `${openDate.toLocaleDateString(
    "en-US",
    options
  )} - ${closeDate.toLocaleDateString("en-US", options)}`;
};

export const stripHtml = (html: string): string =>
  html ? html.replace(/<[^>]*>?/gm, "").trim() : "";

export const mapApiIpoToDisplay = (ipo: Ipo): DisplayIpo => ({
  name: ipo.name,
  // API doesn’t give board type; keep "Mainboard" to preserve UI
  boardType: "Mainboard",
  isLive: ipo.current_status === "open",
  allotmentAwaited: Boolean(ipo.allotment_link),
  offerDate: formatDateRange(ipo.open, ipo.close),
  offerPrice:
    ipo.min_price && ipo.max_price
      ? ipo.min_price === ipo.max_price
        ? ipo.min_price
        : `${ipo.min_price}-${ipo.max_price}`
      : "-",
  lotSize: ipo.lot_size ? String(ipo.lot_size) : "-",
  // API doesn’t give subscription; keep UI, use placeholder
  subscription: "-",
  expPremium: stripHtml(ipo.premium) || "-",
});
