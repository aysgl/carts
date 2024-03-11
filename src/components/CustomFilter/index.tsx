import ReactSelect from "react-select";
import { Filter, OptionType } from "../../types/Types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CustomFilter = ({ title, options, param }: Filter) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (selected?.value) {
      params.set(param, selected.value.toLowerCase());
    } else {
      params.delete(param);
    }

    setParams(params);
  }, [param, params, selected, setParams]);

  return (
    <form className="w-full">
      <ReactSelect
        onChange={(selectedOption) => {
          if (selectedOption) {
            const { label, value } = selectedOption;
            setSelected({ label: label ?? "", value: value ?? "" });
          } else {
            setSelected(null);
          }
        }}
        className="text-black"
        placeholder={title}
        options={options}
      />
    </form>
  );
};

export default CustomFilter;
