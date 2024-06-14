"use client";

import FormProduct from "@/components/FormProduct";
import Loading from "@/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import { useGetProductById, useUpdateProduct } from "@/hooks/useProduct";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

function EditPage() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading, isFetched } = useGetProductById(params.id);
  const { data: categories } = useCategory();
  const { mutateAsync } = useUpdateProduct(params.id);
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: 0,
    discount: 0,
    offPrice: 0,
    countInStock: 0,
    imageLink: "",
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!isLoading && data.product) {
      setProductInfo({
        title: data.product.title,
        description: data.product.description,
        slug: data.product.slug,
        brand: data.product.brand,
        price: data.product.price,
        discount: data.product.discount,
        offPrice: data.product.offPrice,
        countInStock: data.product.countInStock,
        imageLink: data.product.imageLink,
      });
      setOptions(
        categories?.categories.map((category) => {
          return {
            value: category._id,
            label: category.title,
          };
        })
      );
      setSelectedTags(data.product.tags);
      setSelectedOption({
        value: data?.product?.category?._id,
        label: data?.product?.category?.title,
      });
      // console.log("SelectedOptions:", selectedOption);
      // console.log("data Products:", data.product);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log("data Products:", data.product);
  // }, [productInfo]);
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
export default EditPage;
