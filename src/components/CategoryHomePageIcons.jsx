import Image from "next/image";
import Link from "next/link";
import {
  category_1,
  category_2,
  category_3,
  category_4,
  category_5,
  category_6,
  category_7,
  category_8,
  category_9,
  category_10,
  category_11,
  category_12,
  category_13,
  category_14,
  category_15,
  category_16,
} from "./../../public/images/index";

function CategoryHomePageIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 p-4">
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_1}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>موبایل</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_2}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>کتاب و لوازم تحریر و هنر</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_3}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>کالای دیجیتال</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_4}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>خانه و آشپزخانه</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_5}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>لوازم خانگی</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_6}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>مد و پوشاک</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_7}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>ساعت،طلا و جواهرات</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_8}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>آرایشی بهداشتی</span>
        </Link>
      </div>

      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_9}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>تجهیزات پزشکی و سلامت</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_10}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>ورزش و سفر</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_11}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>کارت هدیه</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_12}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>کالاهای سوپرمارکتی</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_13}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>اسباب بازی،کودک و نوزاد</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_14}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>ابزار آلات و تجهیزات</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_15}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>خودرو و موتورسیکلت</span>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-28">
        <Link href="/products">
          <Image
            src={category_16}
            alt=""
            className="wmin--28 hmin--28 hover:scale-110 transition-all ease-in-out"
          />
          <span>محصولات بومی و محلی</span>
        </Link>
      </div>
    </div>
  );
}
export default CategoryHomePageIcons;
