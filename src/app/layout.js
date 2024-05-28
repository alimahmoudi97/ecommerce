import { Inter } from "next/font/google";
import "./globals.css";
import vazirFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";
import HeaderApp from "@/components/HeaderApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Toaster
          containerStyle={{
            fontSize: "1.2rem",
          }}
        />
        <Providers>
          <HeaderApp />
          {children}
        </Providers>
      </body>
    </html>
  );
}
