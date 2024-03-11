import { Inter } from "next/font/google";

import Navbar from "./componets/navigation/navbar";
import Footer from "./componets/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkyHope Drones",
  description: "Your Aerial Solutions across the Lakeland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        <div className="h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
