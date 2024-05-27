"use client";

function TextField({
  lable,
  name,
  value,
  handler,
  type = "string",
  placeholder = "",
}) {
  return (
    <div className="flex flex-col gap-8 mb-4">
      <label htmlFor={name} className="text-2xl md:text-3xl">
        {lable}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => handler(e.target.value)}
        placeholder={placeholder}
        className="textField"
      />
    </div>
  );
}
export default TextField;
