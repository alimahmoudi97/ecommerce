"use client";

import Loading from "@/components/Loading";
import { useAddToCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { BiTime } from "react-icons/bi";
import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function ProductCart({ product }) {
  const { profile, isLoading } = useUser();
  const [isAdded, SetIsAdded] = useState(false);
  const { data, isPending, mutateAsync } = useAddToCart();

  const { cart } = profile;

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
      if (item._id === product._id) {
        SetIsAdded(true);
      }
    });
  }, [cart]);

  if (!profile) return <Loading />;

  return (
    <div className="border border-secondary-100 border-opacity-50 rounded-2xl col-span-1 p-2  shadow-lg flex flex-col gap-4 hover:scale-105 transition-all ease-in-out">
      <div className="aspect-w-16 aspect-h-9  mb-4 flex-1">
        <Link href={`/products/${product._id}`}>
          <img
            src={product?.imageLink}
            alt="nextjs"
            className="w-full h-full object-center object-contain rounded-xl"
            loading="lazy"
          />
        </Link>
      </div>
      <h3 className="text-xl font-bold">{product?.title}</h3>
      <div className="flex justify-between">
        <div>
          <span>تاریخ ساخت:</span>
          <span className="font-bold">
            {new Date(product.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <div className="flex gap-2">
          <BiTime className="text-primary-900" size={24} />
          <span>ارسال فردا</span>
        </div>
      </div>
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
  );
}
export default ProductCart;
