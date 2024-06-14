import useOutsideClick from "@/hooks/useOutsideClick";
import { logout } from "@/services/authService";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiExit } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { VscBell } from "react-icons/vsc";

function MiniProfileMenu({ user, handler }) {
  const route = useRouter();
  const queryClient = useQueryClient();
  const ref = useOutsideClick(handler);
  const handleLogout = () => {
    logout();
    queryClient.removeQueries(["user"]);
    route.push("/auth");
    route.refresh();
  };

  return (
    <div
      ref={ref}
      className="w-56 absolute left-0 z-50 bg-secondary-0 shadow border rounded-xl"
    >
      <ul className="p-2">
        <li>
          <Link href="/profile">
            <div className="flex items-center justify-between py-3 px-2 border-b hover:bg-rose-50">
              <span>{user.name}</span>
              <MdKeyboardArrowLeft />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div className="flex items-center gap-2 px-2 py-3 border-b hover:bg-rose-50">
              <BsBag size={20} />
              <span>شفارش ها</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div className="flex items-center gap-2 px-2 py-3 border-b hover:bg-rose-50">
              <CiHeart size={20} />
              <span>لیست ها</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div className="flex items-center gap-2 px-2 py-3 border-b hover:bg-rose-50">
              <FaRegComment size={20} />
              <span>دیدگاه ها</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div className="flex items-center gap-2 px-2 py-3 border-b hover:bg-rose-50">
              <VscBell size={20} />
              <span>پیغام ها</span>
            </div>
          </Link>
        </li>
        <li>
          <div onClick={handleLogout} className="cursor-pointer">
            <div className="flex items-center gap-2 px-2 py-3 hover:bg-rose-50">
              <BiExit size={20} />
              <span>خروج از حساب کاربری</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default MiniProfileMenu;
