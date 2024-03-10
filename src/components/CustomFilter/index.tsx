import ReactSelect from "react-select";
import { Filter, OptionType } from "../../types/Types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CustomFilter = ({ title, options, param }: Filter) => {
  const [selected, setSelected] = useState<OptionType>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (selected?.value) params.set(param, selected?.value.toLocaleLowerCase());
    else {
      params.delete(param);
    }

    setParams(params);
  }, [selected]);

  const defaultValue = {
    label: params.get(param),
    value: params.get(param),
  };

  return (
    <form className="w-full">
      <ReactSelect
        defaulValue={defaultValue}
        onChange={(e) => e && setSelected(e)}
        className="text-black"
        placeholder={title}
        options={options}
      />
    </form>
  );
};

export default CustomFilter;
