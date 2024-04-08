import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
title: "Nail Osmanli",
description: "Portfolio",
};

export default function RootLayout({ children }) {
return (
  <html lang="en">
    <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
        </body>
  </html>
);
}
