"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidbar() {
  const route = useRouter();
  const queryClient = useQueryClient();
  const [showDrawer, SetShowDrawer] = useState(false);
  const handleLogout = () => {
    logout();
    queryClient.removeQueries(["user"]);
    route.push("/auth");
    route.refresh();
  };

  const handleDrawer = (d) => {
    SetShowDrawer(d);
  };

  return (
    <>
      <ul className="hidden lg:flex flex-col space-y-6 text-base bg-secondary-50/25">
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
          <button onClick={handleLogout}>خروج از حساب کاربری</button>
        </li>
      </ul>
      <div className="block lg:hidden border-b-2">
        <RxHamburgerMenu size={45} onClick={() => handleDrawer(true)} />
        {showDrawer && (
          <HamburgerMenu
            handleDrawer={handleDrawer}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </>
  );
}
export default Sidbar;

function HamburgerMenu({ handleDrawer, handleLogout }) {
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
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              href="/profile/me"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              اطلاعات کاربردی
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              سفارشات
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-primary-200 rounded-lg p-4"
            >
              خروج از حساب کاربری
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
