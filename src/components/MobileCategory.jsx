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

function MobileCategory({ categories }) {
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
      <h2 className="font-bold">دسته بندی</h2>
      <ul className="flex overflow-auto gap-2 p-4">
        {categories.map((category) => {
          return (
            <button
              key={category._id}
              className={`border rounded-3xl whitespace-nowrap px-2 py-1 ${
                selectedCategory.includes(category.englishTitle)
                  ? "border-primary-600 bg-primary-100"
                  : ""
              }`}
              value={category.englishTitle}
              onClick={handleSelectedCategory}
            >
              {category.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
export default MobileCategory;
