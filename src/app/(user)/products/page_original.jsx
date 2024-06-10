"use client";

import ProductCart from "@/app/(user)/cart/ProductCart";
import SideBar from "./SideBar";
// import Loading from "@/components/Loading";
// import { useGetProducts } from "@/hooks/useProduct";
import queryString from "query-string";
import { getProducts } from "@/services/productService";
import { toStringCookies } from "@/utils/toStringCookies";
import { useEffect } from "react";
import { useGetProducts } from "@/hooks/useProduct";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

function ProductsList({ searchParams }) {
  const router = useRouter();

  console.log("searchParams:", searchParams);
  // TODO:move it on hook
  const { data, isLoading } = useGetProducts(
    queryString.stringify(searchParams)
  );
  // console.log(data);

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">صفحه محصولات</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {/* sidebar */}
        <SideBar />
        {/* product list */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.products.map((product, index) => {
              return <ProductCart key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsList;

// ---------------layout----------------
// |-----products-list----|---sidebar--|
// |----------------------|------------|
// |----------------------|------------|
// -------------------------------------
