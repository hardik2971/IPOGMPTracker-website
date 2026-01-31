// src/api/axios.ts
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "./endpoints";
import { ApiError } from "@/types/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data, // Returns unwrapped data
  (error: AxiosError<ApiError>) => {
    if (!error.response) {
      const apiError: ApiError = {
        success: false,
        message: "Network error. Please check your internet connection.",
        statusCode: undefined,
      };
      return Promise.reject(apiError);
    }

    const { status, data } = error.response;
    let message: string;

    switch (status) {
      case 401:
        message = data?.message || "Session expired. Please login again.";
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        break;
      case 403:
        message = data?.message || "You do not have permission.";
        break;
      case 404:
        message = data?.message || "Resource not found.";
        break;
      case 500:
        message = "Internal server error. Please try again later.";
        break;
      case 503:
        message = "Service unavailable. Please try again later.";
        break;
      default:
        message =
          data?.message || error.message || "An unexpected error occurred.";
    }

    const apiError: ApiError = {
      success: false,
      message,
      errors: data?.errors,
      statusCode: status,
    };

    return Promise.reject(apiError);
  }
);

// Custom typed API client
const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.get(url, config);
  },

  post: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.post(url, data, config);
  },

  put: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.put(url, data, config);
  },

  patch: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.patch(url, data, config);
  },

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.delete(url, config);
  },
};

export default apiClient;
