// hooks/useHalls.ts
import useSWRInfinite from "swr/infinite";
import { IHall } from "@/types/hall";
import { fetchHalls } from "@/services/halls";

export const useHalls = (filters: {
  eventType?: string;
  city?: string;
  area?: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
  minCapacity?: number;
  maxCapacity?: number;
}) => {
  const getKey = (
    pageIndex: number,
    previousPageData: { data: IHall[] } | null
  ) => {
    // Reached the end
    if (previousPageData && !previousPageData.data.length) return null;

    return {
      key: "halls",
      filters: { ...filters, page: pageIndex + 1, limit: 10 },
    };
  };

  const fetcher = async (params: { key: string; filters: any }) => {
    const { data, total } = await fetchHalls(params.filters);
    return { data, total };
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    }
  );

  const halls = data ? data.flatMap((page) => page.data) : [];
  const totalHalls = data && data[0] ? data[0].total : 0;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.data?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.data?.length < 10);

  return {
    halls,
    totalHalls,
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
