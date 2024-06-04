"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Sidbar() {
  const router = useRouter();

  return (
    <ul className="flex flex-col space-y-6 text-base">
      <li>
        <Link href="/">صفحه اصلی</Link>
      </li>
      <li>
        <Link href="/profile">داشبورد</Link>
      </li>
      <li>
        <Link href="/profile/me">اطلاعات کاربردی</Link>
      </li>
      <li>
        <Link href="#">سفارشات</Link>
      </li>
      <li>
        <Link href="#">خروج از حساب کاربری</Link>
      </li>
    </ul>
  );
}
export default Sidbar;
