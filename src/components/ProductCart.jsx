import { AiOutlineLike } from "react-icons/ai";

function ProductCart() {
  return (
    <div className="border border-secondary-100 border-opacity-50 rounded-2xl col-span-1 p-4 shadow-lg flex flex-col gap-4">
      <h3 className="text-xl font-bold">ماشین</h3>
      {/* <img src="" alt="" /> */}
      <div>
        <span>ساختن:</span>
        <span className="font-bold">1403/03/08</span>
      </div>
      <div>مشاهده محصول</div>
      <AiOutlineLike className="cursor-pointer" size={24} />
      <button className="cursor-pointer bg-primary-900 hover:bg-primary-700 text-white p-4 rounded-3xl">
        اضافه کردن به سبد خرید
      </button>
    </div>
  );
}
export default ProductCart;
