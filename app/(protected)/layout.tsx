import Navbar from "@/components/HomeNavigation/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppSticky />
      <Footer />
    </>
  );
}
