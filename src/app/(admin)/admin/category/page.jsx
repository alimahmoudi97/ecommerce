"use client";

import Table from "@/components/Table";
import CategoryTableRow from "./CategoryTableRow";
import { useCategory } from "@/hooks/useCategory";
import Loading from "@/components/Loading";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";

function CategoryPage() {
  const { data } = useCategory();
  const { categories } = data || {};

  if (!categories) return <Loading />;

  return (
    <div>
      <header className="flex justify-between border-b">
        <h1 className="text-3xl mb-4">دسته بندی ها </h1>
        <Link href="category/add">
          <div className="text-primary-900 text-xl mb-4 flex gap-2 items-center">
            <span>افزودن دسته بندی جدید</span>
            <IoIosAddCircleOutline size={24} />
          </div>
        </Link>
      </header>
      <div className="overflow-auto">
        <Table>
          <Table.Header>
            <th className="table__th">#</th>
            <th className="table__th">عنوان</th>
            <th className="table__th"> توضیحات </th>
            <th className="table__th">عنوان انگلیسی</th>
            <th className="table__th">نوع </th>
            <th className="table__th">عملیات</th>
          </Table.Header>
          <Table.Body>
            {categories.map((category, index) => {
              return (
                <CategoryTableRow
                  key={category._id}
                  category={category}
                  index={index}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default CategoryPage;
