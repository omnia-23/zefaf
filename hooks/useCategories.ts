"use client";
import useSWR from "swr";
import { fetchCategories } from "@/services/categories";

export interface ICategory {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  is_active: number;
}

const fetcher = async (): Promise<ICategory[]> => {
  const response = await fetchCategories();
  return response.data;
};

export function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<ICategory[]>(
    `/api/categories`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return { categories: data ?? [], isLoading, error, mutate };
}
