import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/src/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeCheck App",
  description: "Capture and share your aesthetic vibe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* HARUS ADA PEMBUNGKUS INI */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}