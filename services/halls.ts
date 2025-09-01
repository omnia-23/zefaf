import { BookingPayloadType, FormInputsType, IHall } from "@/types/hall";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface HallsResponse {
  data: IHall[];
  total: number;
}

export interface HallResponse {
  data: IHall;
}

export const fetchHalls = async (params: {
  bedrooms?: string;
  city?: string;
  area?: string;
  sort?: string;
  page?: number;
  limit?: number;
}): Promise<HallsResponse> => {
  const query = new URLSearchParams();

  if (params.bedrooms) query.append("bedrooms", params.bedrooms);
  if (params.city) query.append("city", params.city);
  if (params.area) query.append("area", params.area);
  if (params.sort) query.append("sort", params.sort);
  if (params.page) query.append("page", params.page.toString());
  if (params.limit) query.append("limit", params.limit.toString());

  try {
    const response = await axios.get<HallsResponse>(
      `${API_BASE_URL}/halls?${query.toString()}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch halls");
  }
};

export const fetchHallBySlug = async (slug: string): Promise<HallResponse> => {
  if (!slug) throw new Error("Slug is required");

  const encodedSlug = encodeURIComponent(decodeURIComponent(slug));

  try {
    const response = await axios.get<HallResponse>(
      `${API_BASE_URL}/halls/${encodedSlug}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        `Failed to fetch hall details: ${error.response?.status || "Unknown"}`
    );
  }
};

export const sendFormSubmit = async (
  slug: string,
  formData: BookingPayloadType
): Promise<any> => {
  if (!slug) throw new Error("Slug is required");

  const encodedSlug = encodeURIComponent(decodeURIComponent(slug));

  try {
    const response = await axios.post(
      `${API_BASE_URL}/halls/${encodedSlug}/leads`,
      formData
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        `Failed to submit form: ${error.response?.status || "Unknown"}`
    );
  }
};
