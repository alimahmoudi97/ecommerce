import TextField from "./TextField";
import Select from "react-select";

function FormCategory({
  category,
  handleSubmitForm,
  selectedOption,
  setSelectedOption,
  handlerAddCategory,
  options,
}) {
  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        lable="عنوان"
        name="title"
        value={category.title}
        onChange={handlerAddCategory}
      />
      <TextField
        lable="عنوان انگلیسی"
        name="englishTitle"
        value={category.englishTitle}
        onChange={handlerAddCategory}
      />
      <TextField
        lable="توضیحات"
        name="description"
        value={category.description}
        onChange={handlerAddCategory}
      />

      <div className="flex flex-col gap-4">
        <label>نوع </label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          id="Type"
          options={options}
        />
      </div>
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}
export default FormCategory;
