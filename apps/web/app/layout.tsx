import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Aryan",
  description: "Portfolio for Aryan Chauhan ",
  icons: {
    icon: '/favicon.ico'
  }
};

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable}`}>
        {/* <SmootherProvider /> */}
        {children}
      </body>
    </html>
  );
}
