"use client";
import Loading from "@/components/Loading";
import { useAddToCart } from "@/hooks/useCart";
import { useGetProductById } from "@/hooks/useProduct";
import { useUser } from "@/hooks/useUser";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { useEffect, useState } from "react";

function ProductPage({ params }) {
  const { profile } = useUser();
  const { cart } = profile;
  const { data, isLoading } = useGetProductById(params.slug);
  const { product } = data || {};
  const [isAdded, SetIsAdded] = useState(false);
  const { isPending, mutateAsync } = useAddToCart();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({ productId: product._id });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    cart?.productDetail.filter((item) => {
      if (item._id === params.slug) {
        SetIsAdded(true);
      }
    });
  }, [cart]);

  // useEffect(() => {}, []);

  if (isLoading) return <Loading />;
  return (
    <div className="container p-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="aspect-w-16 aspect-h-9 lg:col-span-2 border rounded-xl">
          <img
            className="w-full h-full object-center object-scale-down"
            src={product.imageLink}
            alt=""
          />
        </div>
        <div className="row-start-3 row-end-4 lg:row-span-1 lg:col-span-1 lg:col-start-5 lg:col-end-6">
          <div className="flex flex-col gap-4 p-4 lg:border lg:rounded-xl">
            <p className="flex items-center gap-2 ">
              <span>تخفیف :</span>
              <span className="badge badge--error">
                {toPersianNumbers(product.discount)}%
              </span>
            </p>
            <p>
              <span>قیمت :</span>
              <span> {toPersianNumbersWithComma(product.price)}</span>
            </p>
            <p>
              <span>قیمت با تخفیف :</span>
              <span>{toPersianNumbersWithComma(product.offPrice)}</span>
            </p>
            {isAdded ? (
              <p className="text-center text-green-600 cursor-pointer bg-secondary-50  text-md font-bold p-4 rounded-3xl">
                به سبد خرید اضافه شد
              </p>
            ) : (
              <button
                onClick={handleClick}
                className="cursor-pointer bg-primary-900 hover:bg-primary-700 text-white text-md font-bold p-4 rounded-3xl"
              >
                اضافه کردن به سبد خرید
              </button>
            )}
          </div>
        </div>
        <div className="lg:col-span-4">
          <p>{product.description}</p>
        </div>
      </div>
      <p className="mt-8">
        {product.tags.map((tag) => (
          <span key={tag._id} className="badge badge--secondary">
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
export default ProductPage;
