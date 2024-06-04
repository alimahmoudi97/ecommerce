"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function AdminSideBar() {
  const router = useRouter();

  return (
    <ul className="flex flex-col space-y-6 text-base">
      <li>
        <Link href="/">صفحه اصلی</Link>
      </li>
      <li>
        <Link href="/admin">داشبورد</Link>
      </li>
      <li>
        <Link href="/admin/users">کاربران</Link>
      </li>
      <li>
        <Link href="/admin/products">محصولات</Link>
      </li>
      <li>
        <Link href="/admin/category">دسته بندی</Link>
      </li>
      <li>
        <Link href="#">سفارشات</Link>
      </li>
      <li>
        <Link href="/admin/coupons">کد تخفیف</Link>
      </li>
      <li>
        <Link href="#">خروج از حساب کاربری</Link>
      </li>
    </ul>
  );
}
export default AdminSideBar;
