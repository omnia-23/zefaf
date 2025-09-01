import Navbar from "@/components/HomeNavigation/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
