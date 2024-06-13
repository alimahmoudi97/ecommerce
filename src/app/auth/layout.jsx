import { Inter } from "next/font/google";
import "../globals.css";
import vazirFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "سایت فروش",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster
            containerStyle={{
              fontSize: "1.2rem",
            }}
          />
          <div className="h-screen">
            <main className="h-full flex items-center justify-center">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}