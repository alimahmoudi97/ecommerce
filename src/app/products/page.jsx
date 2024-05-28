import ProductCart from "@/components/ProductCart";
import RadioButton from "@/components/RadioButton";

function ProductsList() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">صفحه محصولات</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">دسته بندی</h2>
            <ul>
              <li className="flex items-center gap-2">
                <input id="digital" type="checkbox" />
                <label htmlFor="digital">کالای دیجیتال</label>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">مرتب سازی</h2>
            <ul>
              <li>
                <RadioButton name="sort" id="latest" label="جدید ترین" />
              </li>
              <li>
                <RadioButton name="sort" id="earlest" label="قدیمی ترین" />
              </li>
              <li>
                <RadioButton name="sort" id="most" label="محبوب ترین" />
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsList;
