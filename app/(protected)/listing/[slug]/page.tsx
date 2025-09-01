"use client";
import ArticlePage from "@/components/Pages/Articles/ArticlePage";
import HallPage from "@/components/Pages/Halls/HallPage";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <HallPage params={params} />;
  // return <ArticlePage params={params} />;
}
