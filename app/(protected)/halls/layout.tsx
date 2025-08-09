import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/PageNavigation/NavBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
