import ProductCart from "@/app/(user)/cart/ProductCart";
import SideBar from "./SideBar";

import queryString from "query-string";
import { getProducts } from "@/services/productService";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getCategories } from "@/services/categoryService";
import { FaSortAmountDown } from "react-icons/fa";
import Sort from "@/components/Sort";
import MobileCategory from "@/components/MobileCategory";

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
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        {/* sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <SideBar categories={categories} />
        </div>
        {/* product list */}
        <div className="col-span-1 md:col-span-4">
          <div className="block lg:hidden">
            <MobileCategory categories={categories} />
          </div>
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
