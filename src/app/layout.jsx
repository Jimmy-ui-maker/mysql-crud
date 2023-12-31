"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

//export const metadata = {
//  title: 'Create Next App',
//  description: 'Generated by create next app',
//}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  });

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
