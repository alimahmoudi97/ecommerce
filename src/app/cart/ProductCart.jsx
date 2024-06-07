"use client";

import Loading from "@/components/Loading";
import { useAddToCart } from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { addToCart } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";
import { AiOutlineLike } from "react-icons/ai";

function ProductCart({ product }) {
  const queryClient = useQueryClient();
  const { profile, isLoading } = useUser();

  const { data, isPending, mutateAsync } = useAddToCart();

  const { cart } = profile;

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await mutateAsync({ productId: product._id });
  };

  if (isPending) return <Loading />;

  return (
    <div className="border border-secondary-100 border-opacity-50 rounded-2xl col-span-1 p-4 shadow-lg flex flex-col gap-4">
      {/* <img src={product?.imageLink} alt="" /> */}
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none mb-4 flex-1">
        <Link href="">
          <img
            src={product?.imageLink}
            alt="nextjs"
            className="w-full h-full object-center object-contain rounded-xl"
          />
        </Link>
      </div>
      <h3 className="text-xl font-bold">{product?.title}</h3>
      <div>
        <span>ساختن:</span>
        <span className="font-bold">
          {new Date(product.createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
      <div className="text-primary-900">مشاهده محصول</div>
      <AiOutlineLike className="cursor-pointer" size={24} />
      <button
        onClick={handleClick}
        className="cursor-pointer bg-primary-900 hover:bg-primary-700 text-white text-md font-bold p-4 rounded-3xl"
      >
        اضافه کردن به سبد خرید
      </button>
    </div>
  );
}
export default ProductCart;
