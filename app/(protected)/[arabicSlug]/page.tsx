import ArticlesPage from "@/components/Pages/Articles/ArticlesPage";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { arabicSlug: string } }) {
  const arabicSlug = decodeURIComponent(params.arabicSlug);

  console.log({ arabicSlug }); // 👉 should log "المقالات"

  if (arabicSlug !== "المقالات") {
    return notFound();
  }

  return <ArticlesPage />;
}
