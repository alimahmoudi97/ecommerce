"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { amzing } from "./../../public/images/index";
import { LuArrowLeftCircle } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "./Loading";
import { useEffect } from "react";
import SwiperProductsCart from "./SwiperProductsCart";
import Link from "next/link";

function SwiperProducts() {
  const { data, isLoading } = useGetProducts();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <Loading />;
  return (
    <section className="w-full bg-green-100 p-4 rounded-xl">
      <Swiper
        spaceBetween={5}
        slidesPerView={6}
        navigation={true}
        // centeredSlides={true}
        watchOverflow={true}
        resistanceRatio={0}
        freeMode={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="h-full"
      >
        <SwiperSlide className="flex flex-col !h-auto">
          <div className="bg-red-400 flex flex-col h-full rounded-r-3xl">
            <Image src={amzing} alt="" className="w-auto h-full" />
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
      </Swiper>
    </section>
  );
}
export default SwiperProducts;
