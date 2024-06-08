"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

function Header() {
  const { profile, isLoading } = useUser();
  const router = useRouter();

  // console.log(profile.cart.productDetail.length);

  // if (!profile.user) return <Loading />;

  return (
    <header className="border-b">
      <ul className="flex justify-evenly">
        <li className="p-4">
          <Link href="/">خانه</Link>
        </li>
        <li className="p-4">
          <Link href="/products">محصولات</Link>
        </li>
        <li className="p-4" onClick={() => router.refresh()}>
          <Link href="/profile">پنل کاربری</Link>
        </li>
        <li className="p-4" onClick={() => router.refresh()}>
          <Link href="/admin">پنل ادمین</Link>
        </li>
        <li className="p-4" onClick={() => router.refresh()}>
          <Link href="/cart">
            سبد خرید({profile.cart ? profile.cart.productDetail.length : "0"})
          </Link>
        </li>
        <li className="p-4">
          <Link href="/auth">ورود</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
