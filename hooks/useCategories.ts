"use client";
import useSWR from "swr";
import { fetchCategories } from "@/services/categories";
import { ICategory } from "@/types/category";

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
