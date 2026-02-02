// api/endpoints.ts
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://46.202.167.173:33669/api";

export const ENDPOINTS = {
  IPO: {
    GET_ALL: "/ipos",
  },
} as const;
