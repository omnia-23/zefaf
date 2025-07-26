import MainNavbar from "@/components/shared/Navigation/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  );
}
