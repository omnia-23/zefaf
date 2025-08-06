import React from "react";
import Footer from "@/components/shared/Footer";

export default function HallDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}