// api/endpoints.ts
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const ENDPOINTS = {
  IPO: {
    GET_ALL: "/ipos",
  },
} as const;
