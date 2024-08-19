import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background","mx-[60px]", inter.className)}>
        <div>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  );
}
