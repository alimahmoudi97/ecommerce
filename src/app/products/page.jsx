import ProductCart from "@/app/cart/ProductCart";
import SideBar from "./SideBar";

import queryString from "query-string";
import { getProducts } from "@/services/productService";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getCategories } from "@/services/categoryService";
import { FaSortAmountDown } from "react-icons/fa";
import Sort from "@/components/Sort";

export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
  console.log("searchParams:", searchParams);
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  // TODO:move it on hook
  const productsPromis = getProducts(queryString.stringify(searchParams));

  const categoryPromise = getCategories();

  const [{ products }, { categories }] = await Promise.all([
    productsPromis,
    categoryPromise,
  ]);
  // console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">صفحه محصولات</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {/* sidebar */}
        <SideBar categories={categories} />
        {/* product list */}
        <div className="md:col-span-3">
          <Sort />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, index) => {
              return <ProductCart key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;

// ---------------layout----------------
// |-----products-list----|---sidebar--|
// |----------------------|------------|
// |----------------------|------------|
// -------------------------------------
