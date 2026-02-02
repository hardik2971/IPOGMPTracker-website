// src/api/ipo.ts

import { Ipo, IpoResponse } from "@/types/api/ipo";
import apiClient from "./axios";
import { ENDPOINTS } from "./endpoints";
import { ApiResponse } from "@/types/api";

export const ipoApi = {
  getAllIpos: async (): Promise<IpoResponse> => {
    const response = await apiClient.get<ApiResponse<IpoResponse>>(
      ENDPOINTS.IPO.GET_ALL
    );
    const { count, data } = response.data;
    return { count, data };
  },
};
