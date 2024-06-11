"use client";

import Link from "next/link";
import SwiperBanner from "@/components/SwiperBanner";
import SwiperProducts from "@/components/SwiperProducts";
import CategoryHomePageIcons from "@/components/CategoryHomePageIcons";

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-8">
      <SwiperBanner />
      <h1 className="text-4xl font-bold mt-8">
        خرید با کیفیت ترین محصولات با پایین ترین قیمت بازار از ما
      </h1>
      <div className="container mt-8">
        <SwiperProducts />
      </div>
      <h2 className="font-bold text-2xl">خرید بر اساس دسته بندی</h2>
      <div className="container mx-auto overflow-auto">
        <CategoryHomePageIcons />
      </div>
    </div>
  );
}
