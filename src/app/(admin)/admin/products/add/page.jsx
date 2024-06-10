"use client";

import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import { useAddProduct } from "@/hooks/useProduct";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

function AddPage() {
  const router = useRouter();
  const { data, isLoading } = useCategory();
  const { isPending, mutateAsync } = useAddProduct();
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    discount: "",
    offPrice: "",
    countInStock: "",
    imageLink: "",
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = data?.categories.map((category) => {
    return {
      value: category._id,
      label: category.title,
    };
  });

  const handlerAddProduct = (e) => {
    setProductInfo({
      ...productInfo,
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
        ...productInfo,
        tags: selectedTags,
        category: selectedOption.value,
      });
      toast.success(res.message);
      router.push("/admin/products");
      // console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <div className="max-w-md">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4">اضافه کردن محصول</h1>
        <FiArrowLeft onClick={handleBack} size={45} />
      </div>
      <FormProduct
        product={productInfo}
        handleSubmitForm={handleSubmitForm}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handlerAddProduct={handlerAddProduct}
        options={options}
      />
    </div>
  );
}
export default AddPage;
