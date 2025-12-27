import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Parkgarden",
  description:
    "A community garden on the Parklane site, where neighbors can grow vegetables, herbs, fruits and flowers together.",
  openGraph: {
    title: "Parkgarden",
    description:
      "A community garden on the Parklane site, where neighbors can grow vegetables, herbs, fruits and flowers together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(nunito.variable, "antialiased")}>
      <body className="bg-stone-50">{children}</body>
      <Analytics />
    </html>
  );
}
