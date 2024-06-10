"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DrawerHeader({ handleDrawer }) {
  const route = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    logout();
    queryClient.removeQueries(["user"]);
    route.push("/auth");
    route.refresh();
  };

  return (
    <div className="bg-secondary-0 fixed inset-0">
      <div className="absolute left-0 p-4">
        <span className="cursor-pointer" onClick={() => handleDrawer(false)}>
          ❌
        </span>
      </div>
      <div className="mt-10">
        <ul className="flex flex-col space-y-6 text-base w-full">
          <li>
            <Link
              href="/"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              محصولات
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              پنل کاربری
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              پنل ادمین
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              سبد خرید
            </Link>
          </li>
          <li>
            {user ? (
              <span>{user.name}</span>
            ) : (
              <Link className="block" href="/auth">
                ورود
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DrawerHeader;

{
  /* <header className="border-b shadow-md shadow-primary-100 hidden lg:block">
  <div className="flex container mx-auto">
    <ul className="flex flex-1">
      <li className="p-4 hover:bg-primary-100">
        <Link href="/">خانه</Link>
      </li>
      <li className="p-4 hover:bg-primary-100">
        <Link href="/products">محصولات</Link>
      </li>
      <li className="p-4 hover:bg-primary-100" onClick={() => router.refresh()}>
        <Link href="/profile">پنل کاربری</Link>
      </li>
      <li className="p-4 hover:bg-primary-100" onClick={() => router.refresh()}>
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
</header>; */
}
