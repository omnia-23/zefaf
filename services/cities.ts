import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCities = async (params: { country_id: string }) => {
  try {
    const { country_id } = params;
    const response = await axios.get(
      `${API_BASE_URL}/cities?country_id=${country_id}`
    );
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch cities");
  }
};
