"use client";
import useSWR from "swr";
import { fetchCountries } from "@/services/countries";

export interface ICountry {
  id: number;
  name: string;
  code: string;
}

// fetcher delegates directly to your service
const fetcher = async (): Promise<ICountry[]> => {
  const response = await fetchCountries();
  return response.data;
};

export function useCountry() {
  const { data, error, isLoading, mutate } = useSWR<ICountry[]>(
    `/api/countries`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    countries: data ?? [],
    isLoading,
    error,
    mutate,
  };
}
