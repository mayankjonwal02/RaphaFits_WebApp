import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaphaFit Pilates",
  description: "Developed by Mayank Jonwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background"," flex flex-col justify-center items-center w-screen", inter.className)}>
        <div className="w-full ">
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
        </body>
    </html>
  );
}
