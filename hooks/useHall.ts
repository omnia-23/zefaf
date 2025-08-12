"use client";
import useSWR from "swr";
import { fetchHallBySlug } from "@/services/halls";

const fetcher = async (url: string) => {
  const slug = url.split("/").pop() || "";
  const response = await fetchHallBySlug(slug);
  return response.data;
};

export function useHall(slug: string) {
  const encoded = encodeURIComponent(slug);

  const { data, error, isLoading, mutate } = useSWR(
    `/api/halls/${encoded}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return { hall: data, isLoading, error, mutate };
}
