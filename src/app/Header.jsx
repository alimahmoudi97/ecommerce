"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const { profile, isLoading } = useUser();
  const { user, cart } = profile || {};
  const router = useRouter();

  // if (!profile.user) return <Loading />;

  return (
    <header className="border-b shadow-md shadow-primary-100 hidden lg:block">
      <div className="flex container mx-auto">
        <ul className="flex flex-1">
          <li className="p-4 hover:bg-primary-100">
            <Link href="/">خانه</Link>
          </li>
          <li className="p-4 hover:bg-primary-100">
            <Link href="/products">محصولات</Link>
          </li>
          <li
            className="p-4 hover:bg-primary-100"
            onClick={() => router.refresh()}
          >
            <Link href="/profile">پنل کاربری</Link>
          </li>
          <li
            className="p-4 hover:bg-primary-100"
            onClick={() => router.refresh()}
          >
            <Link href="/admin">پنل ادمین</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="p-4 relative" onClick={() => router.refresh()}>
            <Link href="/cart">
              <FaCartShopping className="text-primary-900" size={30} />
              <span className="absolute top-0 right-0 bg-green-600 text-secondary-0 rounded-full p-1">
                {cart ? cart.productDetail.length : "0"}
              </span>
            </Link>
          </div>
          <div>
            {user ? (
              <span>{user.name}</span>
            ) : (
              <Link className="block" href="/auth">
                ورود
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
