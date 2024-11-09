import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jasmin Naaz",
  description: "Generated by @Nadeem Ahmad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-5xl mx-auto h-screen bg-black/80 text-white ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
