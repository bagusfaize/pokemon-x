import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex Xcidic",
  description: "Simple Pokedex Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
