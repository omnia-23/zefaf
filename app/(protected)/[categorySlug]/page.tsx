import HallPage from "@/components/Pages/Halls/HallPage";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "قصور الأفراح",
//   description: "أفضل قصور الأفراح",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function Page({ params }: { params: { categorySlug: string } }) {
  return <HallPage params={params} />;
}
