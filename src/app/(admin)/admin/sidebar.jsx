"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCategory, MdOutlineSpaceDashboard } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineProduct } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";
import { BiExit } from "react-icons/bi";

function Sidebar() {
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
                <IoHomeOutline size={24} />
                <span>صفحه اصلی</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <MdOutlineSpaceDashboard size={24} />
                <span>داشبورد</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin/users">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <FiUsers size={24} />
                <span>کاربران </span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin/products">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <AiOutlineProduct size={24} />
                <span>محصولات</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin/category">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <MdOutlineCategory size={24} />
                <span>دسته بندی</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <BsBag size={24} />
                <span>سفارشات</span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <Link href="/admin/coupons">
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <RiCoupon3Line size={24} />
                <span>کد تخفبف</span>
              </div>
            </Link>
          </li>
          <li className="px-2">
            <div onClick={handleLogout} className="cursor-pointer">
              <div className="flex items-center py-3 gap-2  hover:bg-secondary-50">
                <BiExit size={24} />
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
export default Sidebar;

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
              href="/admin"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              کاربران
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              محصولات
            </Link>
          </li>
          <li>
            <Link
              href="/admin/category"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              دسته بندی
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              سفارشات
            </Link>
          </li>
          <li>
            <Link
              href="/admin/coupons"
              className="hover:bg-primary-200 rounded-lg p-4"
              onClick={() => handleDrawer(false)}
            >
              کد تخفیف
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
