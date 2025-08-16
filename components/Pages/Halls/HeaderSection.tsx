import React from "react";
import { Breadcrumb } from "antd";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface HeaderSectionProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function HeaderSection({
  title,
  description,
  breadcrumbs,
}: HeaderSectionProps) {
  return (
    <div
      className="relative bg-cover bg-center h-96 md:h-[28rem]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/bannerEachPage.png")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
        <div className="text-right text-white">
          {/* Breadcrumbs */}
          <Breadcrumb
            className="custom-breadcrumb text-xl !text-white"
            separator="/"
            items={breadcrumbs.map((item, index) => ({
              title: (
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "!text-[#DB0962]"
                      : "!text-white"
                  }
                >
                  {item.label}
                </span>
              ),
              href: item.href,
            }))}
          />

          {/* Title */}
          <div className="flex items-center my-3 sm:my-5 gap-2 sm:gap-4">
            <span className="w-4 sm:w-6 h-[4px] sm:h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
