import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "../shared/Navbar";
import { cn } from "../lib/utils";
import { Footer } from "../shared/Footer";
import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Setrips",
  description: "Setrips",
  icons: {
    icon: "/logo.png",
  },
};

export const ppFragmentsSerif = localFont({
  src: [
    {
      path: "../../public/fonts/PPFragment-SerifLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPFragment-SerifRegular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/PPFragment-SerifExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-fragments-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased")}
    >
      <body className={`${geist.variable} ${ppFragmentsSerif.variable} antialiased min-h-full flex flex-col`}>
        <Toaster richColors position="top-center" duration={2000} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
