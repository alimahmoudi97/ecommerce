import TextField from "./TextField";
import Select from "react-select";

function FormCategory({
  category,
  submitFormHandler,
  selectedOptionType,
  setSelectedOptionType,
  addCategoryHandler,
  optionTypes,
}) {
  return (
    <form onSubmit={submitFormHandler}>
      <TextField
        lable="عنوان"
        name="title"
        value={category.title}
        onChange={addCategoryHandler}
      />
      <TextField
        lable="عنوان انگلیسی"
        name="englishTitle"
        value={category.englishTitle}
        onChange={addCategoryHandler}
      />
      <TextField
        lable="توضیحات"
        name="description"
        value={category.description}
        onChange={addCategoryHandler}
      />

      <div className="flex flex-col gap-4">
        <label>نوع </label>
        <Select
          defaultValue={selectedOptionType}
          onChange={setSelectedOptionType}
          id="Type"
          options={optionTypes}
        />
      </div>
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}
export default FormCategory;
