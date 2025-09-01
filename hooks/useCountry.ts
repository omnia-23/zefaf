"use client";
import useSWR from "swr";
import { fetchCountries } from "@/services/countries";

export interface ICountry {
  id: number;
  name: string;
  code: string;
}

// fetcher delegates directly to your service
const fetcher = async (): Promise<{ count: number; data: ICountry[] }> => {
  const response = await fetchCountries();
  console.log({ data: response.data });
  return response.data;
};

export function useCountry() {
  const { data, error, isLoading, mutate } = useSWR<{
    count: number;
    data: ICountry[];
  }>(`/api/countries`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    countries: data?.data ?? [],
    count: data?.count ?? 0,
    isLoading,
    error,
    mutate,
  };
}
