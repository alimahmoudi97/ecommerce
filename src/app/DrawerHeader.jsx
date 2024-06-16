"use client";

import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import { IoEnterOutline, IoHomeOutline } from "react-icons/io5";
import { LuPanelRight, LuShoppingCart } from "react-icons/lu";

function DrawerHeader({ handleDrawer, user }) {
  return (
    <div className="lg:hidden bg-secondary-0 z-50 fixed inset-0">
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
            <Link href="/products" onClick={() => handleDrawer(false)}>
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <AiOutlineProduct size={30} />
                <span>محصولات</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/profile" onClick={() => handleDrawer(false)}>
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <LuPanelRight size={30} className="stroke-green-600" />
                <span>پنل کاربری</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/admin" onClick={() => handleDrawer(false)}>
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <GrUserAdmin size={30} className="stroke-primary-700" />
                <span>پنل ادمین</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/cart" onClick={() => handleDrawer(false)}>
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <LuShoppingCart size={30} className="stroke-orange-600" />
                <span>سبد خرید</span>
              </div>
            </Link>
          </li>
          <li>
            {user ? (
              <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                <CiUser size={30} />
                <span>{user.name}</span>
              </div>
            ) : (
              <Link className="block" href="/auth">
                <div className="flex items-center py-3 gap-2 border-b border-secondary-100 hover:bg-secondary-50">
                  <IoEnterOutline size={30} />
                  <span>ورود</span>
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DrawerHeader;
