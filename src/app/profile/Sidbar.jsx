"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Sidbar() {
  const router = useRouter();

  return (
    <ul className="flex flex-col space-y-8">
      <li onClick={() => router.push("/")}>
        <Link href="#" className="text-xl">
          صفحه اصلی
        </Link>
      </li>
      <li onClick={() => router.push("/profile")}>
        <Link href="#" className="text-xl">
          داشبورد
        </Link>
      </li>
      <li onClick={() => router.push("/profile/me")}>
        <Link href="#" className="text-xl">
          اطلاعات کاربردی
        </Link>
      </li>
      <li>
        <Link href="#" className="text-xl">
          سفارشات
        </Link>
      </li>
      <li>
        <Link href="#" className="text-xl">
          خروج از حساب کاربری
        </Link>
      </li>
    </ul>
  );
}
export default Sidbar;
