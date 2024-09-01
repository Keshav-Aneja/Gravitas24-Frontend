import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/constants/routes";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("token");
    // if (token && token !== "") {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcnQiOjE3MjUxOTAyNjUsImV4cCI6MTc0MzE5MDI2NSwicmR0Ijp0cnVlLCJzdWIiOiJlMzBhYTgzYy1hOTQyLTQwYWQtYTBjZC00MTJkZTljMzc3ODIifQ.PXrI2ebdlmKWe3D5M5jxqlXAetKDm6G99WSXckidjEw`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
