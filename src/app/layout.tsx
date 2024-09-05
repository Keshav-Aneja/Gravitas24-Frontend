import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/buttons.css";
import Header from "@/components/landing/Header";
import GlobalContextProvider from "@/context/GlobalContext";
import Footer from "@/sections/landing/Footer";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import GoogleAnalytics from "@/services/GA";

export const metadata: Metadata = {
  title: "Gravitas '24",
  description: "VIT Vellore's annual technical fest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gravitas.vit.ac.in",
    title: "Gravitas '24",
    description: "VIT Vellore's annual technical fest",
    images: [
      {
        url: "https://gravitas.vit.ac.in/gravitas.png",
        width: 1200,
        height: 630,
        alt: "Gravitas '24",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <Toaster />
        <GlobalContextProvider>
          <Header />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
