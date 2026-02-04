// src/api/ipo.ts

import { IpoParams, IpoResponse } from "@/types/api/ipo";
import apiClient from "./axios";
import { ENDPOINTS } from "./endpoints";
import { ApiResponse } from "@/types/api";

export const ipoApi = {
  getAllIpos: async ({ page, limit = 10 }: IpoParams): Promise<IpoResponse> => {
    const response = await apiClient.get<ApiResponse<IpoResponse>>(
      `${ENDPOINTS.IPO.GET_ALL}?page=${page}&limit=${limit}`
    );
    const { count, data, pagination } = response.data;
    return { count, data, pagination };
  },
};
