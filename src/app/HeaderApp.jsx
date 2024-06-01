"use client";

import Loading from "@/components/Loading";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

function HeaderApp() {
  const { profile, isLoading } = useUser();

  // console.log(profile.cart.productDetail.length);

  if (!profile.user) return <Loading />;

  return (
    <header className="border-b">
      <ul className="flex justify-evenly">
        <li className="p-4">
          <Link href="#">خانه</Link>
        </li>
        <li className="p-4">
          <Link href="/products">محصولات</Link>
        </li>
        <li className="p-4">
          <Link href="/profile">پنل کاربری</Link>
        </li>
        <li className="p-4">
          <Link href="#">پنل ادمین</Link>
        </li>
        <li className="p-4">
          <Link href="/cart">
            سبد خرید({profile.cart.productDetail.length})
          </Link>
        </li>
        <li className="p-4">
          <Link href="/auth">ورود</Link>
        </li>
      </ul>
    </header>
  );
}
export default HeaderApp;
