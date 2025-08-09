"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/images/new-logo.svg";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MainMenuDefault } from "./Menu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <section className="flex flex-col items-center text-center py-6  h-fit">
      <div className="mx-auto w-full border-b border-solid pb-6">
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
                  <span className="w-fit min-w-fit h-10 px-4 py-2 text-center flex justify-center items-center bg-transparent">
                    اهلا بك {user.name.split(" ")[0]}
                  </span>
                  <Button
                    onClick={async () => {
                      await logout();
                      router.push("/");
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

        {/* items list */}
        <MainMenuDefault />
      </div>
    </section>
  );
};

export default Navbar;
