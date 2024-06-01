"use client";

import ProductCart from "@/app/cart/ProductCart";
import { getProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import SideBar from "./SideBar";
import Loading from "@/components/Loading";

function ProductsList() {
  // TODO:move it on hook
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Loading />;

  // ---------------layout----------------
  // |-----products-list----|---sidebar--|
  // |----------------------|------------|
  // |----------------------|------------|
  // -------------------------------------

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
