import Image from "next/image";
import {
  cashOnDelivery,
  daysReturn,
  expressDelivery,
  originalProducts,
  support,
} from "../../public/images";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <div className="border-t-2 mt-8">
      <div className="container max-w-screen-2xl w-full mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-sm my-8">
          <div className="flex flex-col items-center">
            <Image src={expressDelivery} alt="" />
            <span>امکان تحویل اکسپرس</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={cashOnDelivery} alt="" />
            <span>امکان پرداخت در محل</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={daysReturn} alt="" />
            <span>7 روز هفته،24 ساعته</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={originalProducts} alt="" />
            <span>هت روز ضمانت بازگشت کالا</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={support} alt="" />
            <span>ضمانت اصل بودن کالا</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-sm">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">با ما همراه باشید</h3>
            <Link className="text-secondary-600" href="">
              اتاق خبر
            </Link>
            <Link className="text-secondary-600" href="">
              فروش در سایت
            </Link>
            <Link className="text-secondary-600" href="">
              گزارش تخلف
            </Link>
            <Link className="text-secondary-600" href="">
              تماس با ما
            </Link>
            <Link className="text-secondary-600" href="">
              درباره ما
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl"> خدمات مشتریان </h3>
            <Link className="text-secondary-600" href="">
              پاسخ به پرسش های متداول
            </Link>
            <Link className="text-secondary-600" href="">
              رویه های بازگرداندن کالا
            </Link>
            <Link className="text-secondary-600" href="">
              شرایط استفاده
            </Link>
            <Link className="text-secondary-600" href="">
              گزارش باگ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl"> راهنمای خرید از دیجی کالا </h3>
            <Link className="text-secondary-600" href="">
              نحوه ثبت سفارش
            </Link>
            <Link className="text-secondary-600" href="">
              رویه ارسال سفارش
            </Link>
            <Link className="text-secondary-600" href="">
              شیوه های پرداخت
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl"> در شبکه های اجتماعی همراه ما باشید</h3>
            <div className="flex gap-8 justify-evenly">
              <IoLogoInstagram
                className="hover:fill-red-500 cursor-pointer"
                size={40}
              />
              <FaTwitter
                className="hover:fill-primary-900 cursor-pointer"
                size={40}
              />
              <FaLinkedin
                className="hover:fill-primary-900 cursor-pointer"
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
