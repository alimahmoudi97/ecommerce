"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { TbLogin } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaRegComment } from "react-icons/fa";
import MiniProfileMenu from "@/components/MiniProfileMenu";
import DrawerHeader from "./DrawerHeader";
import { IoHomeOutline } from "react-icons/io5";

function Header() {
  const { profile, isLoading } = useUser();
  const [showDrawer, SetShowDrawer] = useState(false);
  const { user, cart } = profile || {};
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);

  const handleDrawer = (d) => {
    SetShowDrawer(d);
  };

  const handleMiniProfileMenu = () => {
    setShowProfile(false);
  };
  // if (!profile.user) return <Loading />;

  return (
    <header className="border-b shadow-md shadow-primary-100">
      <div className="block lg:hidden ">
        <RxHamburgerMenu size={45} onClick={() => handleDrawer(true)} />
      </div>
      {showDrawer && <DrawerHeader handleDrawer={handleDrawer} user={user} />}
      <div className="container mx-auto hidden lg:flex">
        <ul className="flex items-center  flex-1">
          <li className="p-4 hover:bg-primary-100">
            <Link href="/">
              <div>
                <IoHomeOutline size={30} className="stroke-primary-900" />
              </div>
            </Link>
          </li>
          <li className="p-4 hover:bg-primary-100">
            <Link href="/products">
              <span>محصولات</span>
            </Link>
          </li>
          <li
            className="p-4 hover:bg-primary-100"
            onClick={() => router.refresh()}
          >
            <Link href="/profile">
              <span>پنل کاربری</span>
            </Link>
          </li>
          <li
            className="p-4 hover:bg-primary-100"
            onClick={() => router.refresh()}
          >
            <Link href="/admin" onClick={() => handleDrawer(false)}>
              <span>پنل ادمین</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div>
            {user ? (
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer gap-1"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <CgProfile size={30} />
                  <FaAngleDown size={20} />
                </div>
                {showProfile && (
                  <MiniProfileMenu
                    user={user}
                    handler={handleMiniProfileMenu}
                  />
                )}
              </div>
            ) : (
              <Link href="/auth">
                <div className="flex items-center gap-2 border py-2 px-3 rounded-xl cursor-pointer">
                  <TbLogin size={30} />
                  <span>ورود | ثبت نام</span>
                </div>
              </Link>
            )}
          </div>
          <div className="bg-secondary-200 h-8 border rounded"></div>
          <div className="p-4 relative" onClick={() => router.refresh()}>
            <Link href="/cart">
              <FaCartShopping size={30} />
              <div className="absolute top-0 right-0 bg-green-600 text-secondary-0 rounded-full w-6 h-6 p-1 flex items-center justify-center">
                <span>{cart ? cart.productDetail.length : "0"}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
