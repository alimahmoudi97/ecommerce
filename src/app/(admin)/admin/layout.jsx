"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import AdminSideBar from "./AdminSideBar";
import Drawer from "./Drawer";
import { useState } from "react";

function Layout({ children }) {
  const [showDrawer, SetShowDrawer] = useState(false);

  const handleDrawer = (d) => {
    SetShowDrawer(d);
  };
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full overflow-auto">
        <div className="block lg:hidden">
          <div className="border-b-2">
            <RxHamburgerMenu size={45} onClick={() => handleDrawer(true)} />
          </div>
          {showDrawer && <Drawer handleDrawer={handleDrawer} />}
        </div>
        <div className="col-span-1 bg-secondary-50/50 p-4 hidden lg:block">
          <AdminSideBar />
        </div>
        <div className="bg-secondary-0 col-span-3 md:col-span-4 flex flex-col space-y-8 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Layout;
