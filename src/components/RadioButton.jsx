function RadioButton({ name, id, label, checked }) {
  return (
    <div className="flex items-center gap-x-2">
      <input name={name} id={id} type="radio" checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default RadioButton;
