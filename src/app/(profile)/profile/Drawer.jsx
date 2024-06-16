"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

function Drawer({ handleDrawer }) {
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
export default Drawer;
