import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import FooterPage from "@/Components/Footer";
import Footer2 from "@/Components/Footer2";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hetal&apos s Home Kitchen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <FooterPage/>
        <Footer2 />
      </body>
    </html>
    </ClerkProvider>
  );
}
