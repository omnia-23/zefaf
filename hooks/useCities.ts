"use client";
import useSWR from "swr";
import { fetchCities } from "@/services/cities";

export interface ICity {
  id: number;
  name: string;
  country_id: number;
}

const fetcher = async (country_id: string): Promise<ICity[]> => {
  const response = await fetchCities({ country_id });
  return response.data;
};

export function useCities(country_id: number) {
  const { data, error, isLoading, mutate } = useSWR<ICity[]>(
    `/api/cities?country_id=${country_id}`,
    () => fetcher(String(country_id)),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return { cities: data ?? [], isLoading, error, mutate };
}
