"use client";

import { useGetProducts } from "@/hooks/useProduct";
import { useState } from "react";
import Loading from "@/components/Loading";
import { useAddCoupon } from "@/hooks/useCoupon";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import CouponForm from "@/components/CouponForm";

const initialFormCoupon = {
  code: "",
  amount: "",
  usageLimit: "",
};

function AddPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  const { mutateAsync } = useAddCoupon();
  const [formCouponData, setFormCouponData] = useState(initialFormCoupon);
  const [type, setType] = useState("percent");
  const [expireDate, setExpireDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleBackNavigation = () => {
    router.back();
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
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container md:max-w-md">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">اضافه کردن کد تخفیف</h1>
        <FiArrowLeft onClick={handleBackNavigation} size={45} />
      </div>
      <CouponForm
        expireDate={expireDate}
        formCouponData={formCouponData}
        handleDataForm={handleDataForm}
        handleSubmit={handleSubmit}
        handleType={handleType}
        products={products}
        setExpireDate={setExpireDate}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}
export default AddPage;
