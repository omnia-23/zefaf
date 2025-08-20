import WhatsAppSticky from "@/components/WhatsAppSticky";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <WhatsAppSticky />
    </div>
  );
}
