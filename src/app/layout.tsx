import type { Metadata } from "next";
import { Inter, Pinyon_Script, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from 'framer-motion';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-berkshire-swash",
});
const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon-script",
});

export const metadata: Metadata = {
  title: "Mon Site",
  description: "Description de mon site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${berkshireSwash.variable} ${pinyonScript.variable} antialiased`}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
