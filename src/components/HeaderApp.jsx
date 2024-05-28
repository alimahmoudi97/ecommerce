import Link from "next/link";

function HeaderApp() {
  return (
    <header className="border-b mb-4">
      <ul className="flex justify-evenly">
        <li className="p-4">
          <Link href="#">خانه</Link>
        </li>
        <li className="p-4">
          <Link href="#">محصولات</Link>
        </li>
        <li className="p-4">
          <Link href="#">پنل کاربری</Link>
        </li>
        <li className="p-4">
          <Link href="#">پنل ادمین</Link>
        </li>
        <li className="p-4">
          <Link href="#">سبد خرید(0)</Link>
        </li>
        <li className="p-4">
          <Link href="#">ورود</Link>
        </li>
      </ul>
    </header>
  );
}
export default HeaderApp;
