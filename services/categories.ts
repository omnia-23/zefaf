import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/main-categories?is_active=1`
    );
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch categories");
  }
};
