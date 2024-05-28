function RadioButton({ name, id, label }) {
  return (
    <div className="flex items-center gap-x-2">
      <input name={name} id={id} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default RadioButton;
