import { IHall } from "@/types/hall";

// services/halls.ts
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

  const response = await fetch(`${API_BASE_URL}/halls?${query.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch halls");
  }

  return response.json();
};

export const fetchHallBySlug = async (slug: string): Promise<HallResponse> => {
  if (!slug) {
    throw new Error("Slug is required");
  }
  // Encode Arabic and special characters if not already encoded
  const encodedSlug = encodeURIComponent(decodeURIComponent(slug));

  try {
    const response = await fetch(`${API_BASE_URL}/halls/${encodedSlug}`);
    // console.log({ response });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Failed to fetch hall details: ${response.status}`
      );
    }

    return response.json();
  } catch (error) {
    // console.error("Error fetching hall by slug:", error);
    throw error;
  }
};
