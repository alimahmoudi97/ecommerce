"use client";

import Drawer from "@/app/profile/Drawer";
import Sidbar from "./Sidbar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function ProfileLayout({ children }) {
  const [showDrawer, SetShowDrawer] = useState(false);

  const handleDrawer = (d) => {
    SetShowDrawer(d);
  };

  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        <div className="block lg:hidden">
          <div className="border-b-2">
            <RxHamburgerMenu size={45} onClick={() => handleDrawer(true)} />
          </div>
          {showDrawer && <Drawer handleDrawer={handleDrawer} />}
        </div>
        <div className="bg-secondary-50/50 col-span-2 md:col-span-1 p-4 hidden lg:block">
          <Sidbar />
        </div>
        <div className="bg-secondary-0 col-span-3 md:col-span-4 flex flex-col space-y-8 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
export default ProfileLayout;
