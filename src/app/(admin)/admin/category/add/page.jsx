"use client";

import FormCategory from "@/components/FormCategory";
import Loading from "@/components/Loading";
import { useAddCategory, useCategory } from "@/hooks/useCategory";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const options = [
  { value: "product", label: "محصول" },
  { value: "post", label: "پست" },
  { value: "ticket", label: "تیکت" },
  { value: "comments", label: "نظرات" },
];

function AddPage() {
  const router = useRouter();
  const { data, isLoading } = useCategory();
  const { isPending, mutateAsync } = useAddCategory();
  const [categoryInfo, setCategoryInfo] = useState({
    title: "",
    englishTitle: "",
    description: "",
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const handlerAddCategory = (e) => {
    setCategoryInfo({
      ...categoryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    router.back();
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({
        ...categoryInfo,
        type: selectedOption.value,
      });
      toast.success(res.message);
      router.push("/admin/category");
      // console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <div className="max-w-md">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4">اضافه کردن دسته بندی</h1>
        <FiArrowLeft onClick={handleBack} size={45} />
      </div>
      <FormCategory
        category={categoryInfo}
        handleSubmitForm={handleSubmitForm}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handlerAddCategory={handlerAddCategory}
        options={options}
      />
    </div>
  );
}
export default AddPage;
