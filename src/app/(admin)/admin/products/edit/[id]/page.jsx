"use client";

import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import { useGetProductById, useUpdateProduct } from "@/hooks/useProduct";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const initialFormProduct = {
  title: "",
  description: "",
  slug: "",
  brand: "",
  price: 0,
  discount: 0,
  offPrice: 0,
  countInStock: 0,
  imageLink: "",
};

function EditPage() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading, isFetched } = useGetProductById(params.id);
  const { product } = data || {};
  const { data: dataCategory } = useCategory();
  const { categories } = dataCategory || {};
  const { mutateAsync } = useUpdateProduct(params.id);
  const [productInfo, setProductInfo] = useState(initialFormProduct);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
        category: selectedCategory.value,
      });
      toast.success(res.message);
      router.push("/admin/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!isLoading && product) {
      setProductInfo({
        title: product.title,
        description: product.description,
        slug: product.slug,
        brand: product.brand,
        price: product.price,
        discount: product.discount,
        offPrice: product.offPrice,
        countInStock: product.countInStock,
        imageLink: product.imageLink,
      });
      setSelectedTags(product.tags);
      setSelectedCategory({
        value: product?.category?._id,
        label: product?.category?.title,
      });
    }
  }, [product]);

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-md">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4"> به روز رسانی محصول</h1>
        <FiArrowLeft onClick={handleBack} size={45} />
      </div>
      <FormProduct
        product={productInfo}
        handleSubmitForm={handleSubmitForm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handlerAddProduct={handlerAddProduct}
        categories={categories}
      />
    </div>
  );
}
export default EditPage;
