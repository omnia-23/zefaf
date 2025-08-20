import React from "react";
import Navbar from "@/components/HomeNavigation/Navbar";
import Footer from "@/components/shared/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
