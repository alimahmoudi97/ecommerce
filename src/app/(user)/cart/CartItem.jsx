"use client";
import { addToCart, removeFromCart } from "@/services/cartService";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function CartItem({ product }) {
  const queryClient = useQueryClient();

  const { mutate: decrementProduct } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });

  const { mutate: incrementFromCart } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });

  const handleAddToCart = () => {
    decrementProduct({
      productId: product._id,
    });
  };

  const handleDecrementToCart = () => {
    incrementFromCart({
      productId: product._id,
    });
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded-lg">
      <div>{product.title}</div>
      <div>
        <div>
          <span>قیمت:</span>
          <span>{toPersianNumbersWithComma(product.price)}</span>
        </div>
        <div className="flex gap-4">
          <span>{toPersianNumbersWithComma(product.offPrice)}</span>
          <span>{toPersianNumbers(product.discount)}%</span>
        </div>
      </div>
      <div className="border-r px-2">
        <span>تعداد:</span>
        <span>{toPersianNumbers(product.quantity)}</span>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-primary-900 rounded-md py-2 px-1"
          onClick={handleAddToCart}
        >
          <IoMdAdd className="fill-secondary-0" />
        </button>
        <button
          className="bg-secondary-0 p-2 border rounded-md"
          onClick={handleDecrementToCart}
        >
          <FaRegTrashAlt className="fill-rose-500" />
        </button>
      </div>
    </div>
  );
}
export default CartItem;
