import HallPage from "@/components/Pages/Halls/HallPage";
import ArticlesPage from "@/components/Pages/Articles/ArticlePage";

// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "قصور الأفراح",
//   description: "أفضل قصور الأفراح",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function Page({ params }: { params: { categorySlug: string } }) {
  const slug = decodeURIComponent(params.categorySlug);
  console.log({ slug });
  if (slug === "المقالات") {
    return <ArticlesPage params={params} />;
  }

  return <HallPage params={params} />;
}
