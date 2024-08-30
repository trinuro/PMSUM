import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from '@next/font/local'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from 'next/link';
// import fontawesome css
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
        <Navbar></Navbar>
        <Link href="/activities">
            Activity
        </Link>
        {children}
        <Footer></Footer>
        <Link href="/acknowledgements">
            acknowledgements
        </Link>
      </body>
    </html>
  );
}
