import HallPage from "@/components/Pages/Halls/HallPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قصور الأفراح - العقارات",
  description: "أفضل قصور الأفراح والعقارات",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <HallPage />;
}
