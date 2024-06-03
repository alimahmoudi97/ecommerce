"use client";

import Table from "@/components/Table";
import CategoryTableRow from "./CategoryTableRow";
import { useCategory } from "@/hooks/useCategory";
import Loading from "@/components/Loading";

function CategoryPage() {
  const { data } = useCategory();

  if (!data) return <Loading />;

  console.log("Category data:", data.categories);

  return (
    <div>
      <h1 className="text-3xl mb-4"> دسته بندی ها</h1>
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
