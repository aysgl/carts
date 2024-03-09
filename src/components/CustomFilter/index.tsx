import ReactSelect from "react-select";

const CustomFilter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <form className="w-full">
      <ReactSelect className="text-black" options={options} />
    </form>
  );
};

export default CustomFilter;
