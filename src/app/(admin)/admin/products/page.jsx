"use client";

import Table from "@/components/Table";
import ProductTableRow from "./ProductTableRow";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "@/components/Loading";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Suspense } from "react";

function ProductPage() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <header className="flex justify-between border-b">
        <h1 className="text-3xl mb-4">اطلاعات محصولات</h1>
        <Link href="products/add">
          <div className="text-primary-900 text-xl mb-4 flex gap-2 items-center">
            <span>افزودن محصول جدید</span>
            <IoIosAddCircleOutline size={24} />
          </div>
        </Link>
      </header>
      <div className="overflow-auto">
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
            {products.map((product, index) => {
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
