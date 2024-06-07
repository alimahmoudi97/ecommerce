"use client";

import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Sidbar() {
  const route = useRouter();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    logout();
    queryClient.removeQueries(["user"]);
    route.push("/auth");
  };

  return (
    <ul className="flex flex-col space-y-6 text-base">
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
  );
}
export default Sidbar;
