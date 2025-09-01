"use client";
import useSWR from "swr";
import { fetchOffers } from "@/services/offers";
import { IOffer } from "@/types/offer";

const fetcher = async (): Promise<{ count: number; data: IOffer[] }> => {
  const response = await fetchOffers();
  return response.data;
};

export function useOffers() {
  const { data, error, isLoading, mutate } = useSWR<{
    count: number;
    data: IOffer[];
  }>(`/api/zafafOffers`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    offers: data?.data ?? [],
    count: data?.count ?? 0,
    isLoading,
    error,
    mutate,
  };
}
