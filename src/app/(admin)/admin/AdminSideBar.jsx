"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function AdminSideBar() {
  const router = useRouter();

  return (
    <ul className="flex flex-col space-y-8">
      <li>
        <Link href="/" className="text-xl">
          صفحه اصلی
        </Link>
      </li>
      <li>
        <Link href="/admin" className="text-xl">
          داشبورد
        </Link>
      </li>
      <li>
        <Link href="/admin/users" className="text-xl">
          کاربران
        </Link>
      </li>
      <li>
        <Link href="/admin/products" className="text-xl">
          محصولات
        </Link>
      </li>
      <li>
        <Link href="/admin/category" className="text-xl">
          دسته بندی
        </Link>
      </li>
      <li>
        <Link href="#" className="text-xl">
          سفارشات
        </Link>
      </li>
      <li>
        <Link href="/admin/coupons" className="text-xl">
          کد تخفیف
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
export default AdminSideBar;
