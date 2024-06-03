"use client";

import Table from "@/components/Table";
import CategoryTableRow from "./CategoryTableRow";
import { useCategory } from "@/hooks/useCategory";
import Loading from "@/components/Loading";
import Link from "next/link";

function CategoryPage() {
  const { data } = useCategory();

  if (!data) return <Loading />;

  return (
    <div>
      <header className="flex justify-between">
        <h1 className="text-3xl mb-4">دسته بندی ها </h1>
        <span className="text-primary-700 text-xl mb-4">
          <Link href="category/add">افزودن دسته بندی جدید</Link>
        </span>
      </header>
      <div>
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عنوان</th>
            <th> توضیحات </th>
            <th>عنوان انگلیسی</th>
            <th>نوع </th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {data.categories.map((category, index) => {
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
