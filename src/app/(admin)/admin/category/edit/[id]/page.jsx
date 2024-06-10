"use client";

import FormCategory from "@/components/FormCategory";
import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import {
  useAddCategory,
  useCategory,
  useGetCategoryById,
  useUpdateCategory,
} from "@/hooks/useCategory";
import { useAddProduct } from "@/hooks/useProduct";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const options = [
  { value: "product", label: "محصول" },
  { value: "post", label: "پست" },
  { value: "ticket", label: "تیکت" },
  { value: "comments", label: "نظرات" },
];

function AddPage() {
  const pathname = useParams();
  const router = useRouter();
  const { data, isLoading } = useGetCategoryById(pathname.id);
  const { isPending, mutateAsync } = useUpdateCategory(pathname.id);
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

  useEffect(() => {
    if (!isLoading && data) {
      setCategoryInfo({
        title: data.category.title,
        englishTitle: data.category.englishTitle,
        description: data.category.description,
      });
    }
  }, [data]);

  if (!data) return <Loading />;

  return (
    <div className="max-w-md">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4">ویرایش دسته بندی</h1>
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
