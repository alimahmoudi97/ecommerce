"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { amzing } from "./../../public/images/index";
import { LuArrowLeftCircle } from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "./Loading";
import { Suspense, useEffect } from "react";
import SwiperProductsCart from "./SwiperProductsCart";
import Link from "next/link";
import SkeltonLoading from "@/app/(user)/products/SkeltonLoading";
import SwiperProductsSkelton from "./skelton/swiper/SwiperProductsSkelton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 3,
  },
  865: {
    slidesPerView: 4,
  },
  1000: {
    slidesPerView: 5,
  },
  1500: {
    slidesPerView: 6,
  },
  1700: {
    slidesPerView: 7,
  },
};

function SwiperProducts() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <SwiperProductsSkelton />;

  return (
    <section className="w-full bg-rose-500 p-4 rounded-xl">
      <Swiper spaceBetween={5} slidesPerView={1} breakpoints={breakpoints}>
        <>
          <SwiperSlide className="flex flex-col !h-auto">
            <div className="bg-rose-700 flex flex-col h-full rounded-r-3xl">
              <Image src={amzing} alt="" className=" w-auto h-full" />
            </div>
          </SwiperSlide>
          {data.products.map((product) => {
            return (
              <SwiperSlide
                key={product._id}
                className="bg-secondary-0  rounded-2xl"
              >
                <SwiperProductsCart product={product} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="bg-secondary-0 flex flex-col ml-1 rounded-2xl overflow-hidden !h-auto">
            <div className="flex flex-col h-full">
              <div className="flex flex-col justify-between items-center my-auto">
                <Link
                  href="/products"
                  className="flex flex-col justify-between items-center my-auto gap-2"
                >
                  <LuArrowLeftCircle size={50} color="blue" />
                  <button href="/">موارد بیشتر</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </>
      </Swiper>
    </section>
  );
}
export default SwiperProducts;
