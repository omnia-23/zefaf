"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { MegaMenuDefault } from "./NavList";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/images/new-logo.svg";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const MainNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <section
      className="flex flex-col items-center text-center py-6  bg-cover bg-center min-h-screen h-fit"
      style={{
        backgroundImage: "url(/images/Home-Banner.svg)",
      }}
    >
      <div
        style={{ borderColor: "#88888848" }}
        className="mx-auto  w-full   border-b border-solid pb-6"
        id="header"
      >
        <div className="container mx-auto w-full px-4 lg:px-8 py-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
            {/* Logo */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Image
                width={200}
                height={40}
                src={logo}
                alt="Zafaf Logo"
                className="w-[200px] h-[40px]"
                style={{ width: "200px", height: "40px" }}
              />
            </div>

            <div className="flex flex-row gap-2">
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent"
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
                  <Link href="/auth/login">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className="flex w-[120px] h-10 text-white bg-transparent  flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className="flex min-w-[120px] w-fit h-10 text-white bg-transparent   flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      إنشاء حساب
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <MegaMenuDefault />

        <div className="px-4 container lg:px-8 flex flex-col w-full">
          <div className="mt-[40px] lg:mt-[116px] w-full flex justify-start ">
            <p className="text-[color:var(--Neutral-White,#FFF)] text-right [leading-trim:both] [text-edge:cap] text-2xl font-medium leading-[normal]">
              التخطيط لحفل زفافك يبدأ الآن!
            </p>
          </div>

          <div className="mt-4 lg:mt-[56px] w-full flex justify-start container lg:px-0 ">
            <p className="text-white text-right [leading-trim:both] [text-edge:cap] text-lg lg:text-[56px] font-extrabold leading-[50px] lg:leading-[100px]">
              <span className="text-[#DB0962] ml-1">عالم زفاف</span>
              <span className="text-white">
                الدليل الأكبر لجميع
                <br className="hidden lg:inline-flex" />
                خدمات حفل الزفاف في السعودية.
              </span>
            </p>
          </div>

          {/* <HomeSearchTabs /> */}
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
