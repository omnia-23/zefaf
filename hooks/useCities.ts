"use client";
import useSWR from "swr";
import { fetchCities } from "@/services/cities";

export interface ICity {
  id: number;
  name: string;
  country_id: number;
}

// fetcher delegates directly to your service
const fetcher = async (
  country_id?: number
): Promise<{ count: number; data: ICity[] }> => {
  const response = await fetchCities({ country_id: country_id?.toString() });
  return response.data;
};

export function useCities(country_id?: number) {
  const shouldFetch = Boolean(country_id); // don’t call API if no country_id

  const { data, error, isLoading, mutate } = useSWR<{
    count: number;
    data: ICity[];
  }>(
    shouldFetch ? [`/api/cities`, country_id] : null, // key must change if country_id changes
    () => fetcher(country_id),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    cities: data?.data ?? [],
    count: data?.count ?? 0,
    isLoading,
    error,
    mutate,
  };
}
