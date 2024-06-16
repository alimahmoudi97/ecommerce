"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline, IoEnterOutline, IoHomeOutline } from "react-icons/io5";
import { LuPanelRight } from "react-icons/lu";
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
      <div className="hidden lg:flex flex-col space-y-6 text-base bg-secondary-0 sticky top-0">
        <ul className="py-8 border rounded-xl shadow">
          <li className=" px-2">
            <Link href="/">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <IoHomeOutline size={30} className="stroke-primary-900" />
                <span>صفحه اصلی</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/profile">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <LuPanelRight size={30} className="stroke-green-600" />
                <span>داشبورد</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/profile/me">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <FaRegUser size={30} />
                <span>اطلاعات حساب کاربردی</span>
              </div>
            </Link>
          </li>
          <li className="px-2">
            <Link href="/profile/payments">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <IoBagOutline size={30} className="stroke-primary-900" />
                <span>سفارشات</span>
              </div>
            </Link>
          </li>
          <li className="px-2">
            <div onClick={handleLogout} className="cursor-pointer">
              <div className="flex items-center py-3 gap-2  hover:bg-secondary-50">
                <IoEnterOutline size={30} className="stroke-rose-600" />
                <span>خروج از حساب کاربری</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
            <Link href="/">
              <div
                className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50"
                onClick={() => handleDrawer(false)}
              >
                <IoHomeOutline size={30} className="stroke-primary-900" />
                <span>خانه</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div
                className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50"
                onClick={() => handleDrawer(false)}
              >
                <LuPanelRight size={30} className="stroke-green-600" />
                <span>داشبورد</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/profile/me">
              <div
                className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50"
                onClick={() => handleDrawer(false)}
              >
                <FaRegUser size={30} />
                <span> اطلاعات کاربردی</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/profile/payments">
              <div
                className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50"
                onClick={() => handleDrawer(false)}
              >
                <IoBagOutline size={30} className="stroke-primary-900" />
                <span>سفارشات</span>
              </div>
            </Link>
          </li>
          <li>
            <div onClick={handleLogout} className="cursor-pointer">
              <div
                className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50"
                onClick={() => handleDrawer(false)}
              >
                <IoEnterOutline size={30} className="stroke-rose-600" />
                <span>خروج از حساب کاربری</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
