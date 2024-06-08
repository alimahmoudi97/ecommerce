"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";

function Sort() {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedSort, SetSelectedSort] = useState(searchParams.get("sort"));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="mb-8">
      <div className="flex gap-2">
        <FaSortAmountDown size={24} />
        <span>مرتب سازی:</span>
        <ul className="flex">
          <li
            onClick={() => {
              router.push(pathname + "?" + createQueryString("sort", "latest"));
            }}
          >
            <span
              className={`px-4 py-2  cursor-pointer ${
                searchParams.get("sort") == "latest"
                  ? "text-primary-900 border-b-2 border-primary-900"
                  : "text-secondary-600"
              }`}
            >
              جدیدترین
            </span>
          </li>
          <li
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("sort", "earlest")
              );
            }}
          >
            <span
              className={`px-4 py-2 cursor-pointer ${
                searchParams.get("sort") == "earlest"
                  ? "text-primary-900 border-b-2 border-primary-900"
                  : "text-secondary-600"
              }`}
            >
              قدیمی ترین
            </span>
          </li>
          <li
            onClick={() => {
              router.push(pathname + "?" + createQueryString("sort", "most"));
            }}
          >
            <span
              className={`px-4 py-2 cursor-pointer ${
                searchParams.get("sort") == "most"
                  ? "text-primary-900 border-b-2 border-primary-900"
                  : "text-secondary-600"
              }`}
            >
              محبوب ترین
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sort;
