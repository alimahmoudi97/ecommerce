"use client";

import Table from "@/components/Table";
import ProductTableRow from "./ProductTableRow";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "@/components/Loading";
import Link from "next/link";

function ProductPage() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <Loading />;

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
            <th className="table__th">#</th>
            <th className="table__th">عنوان</th>
            <th className="table__th">دسته بندی </th>
            <th className="table__th">قیمت</th>
            <th className="table__th">تخفبف </th>
            <th className="table__th">قیمت با تخفیف </th>
            <th className="table__th">موجودی</th>
            <th className="table__th">عملیات</th>
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
