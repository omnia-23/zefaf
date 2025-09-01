// hooks/useHalls.ts
import useSWRInfinite from "swr/infinite";
import { fetchArticles } from "@/services/article";
import { IArticle } from "@/types/article";

export const useArticles = () => {
  const getKey = (
    pageIndex: number,
    previousPageData: { data: IArticle[] } | null
  ) => {
    // Reached the end
    if (previousPageData && !previousPageData.data.length) return null;

    return {
      key: "articles",
      page: pageIndex + 1,
      limit: 10,
    };
  };

  const fetcher = async (params: {
    key: string;
    page: number;
    limit: number;
  }) => {
    const { blogs } = await fetchArticles();
    return { data: blogs.data, total: blogs.total };
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    }
  );

  const articles = data ? data.flatMap((page) => page.data) : [];
  const totalArticles = data && data[0] ? data[0].total : 0;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.data?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.data?.length < 10);

  return {
    articles,
    totalArticles,
    error,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    size,
    setSize,
    mutate,
  };
};
