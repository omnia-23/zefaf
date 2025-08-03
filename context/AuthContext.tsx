"use client";
import { authAPI } from "@/lib/authApis";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast, Toaster } from "react-hot-toast";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type registerData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
};

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: registerData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Call the login API
      const response = await authAPI.login(email, password);

      // Set user data from response
      const userData = {
        id: response.user.id,
        name:
          response.user.name ||
          `${response.user.first_name} ${response.user.last_name}`,
        email: response.user.email,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      // Show success toast
      toast.success("تم تسجيل الدخول بنجاح");
    } catch (error: any) {
      // Show error toast
      toast.error(error.response?.data?.message || "فشل تسجيل الدخول");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: registerData) => {
    setIsLoading(true);
    try {
      // Call the register API
      const response = await authAPI.register({
        name: `${userData.first_name} ${userData.last_name}`,// Combine first and last name
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
      });
      console.log({ response });
      // Set user data from response
      const userInfo = {
        id: response.user.id,
        name: `${userData.first_name} ${userData.last_name}`,
        email: userData.email,
      };
      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));

      // Show success toast
      toast.success("تم إنشاء الحساب بنجاح");
    } catch (error: any) {
      // Show error toast
      toast.error("فشل إنشاء الحساب");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Call the logout API
      // await authAPI.logout();

      // Clear user data
      setUser(null);
      localStorage.removeItem("user");

      // Show success toast
      toast.success("تم تسجيل الخروج بنجاح");
    } catch (error: any) {
      // Show error toast but still clear local data
      toast.error("حدث خطأ أثناء تسجيل الخروج");
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      <Toaster position="top-center" />
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
