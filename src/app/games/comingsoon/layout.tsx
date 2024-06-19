import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Bakery",
  description: "Video Game Studio",
};

export default function NoFooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}