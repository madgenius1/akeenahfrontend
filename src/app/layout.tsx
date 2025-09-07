import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const jost = Jost({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Akeenah Group | Africa's Industrial Supplier",
  description: "Africa's Trusted Industrial Procurement and Supplier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
