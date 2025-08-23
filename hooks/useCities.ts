"use client";
import useSWR from "swr";
import { fetchCities } from "@/services/cities";
import { ICity } from "@/types/city";

// fetcher delegates directly to your service
const fetcher = async (
  country_id?: number
): Promise<{ city_count: number; city: ICity[] }> => {
  const response = await fetchCities({ country_id: country_id?.toString() });
  return response.data;
};

export function useCities(country_id?: number) {
  const shouldFetch = Boolean(country_id);

  const { data, error, isLoading, mutate } = useSWR<{
    city_count: number;
    city: ICity[];
  }>(
    shouldFetch ? [`/api/cities`, country_id] : null,
    () => fetcher(country_id),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    cities: data?.city ?? [],
    count: data?.city_count ?? 0,
    isLoading,
    error,
    mutate,
  };
}
