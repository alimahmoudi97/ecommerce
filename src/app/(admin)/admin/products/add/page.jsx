"use client";

import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import { useAddProduct } from "@/hooks/useProduct";
import { useState } from "react";
import toast from "react-hot-toast";

function AddPage() {
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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({
        ...productInfo,
        tags: selectedTags,
        category: selectedOption.value,
      });
      toast.success(res.message);
      // console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <div className="max-w-md">
      <h1 className="text-3xl mb-4">اضافه کردن محصول</h1>
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
