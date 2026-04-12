import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/shared/Navbar";
import { Footer } from "@/shared/Footer";


export const metadata: Metadata = {
  title: "Setrips",
  description: "Setrips",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster richColors position="top-center" duration={2000} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
