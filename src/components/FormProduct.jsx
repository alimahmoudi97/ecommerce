import { TagsInput } from "react-tag-input-component";
import TextField from "./TextField";
import Select from "react-select";
import Loading from "./Loading";

// TODO:Add a feature that admin can extera product form items from dashbord

const productFormItems = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

function FormProduct({
  product,
  handleSubmitForm,
  selectedCategory,
  setSelectedCategory,
  selectedTags,
  setSelectedTags,
  handlerAddProduct,
  categories,
  isLoading,
}) {
  return (
    <form onSubmit={handleSubmitForm}>
      {productFormItems.map((item) => (
        <TextField
          key={item.id}
          lable={item.label}
          name={item.name}
          value={product[item.name] ?? ""}
          onChange={handlerAddProduct}
        />
      ))}
      <div className="flex flex-col gap-4 mb-4">
        <label>تگ ها</label>
        <TagsInput
          name="tags"
          value={selectedTags}
          onChange={setSelectedTags}
          placeHolder="لطفا تگ ها را وارد کنید"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label>دسته بندی</label>
        <Select
          id="catergory"
          defaultValue={selectedCategory}
          onChange={setSelectedCategory}
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option._id}
          options={categories}
        />
      </div>
      <button type="submit" className="btn btn--primary">
        {isLoading ? <Loading /> : <span>تایید</span>}
      </button>
    </form>
  );
}
export default FormProduct;
