import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      {/* Background Image - Fixed and covers entire viewport */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src="/images/auth-bg.png"
          alt="Authentication background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Content Container - Responsive padding and centering */}
      <div className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:max-w-md lg:max-w-lg">
          {/* Logo Container with responsive padding */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <Image
              src="/images/new-logo.svg"
              alt="Zefaf Logo"
              width={188}
              height={40}
              // className="h-auto w-auto"
              priority
            />
          </div>

          {/* Children content */}
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
