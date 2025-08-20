"use client";
import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/images/new-logo.svg";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { MainMenuDefault } from "./Menu";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the navbar should have white background
  const shouldHaveWhiteBg = !isHomePage || isScrolled;

  return (
    <section
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        shouldHaveWhiteBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[95%] mx-auto px-4 py-2">
        <div className="w-full space-y-2 md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              width={300}
              height={50}
              src={logo}
              alt="Zafaf Logo"
              className="w-[150px] h-auto"
            />
          </div>

          <div className="w-full flex items-center justify-between md:justify-end">
            <MainMenuDefault isScrolled={shouldHaveWhiteBg} />
            <div className="flex flex-row gap-2 items-start">
              {/* <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className={`w-fit min-w-fit h-10 p-2 text-center flex justify-center items-center ${
                  shouldHaveWhiteBg ? "bg-white" : "bg-transparent"
                }`}
              >
                <Image
                  alt="search icon"
                  width={20}
                  height={20}
                  src="/images/search(1).svg"
                  className={`cursor-pointer ${
                    shouldHaveWhiteBg ? "invert" : ""
                  }`}
                />
              </Button> */}

              {user ? (
                <>
                  <Button
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    className={`w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center ${
                      shouldHaveWhiteBg ? "text-gray-800" : "text-white"
                    }`}
                  >
                    اهلا بك {user.name}
                  </Button>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className={`w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center ${
                      shouldHaveWhiteBg ? "text-gray-800" : "text-white"
                    }`}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <CgLogOut size={20} />
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/auth/joinus">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className={`font-noto flex min-w-[120px] h-10 flex-col justify-center items-center gap-2 bg-transparent border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid
                        ${
                          shouldHaveWhiteBg
                            ? "text-gray-800 border-gray-800 hover:bg-gray-100"
                            : "text-white border-white hover:bg-white/10"
                        }`}
                    >
                      انضم كمقدم خدمة
                    </Button>
                  </Link>
                  {/* <Link href="/auth/register">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className={`font-noto flex min-w-[120px] w-fit h-10 flex-col justify-center items-center gap-2 border px-4 py-2 rounded-lg border-solid ${
                        shouldHaveWhiteBg
                          ? "text-gray-800 border-gray-800 hover:bg-gray-100"
                          : "text-white border-white hover:bg-white/10"
                      }`}
                    >
                      تسجيل دخول العرسان
                    </Button>
                  </Link> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
