import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
// import PrivyProvider from "@/providers/privy"; // Commented out for debugging

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-Library by ThirdInternet",
  description: "Bringing the next generation Onchain!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <PrivyProvider>{children}</PrivyProvider> */} {/* Commented out for debugging */}
        {children}
      </body>
    </html>
  );
}
