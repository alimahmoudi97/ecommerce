"use client";

function TextField({
  lable,
  name,
  value,
  onChange,
  type = "string",
  placeholder = "",
}) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={name} className="text-base">
        {lable}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="textField"
      />
    </div>
  );
}
export default TextField;
