import React from 'react';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Zefaf Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/auth-bg.png"
          alt="Authentication background"
          fill
          priority
        />
      </div>
    </div>
  );
}