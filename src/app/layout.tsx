import type { Metadata } from "next";
import "./globals.css";
import "@splidejs/react-splide/css";
import "./css/all.css";
import "./css/custom.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Zonah Developers",
  description: "Zonah Developers projects and properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light-style">
      <head>
        <link rel="preload" href="https://d1t2fddy6amcvs.cloudfront.net/fonts/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="https://d1t2fddy6amcvs.cloudfront.net/fonts/ArgestaDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="https://d1t2fddy6amcvs.cloudfront.net/fonts/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body id="home" className="theme-body loaded">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
