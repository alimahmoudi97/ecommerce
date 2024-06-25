import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SwiperProductsCart({ product }) {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="aspect-w-1 aspect-h-1 mb-4 flex-1">
            <img
              src={product.imageLink}
              alt=""
              className=" w-full h-full object-center "
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 h-full gap-2">
          <h3 className="line-clamp-2 h-11">{product.description}</h3>
          <div className="flex justify-between">
            <span className="badge badge--error">
              {toPersianNumbers(product.discount)}%
            </span>
            <div>
              <span>{toPersianNumbersWithComma(product.price)}</span>
              <span>تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SwiperProductsCart;
