"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

import IntlPhoneInput, { PhoneInputRef } from "@/components/shared/PhoneInput";

// Validation schema
const schema = yup
  .object({
    first_name: yup.string().required("الاسم الاول مطلوب"),
    last_name: yup.string().required("الاسم الاخير مطلوب"),
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: yup.string().required("رقم الهاتف مطلوب"),
    password: yup
      .string()
      .required("كلمة المرور مطلوبة")
      .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const phoneInputRef = useRef<PhoneInputRef>(null);

  const onSubmit = async (data: FormData) => {
    setRegisterError("");
    const phoneNumber = phoneInputRef.current?.value;

    if (!phoneNumber || !phoneInputRef.current?.isValid()) {
      setRegisterError("رقم الهاتف غير صالح");
      return;
    }

    console.log("Phone number:", phoneNumber);
    try {
      // await registerUser(data.first_name, data.last_name, data.email, data.password);
      // Redirect to login page after successful registration
      router.push("/auth/login");
    } catch (error) {
      setRegisterError("فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          مرحباً بك في زفاف وإيرادك
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          أنشئ حسابك اليوم للاستفادة من خدماتنا المتميزة في تنظيم حفلات الزفاف
          والمناسبات
        </p>
      </div>

      <div className="mt-2">
        {registerError && (
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
                  {registerError}
                </h3>
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Create New Account Header */}
          <h2 className="text-base font-semibold text-gray-800">
            إنشاء حساب جديد
          </h2>
          {/* name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                الإسم الاول
              </label>
              <div className="mt-1">
                <input
                  id="first_name"
                  type="text"
                  autoComplete="name"
                  placeholder="أدخل اسمك الاول......."
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                الإسم الأخير
              </label>
              <div className="mt-1">
                <input
                  id="last_name"
                  type="text"
                  autoComplete="name"
                  placeholder="أدخل اسمك الاخير......."
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  {...register("last_name")}
                />
                {errors.last_name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* email */}
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

          {/* phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              رقم الهاتف
            </label>
            <div className="relative">
              <IntlPhoneInput ref={phoneInputRef} />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
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

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DB0962] hover:bg-[#C30854] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB0962] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إنشاء حساب
            </button>
            <div>
              <p className="mt-2 text-sm text-red-600">{registerError}</p>
            </div>
          </div>
          <div className="text-center text-sm">
            لديك حساب بالفعل؟{" "}
            <Link
              href="/auth/login"
              className="text-sm font-medium text-[#DB0962] hover:text-[#C30854] underline"
            >
              تسجيل الدخول
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
