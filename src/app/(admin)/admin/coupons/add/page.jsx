"use client";

import TextField from "@/components/TextField";
import { useGetProducts } from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import Select from "react-select";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Loading from "@/components/Loading";
import { useAddCoupon } from "@/hooks/useCoupon";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function AddPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, isLoading } = useGetProducts();
  const { data: coupon, mutateAsync } = useAddCoupon();
  const [formCouponData, setFormCouponData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const [type, setType] = useState("percent");
  const [expireDate, setExpireDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const options = data?.products.map((product) => {
    return {
      value: product._id,
      label: product.title,
    };
  });

  const handleDataForm = (e) => {
    e.preventDefault();
    setFormCouponData({
      ...formCouponData,
      [e.target.name]: e.target.value,
    });
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormCouponData({
        ...formCouponData,
        productIds: selectedProduct.map((item) => item.value),
        expireDate,
        type,
      });
      const response = await mutateAsync(formCouponData);
      queryClient.invalidateQueries(["coupons"]);
      toast.success(response.message);
      router.push("/admin/coupon");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-4">اضافه کردن کد تخفیف</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          lable="کد"
          name="code"
          value={formCouponData.code}
          onChange={handleDataForm}
        />
        <TextField
          lable="مقدار"
          name="amount"
          value={formCouponData.amount}
          onChange={handleDataForm}
        />
        <TextField
          lable="ظرفیت"
          name="usageLimit"
          value={formCouponData.usageLimit}
          onChange={handleDataForm}
        />
        <div className="flex flex-col gap-4 mb-4">
          <span>نوع کد تخفیف</span>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <input
                id="percent-type"
                type="radio"
                value="percent"
                onChange={handleType}
                className="rounded-full border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
                name="type"
              />
              <label htmlFor="percent-type">درصد</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                id="fixedProduct-type"
                type="radio"
                value="fixedProduct"
                onChange={handleType}
                className="rounded-full border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
                name="type"
              />
              <label htmlFor="fixedProduct-type">قیمت ثابت</label>
            </div>
          </div>
        </div>
        <Select
          defaultValue={selectedProduct}
          onChange={setSelectedProduct}
          isMulti
          id="produvts"
          options={options}
        />
        <div className="flex flex-col gap-4 mt-4">
          <span>تاریخ انقضا</span>
          <DatePicker
            inputClass="textField w-[384px]"
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            value={expireDate}
            calendarPosition="bottom-left"
            onChange={setExpireDate}
          />
        </div>
        <button type="submit" className="btn btn--primary">
          تایید
        </button>
      </form>
    </div>
  );
}
export default AddPage;
