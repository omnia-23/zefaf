import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchOffers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zafafOffers`);
    return response;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch offers"

    );
  }
};
