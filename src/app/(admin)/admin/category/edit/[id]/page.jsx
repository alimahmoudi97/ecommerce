"use client";

import FormCategory from "@/components/FormCategory";
import Loading from "@/components/Loading";
import { useGetCategoryById, useUpdateCategory } from "@/hooks/useCategory";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const optionTypes = [
  { value: "product", label: "محصول" },
  { value: "post", label: "پست" },
  { value: "ticket", label: "تیکت" },
  { value: "comments", label: "نظرات" },
];

function EditCategoryPage() {
  const pathname = useParams();
  const router = useRouter();
  const { data, isLoading } = useGetCategoryById(pathname.id);
  const { isPending, mutateAsync } = useUpdateCategory(pathname.id);
  const [selectedOptionType, setSelectedOptionType] = useState(null);
  const [category, setCategory] = useState({
    title: "",
    englishTitle: "",
    description: "",
  });

  const addCategoryHandler = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const backNavigationHandler = () => {
    router.back();
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({
        ...category,
        type: selectedOptionType.value,
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
      setCategory({
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
        <FiArrowLeft onClick={backNavigationHandler} size={45} />
      </div>
      <FormCategory
        category={category}
        submitFormHandler={submitFormHandler}
        selectedOptionType={selectedOptionType}
        setSelectedOptionType={setSelectedOptionType}
        addCategoryHandler={addCategoryHandler}
        optionTypes={optionTypes}
      />
    </div>
  );
}
export default EditCategoryPage;
