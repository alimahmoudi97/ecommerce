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
      {/* <form onSubmit={handleSubmitForm}>
        <TextField
          lable="عنوان"
          name="title"
          value={productInfo.title}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="توضیحات"
          name="description"
          value={productInfo.description}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="اسلاگ"
          name="slug"
          value={productInfo.slug}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="برند"
          name="brand"
          value={productInfo.brand}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="قیمت"
          name="price"
          value={productInfo.price}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="تخفیف"
          name="discount"
          value={productInfo.discount}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="قیمت روی تخفیف"
          name="offPrice"
          value={productInfo.offPrice}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="موجودی"
          name="countInStock"
          value={productInfo.countInStock}
          onChange={handlerAddProduct}
        />
        <TextField
          lable="لینک عکس محصول"
          name="imageLink"
          value={productInfo.imageLink}
          onChange={handlerAddProduct}
        />
        <div>
          <label>تگ ها</label>
          <TagsInput
            value={selectedTags}
            onChange={setSelectedTags}
            name="tags"
            placeHolder="لطفا تگ ها را وارد کنید"
          />
        </div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          id="catergory"
          options={options}
        />
        <button type="submit" className="btn btn--primary">
          تایید
        </button>
      </form> */}
    </div>
  );
}
export default AddPage;
