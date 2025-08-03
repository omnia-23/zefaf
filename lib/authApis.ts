import api from "./client";

// Auth API methods
export const authAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  register: async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    try {
      const response = await api.post("/register", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  //   logout: async () => {
  //     try {
  //       const response = await api.post("/logout");
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
};
