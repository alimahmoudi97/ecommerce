import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  banner_1,
  banner_2,
  banner_3,
  banner_4,
  banner_5,
} from "./../../public/images/index";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperBanner() {
  return (
    <section className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner_2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={banner_3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={banner_4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={banner_5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default SwiperBanner;
