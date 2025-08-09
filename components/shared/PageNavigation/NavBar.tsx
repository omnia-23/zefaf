"use client";
import React from "react";
import { MainMenuDefault } from "./Menu";
import { Button } from "@material-tailwind/react";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/images/new-logo.svg";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Search } from "lucide-react";

export default function NavBar() {
  const { user, logout } = useAuth();
  console.log({ user });
  return (
    <section className="flex flex-col items-center text-center h-fit">
      <div className="mx-auto w-full" id="header">
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

            <div className="flex flex-row gap-2 items-start">
              {/* Mobile Menu */}
              <div className="block lg:hidden">
                <MainMenuDefault />
              </div>
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="w-fit shadow-none min-w-fit h-10 p-2 text-center flex justify-center items-center bg-transparent"
              >
                <Search size={20} color="black" />
              </Button>

              {user ? (
                <>
                  <span className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent text-black shadow-none">
                    اهلا بك {user.name.split(" ")[0]}
                  </span>
                  <Button
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent text-black shadow-none"
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
                      className="font-noto flex w-[120px] h-10 text-black  bg-transparent shadow-none  flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      className="font-noto flex min-w-[120px] w-fit h-10 text-black  bg-transparent shadow-none flex-col justify-center items-center gap-2 border border-[color:var(--Neutral-White,#FFF)] px-4 py-2 rounded-lg border-solid"
                    >
                      إنشاء حساب
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <MainMenuDefault />
        </div>
      </div>
    </section>
  );
}
