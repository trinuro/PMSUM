import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from '@next/font/local'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMSUM",
  description: "A website by PMSUM",
};

/*Import local fonts*/ 
const hightidefont = localfont({
  src: '../public/fonts/HighTide.otf',
  variable: '--font-hightide'
})

const hortaFont = localfont({
  src: '../public/fonts/Horta demo.otf',
  variable: '--font-horta'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${hightidefont.variable} ${hortaFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
