"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";
import { authAPI } from "@/lib/authApis"; // Make sure this wraps axios
import axios from "axios";

type User = {
  id: string | number;
  name: string;
  email: string;
} | null;

type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
};

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("access_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      // axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }

    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authAPI.login(email, password);
      const { access_token, user } = response;

      if (!access_token) throw new Error("Missing access token");

      const userInfo = {
        id: user?.id ?? null,
        name: user?.name ?? null,
        email: user?.email ?? null,
      };

      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      localStorage.setItem("access_token", access_token);

      // Optional: set default Authorization header for future API calls
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

      toast.success("تم تسجيل الدخول بنجاح");
    } catch (error: any) {
      console.error("Login error:", error?.response?.data || error);
      toast.error(
        error?.response?.data?.message === "Unauthorized"
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة."
          : "فشل تسجيل الدخول"
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const response = await authAPI.register({
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
      // console.log({ response });
      const accessToken = response.access_token;
      const userInfo = {
        id: response.user.id,
        name: response.user.name,
        email: response.user.email,
      };

      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      localStorage.setItem("access_token", accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      toast.success("تم إنشاء الحساب بنجاح");
    } catch (error: any) {
      toast.error("فشل إنشاء الحساب");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      delete axios.defaults.headers.common.Authorization;

      toast.success("تم تسجيل الخروج بنجاح");
    } catch (error) {
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
