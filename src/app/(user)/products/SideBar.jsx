"use client";

import Loading from "@/components/Loading";
import RadioButton from "@/components/RadioButton";
import { useCategory } from "@/hooks/useCategory";
import { useQueryClient } from "@tanstack/react-query";
import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const dynamic = "force-dynamic";

function SideBar({ categories }) {
  const router = useRouter();

  const pathname = usePathname();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category")?.split(",") || []
  );
  const [selectedSort, SetSelectedSort] = useState(searchParams.get("sort"));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectedCategory = (e) => {
    const value = e.target.value;
    if (selectedCategory.includes(value)) {
      const categories = selectedCategory.filter((c) => c !== value);
      setSelectedCategory(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategory([...selectedCategory, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategory, value])
      );
      console.log(selectedCategory);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* TODO:create categories component and fetch categories inside that */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">دسته بندی</h2>
        <ul>
          {categories.map((category) => {
            return (
              <li
                key={category._id}
                className="flex items-center gap-2"
                value="category"
              >
                <input
                  id={category.englishTitle}
                  type="checkbox"
                  value={category.englishTitle}
                  onClick={handleSelectedCategory}
                  checked={selectedCategory.includes(category.englishTitle)}
                  onChange={(e) => {}}
                />
                <label htmlFor={category.englishTitle}> {category.title}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
