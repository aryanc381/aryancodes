import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import StoreProvider from "./provider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Sockify",
  description: "Memory Layer for Founders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} ${interTight.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <Toaster />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}