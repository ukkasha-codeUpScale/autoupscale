import Navbar from "@/components/landing-page/navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto UpScale",
  description: "Rental Cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="au-base">
        <Navbar />
        <body className={inter.className}>{children}</body>
      </div>
  );
}
