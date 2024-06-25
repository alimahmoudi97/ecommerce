"use client";

import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import { useAddProduct } from "@/hooks/useProduct";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const initialProductInfo = {
  title: "",
  description: "",
  slug: "",
  brand: "",
  price: "",
  discount: "",
  offPrice: "",
  countInStock: "",
  imageLink: "",
};

function AddPage() {
  const router = useRouter();
  const { data, isLoading } = useCategory();
  const { categories } = data || {};
  const { isPending: loading, mutateAsync } = useAddProduct();
  const [product, setProduct] = useState(initialProductInfo);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlerAddProduct = (e) => {
    setProduct({
      ...product,
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
        ...product,
        tags: selectedTags,
        category: selectedCategory._id,
      });
      toast.success(res.message);
      router.push("/admin/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    console.log(categories);
  },[])

  if (isLoading) return <Loading />;

  return (
    <div className="container max-w-md">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4">اضافه کردن محصول</h1>
        <FiArrowLeft onClick={handleBack} size={45} className="cursor-pointer"/>
      </div>
      <FormProduct
        product={product}
        handleSubmitForm={handleSubmitForm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handlerAddProduct={handlerAddProduct}
        categories={categories}
        isLoading={loading}
      />
    </div>
  );
}
export default AddPage;
