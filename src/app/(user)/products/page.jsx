import SideBar from "./SideBar";

import queryString from "query-string";
import { getProducts } from "@/services/productService";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getCategories } from "@/services/categoryService";
import Sort from "@/components/Sort";
import { Suspense } from "react";
import SkeltonLoading from "./SkeltonLoading";
import ProductsList from "./Products";
import Await from "./await";

export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
  console.log("searchParams:", searchParams);
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const productsPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
      getProducts(queryString.stringify(searchParams))
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    }, 0);
  });
  const { categories } = await getCategories();

  return (
    <div className="container mx-auto" key={Math.random()}>
      <h1 className="text-xl font-bold mb-4">صفحه محصولات</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        {/* sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <SideBar categories={categories} />
        </div>
        {/* product list */}
        <div className="col-span-1 md:col-span-4">
          <Sort />
          <Suspense fallback={<SkeltonLoading />}>
            <Await promise={productsPromis}>
              {({ products }) => <ProductsList products={products} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
export default Products;
