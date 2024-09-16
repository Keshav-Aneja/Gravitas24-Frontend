import axiosInstance from "@/config/axios";
import { responseData } from "./post_handler";

export default async function getHandler(
  URL: string,
  params?: any
): Promise<responseData> {
  const headers = {
    "Content-Type": "application/json",
  };
  const response: responseData = {
    success: false,
    data: null,
    message: "",
    status: 500,
  };
  try {
    const res = await axiosInstance.get(URL, { headers, params });
    response.success = res.data.success;
    response.data = res.data.data || res.data.user;
    response.message = res.data.message;
    response.status = res.status;
  } catch (err: any) {
    if (err.response) {
      response.success = false;
      response.data = err.response.data;
      response.message = err.response.data.message || err.message;
      response.status = err.response.status;
    } else if (err.request) {
      response.success = false;
      response.data = null;
      response.message = "No response received from server";
      response.status = 503;
    } else {
      response.success = false;
      response.data = null;
      response.message = err.message;
      response.status = 500;
    }
  }
  return response;
}
