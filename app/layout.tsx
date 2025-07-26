import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const noto_kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Zefaf World",
  description: "Developed By...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={noto_kufi.className}>{children}</body>
    </html>
  );
}
