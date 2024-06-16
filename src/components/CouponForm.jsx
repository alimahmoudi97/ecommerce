import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TextField from "./TextField";
import Select from "react-select";

const couponFormItems = [
  {
    id: 1,
    lable: "کد",
    name: "code",
  },
  {
    id: 2,
    lable: "مقدار",
    name: "amount",
  },
  {
    id: 3,
    lable: "ظرفیت",
    name: "usageLimit",
  },
];

function CouponForm({
  handleSubmit,
  formCouponData,
  handleDataForm,
  handleType,
  expireDate,
  setExpireDate,
  products,
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {couponFormItems.map((item) => (
        <TextField
          key={item.id}
          lable={item.lable}
          name={item.name}
          value={formCouponData[item.name] ?? ""}
          onChange={handleDataForm}
        />
      ))}
      <div className="flex flex-col gap-4 mb-4">
        <span>نوع کد تخفیف</span>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <input
              id="percent-type"
              type="radio"
              value="percent"
              onChange={handleType}
              className="rounded-full border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
              name="type"
            />
            <label htmlFor="percent-type">درصد</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              id="fixedProduct-type"
              type="radio"
              value="fixedProduct"
              onChange={handleType}
              className="rounded-full border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
              name="type"
            />
            <label htmlFor="fixedProduct-type">قیمت ثابت</label>
          </div>
        </div>
      </div>
      <Select
        defaultValue={selectedProduct}
        onChange={setSelectedProduct}
        isMulti
        id="produvts"
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option._id}
        products={products}
      />
      <div className="flex flex-col gap-4 mt-4">
        <span>تاریخ انقضا</span>
        <DatePicker
          inputClass="textField max-w-[384px]"
          format="YYYY/MM/DD"
          calendar={persian}
          locale={persian_fa}
          value={expireDate}
          calendarPosition="bottom-left"
          onChange={setExpireDate}
        />
      </div>
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}
export default CouponForm;
