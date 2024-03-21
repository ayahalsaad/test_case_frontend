import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import SocialMediaFunction from "@/app/components/socialMedia/socialMedia";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestAutomata for PwC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`{inter.className}`}
        style={{ backgroundColor: "var(colorOne)" }}
      >
        {children}
        <SocialMediaFunction />
        <Footer />
      </body>
    </html>
  );
}
