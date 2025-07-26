import Footer from "@/components/shared/Footer";
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
      <Footer />
    </div>
  );
}
