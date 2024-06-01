"use client";

import { useUser } from "@/hooks/useUser";
import CartItem from "./CartItem";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPayment } from "@/services/paymentService";
import Loading from "@/components/Loading";

function CartPage() {
  const queryClient = useQueryClient();
  const { profile, isLoading } = useUser();

  const { data, mutate, isPending, isError } = useMutation({
    mutationFn: createPayment,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["payments"]);
      console.log("payment:", data);
    },
  });

  const handlePayment = () => {
    mutate();
  };

  if (isLoading) return <Loading width="80" height="80" />;

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3 space-y-2">
          {profile.cart.productDetail.length === 0 ? (
            <p className="text-center text-xl">سبد محصولات خالی است</p>
          ) : (
            profile.cart.productDetail.map((pro) => {
              return <CartItem key={pro._id} product={pro} />;
            })
          )}
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4 p-4 border rounded-lg">
            <h2 className="font-bold text-lg">اطلاعات پرداخت</h2>

            <div className="flex justify-between">
              <span>جمع کل</span>
              <span>
                {toPersianNumbersWithComma(
                  profile.cart.payDetail.totalGrossPrice
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span> میزان تخفیف</span>
              <span>
                {toPersianNumbersWithComma(profile.cart.payDetail.totalPrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>مبلغ قابل پرداخت</span>

              <span>
                {toPersianNumbersWithComma(
                  profile.cart.payDetail.totalOffAmount
                )}
              </span>
            </div>
            <button className="btn btn--primary" onClick={handlePayment}>
              {isError || isLoading ? <Loading /> : "ثبت سفارش"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
