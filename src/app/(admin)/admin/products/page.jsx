"use client";

import Table from "@/components/Table";
import ProductTableRow from "./ProductTableRow";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "@/components/Loading";
import Link from "next/link";

function ProductPage() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <Loading />;

  console.log("product lists:", data.products);

  return (
    <div>
      <header className="flex justify-between">
        <h1 className="text-3xl mb-4">اطلاعات کاربران</h1>
        <span className="text-primary-700 text-xl mb-4">
          <Link href="products/add">افزودن محصول جدید</Link>
        </span>
      </header>
      <div>
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عنوان</th>
            <th>دسته بندی </th>
            <th>قیمت</th>
            <th>تخفبف </th>
            <th>قیمت با تخفیف </th>
            <th>موجودی</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {data.products.map((product, index) => {
              return (
                <ProductTableRow
                  key={product._id}
                  product={product}
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
export default ProductPage;
