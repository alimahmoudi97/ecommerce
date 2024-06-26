import { Inter } from "next/font/google";
import "../../globals.css";
import vazirFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";
import Sidbar from "./Sidbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "پروفایل ",
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
          <div className="flex flex-col">
            <div className="lg:container mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-4 lg:px-6 lg:py-6">
              <div className="relative ">
                <Sidbar />
              </div>
              <main className="lg:col-span-4 p-4 border rounded-xl shadow">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
