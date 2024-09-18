import type { Metadata } from "next";
import localFont from "next/font/local";
import {DM_Sans} from 'next/font/google'

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-providers";

const font = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate Your Work With Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <ThemeProvider
         attribute="class"
         defaultTheme="dark"
       >
        {children}
        </ThemeProvider>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
