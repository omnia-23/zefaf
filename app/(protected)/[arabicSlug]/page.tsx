import AboutUsPage from "@/components/Pages/AboutUs";
import ArticlePage from "@/components/Pages/Articles/ArticlePage";
import ArticlesPage from "@/components/Pages/Articles/ArticlesPage";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { arabicSlug: string } }) {
  const arabicSlug = decodeURIComponent(params.arabicSlug);

  console.log({ arabicSlug }); // 👉 should log "المقالات"

  if (arabicSlug === "المقالات") {
    return <ArticlesPage />;
  } else if (arabicSlug === "من-نحن") {
    return <AboutUsPage />;
  }
  return <ArticlePage articleSlug={arabicSlug} />;
}
