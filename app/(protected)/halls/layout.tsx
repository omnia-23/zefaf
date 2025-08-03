import Footer from "@/components/shared/Footer";
// import NavBar from "@/components/shared/Navigation/NavBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
      <Footer />
    </div>
  );
}
