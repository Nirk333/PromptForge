import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Queryve",
  description: "Your AI prompt command center.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} ${robotoMono.variable} antialiased`}>
                {children}
      </body>
    </html>
  );
}
