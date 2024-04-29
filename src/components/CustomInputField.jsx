const CustomInputField = ({ fieldData }) => {
  const { title, type, placeholder, register, name, errMsg } = fieldData;
  const normalFieldStyle = "border border-gray-300 w-full p-1 rounded-md";
  const namesFieldStyle = "border border-gray-300 w-full lg:w-80 p-1 rounded-md"
  return (
    <div>
      <label className="block py-1">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={title === "First Name" || title === "Last Name" ? namesFieldStyle : normalFieldStyle}
        {...register(name, {
          required: errMsg,
        })}
      />
    </div>
  );
};

export default CustomInputField;
