"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { MainMenuDefault } from "./Menu";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/images/new-logo.svg";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import HomeSection from "../MainSection";

const MainNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <section
      className="flex flex-col items-center text-center py-6  bg-cover bg-center min-h-screen h-fit"
      style={{
        backgroundImage: "url(/images/Home-Banner.svg)",
      }}
    >
      <div className="mx-auto w-full pb-6" id="header">
        <div className="max-w-[95%] mx-auto w-full py-4">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Image
                width={300}
                height={50}
                src={logo}
                alt="Zafaf Logo"
                className="w-[280px] h-auto"
              />
            </div>

            <MainMenuDefault />
            <div className="flex flex-row gap-2 items-start">
              {/* Mobile Menu */}
              {/* <div className="block lg:hidden"> */}
              {/* </div> */}
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="w-fit min-w-fit h-10 p-2 text-center flex justify-center items-center bg-transparent"
              >
                <Image
                  alt="search icon"
                  width={20}
                  height={20}
                  src="/images/search(1).svg"
                  className="cursor-pointer"
                />
              </Button>

              {user ? (
                <>
                  <Button
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent"
                  >
                    اهلا بك {user.name}
                  </Button>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent"
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
                      className="font-noto flex min-w-[120px] h-10 text-white bg-transparent  flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      انضم كمقدم خدمة
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className="font-noto flex min-w-[120px] w-fit h-10 text-white bg-transparent flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      تسجيل دخول العرسان
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* <div className="lg:block hidden">
          <MainMenuDefault />
        </div> */}

        <HomeSection />
      </div>
    </section>
  );
};

export default MainNavbar;
