import { TagsInput } from "react-tag-input-component";
import TextField from "./TextField";
import Select from "react-select";

function FormProduct({
  product,
  handleSubmitForm,
  selectedOption,
  setSelectedOption,
  selectedTags,
  setSelectedTags,
  handlerAddProduct,
  options,
}) {
  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        lable="عنوان"
        name="title"
        value={product.title}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="توضیحات"
        name="description"
        value={product.description}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="اسلاگ"
        name="slug"
        value={product.slug}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="برند"
        name="brand"
        value={product.brand}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="قیمت"
        name="price"
        value={product.price}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="تخفیف"
        name="discount"
        value={product.discount}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="قیمت روی تخفیف"
        name="offPrice"
        value={product.offPrice}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="موجودی"
        name="countInStock"
        value={product.countInStock}
        onChange={handlerAddProduct}
      />
      <TextField
        lable="لینک عکس محصول"
        name="imageLink"
        value={product.imageLink}
        onChange={handlerAddProduct}
      />
      <div className="flex flex-col gap-4 mb-4">
        <label>تگ ها</label>
        <TagsInput
          value={selectedTags}
          onChange={setSelectedTags}
          name="tags"
          placeHolder="لطفا تگ ها را وارد کنید"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label>دسته بندی</label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          id="catergory"
          options={options}
        />
      </div>
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}
export default FormProduct;
