import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeToggle } from "@/components/theme-toggle";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const googleSans = localFont({
  src: [
    {
      path: "../public/fonts/GoogleSans-Regular_0.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/GoogleSans-Bold-v1.27.ttf",
      weight: "700",
    },
  ],
  variable: "--font-google",
});

export const metadata: Metadata = {
  title: "Cloud Community Days 2025",
  description:
    "Google Developer Groups Cloud Community Days 2025 - 17th May 2025 at Biswa Bangla Exhibition Center",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${googleSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
