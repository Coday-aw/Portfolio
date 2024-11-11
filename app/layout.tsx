import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";






const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coday | Portfolio",
  description: "My name is Coday and I study front-end and web develeopment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="!scroll-smooth"  >
      <body className={`${inter.className} bg-gray-100 text-gray-950 pt-28 sm:pt-36 `}>
   
         <Header />
        {children}
        <Footer />
    
      </body>
    </html>
  );
}
