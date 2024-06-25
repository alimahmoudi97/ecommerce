"use client";

import { useUser } from "@/hooks/useUser";
import CartItem from "./CartItem";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Loading from "@/components/Loading";
import { useCreatePayment } from "@/hooks/usePayment";
import toast from "react-hot-toast";

function CartPage() {
  const { profile, isLoading } = useUser();

  const { data, mutateAsync, isPending, isError } = useCreatePayment();

  const handlePayment = async () => {
    try {
      const response = await mutateAsync();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isLoading) return <Loading width="80" height="80" />;

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-4 lg:col-span-3 space-y-2">
          {profile.cart.productDetail.length === 0 ? (
            <p className="text-center text-xl">سبد محصولات خالی است</p>
          ) : (
            profile.cart.productDetail.map((pro) => {
              return <CartItem key={pro._id} product={pro} />;
            })
          )}
        </div>
        <div className="col-span-4 lg:col-span-1">
          <div className="gap-1  flex flex-col lg:gap-4 p-4 border rounded-lg">
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
              {isLoading || isError ? <Loading /> : "ثبت سفارش"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
