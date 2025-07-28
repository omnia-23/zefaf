"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

// Validation schema
const schema = yup
  .object({
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: yup
      .string()
      .required("كلمة المرور مطلوبة")
      .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoginError("");

    try {
      await login(data.email, data.password);
      // Redirect to protected area after successful login
      router.push("/");
    } catch (error) {
      setLoginError(
        "فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك."
      );
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">تسجيل الدخول</h1>
        <p className="text-gray-600 my-2 text-sm leading-relaxed">
          أنشئ حسابك اليوم للاستفادة من خدماتنا المتميزة في تنظيم حفلات الزفاف
          والمناسبات
        </p>
      </div>

      <div className="mt-8">
        {loginError && (
          <div className="rounded-md bg-red-50 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                {/* Error icon */}
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-3">
                <h3 className="text-sm font-medium text-red-800">
                  {loginError}
                </h3>
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Create New Account Header */}
          <h2 className="text-base font-bold text-gray-800">تسجيل الدخول</h2>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              البريد الإلكتروني
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="أدخل بريدك الإكتروني......."
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-right"
                required
                {...register("password")}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="mr-2 block text-sm text-gray-900"
              >
                تذكرني
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-[#DB0962] hover:text-[#DB0962]"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DB0962] hover:bg-[#DB0962] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB0962] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              تسجيل الدخول
            </button>

            <div className="text-center text-sm mt-5">
              ليس لديك حساب؟{" "}
              <Link
                href="/auth/register"
                className="text-sm font-medium text-[#DB0962] hover:text-[#C30854] underline"
              >
                إنشاء حساب جديد
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
