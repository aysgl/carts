import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { Car, SearchNormal1 } from "iconsax-react";
import { FormEvent, useMemo, useState } from "react";
import { OptionType } from "../../types/Types";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const options: OptionType[] = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = { make, model: model || "" };
    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <ReactSelect
        defaultInputValue={searchParams.get("make")!}
        onChange={(e) => e && setMake(e.value)}
        className="text-black w-full"
        options={options}
      />
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <Car size="16" color="#FF8A65" />
          </span>
        </div>
        <input
          defaultValue={searchParams.get("model")!}
          onChange={(e) => setModel(e.target.value)}
          type="text"
          name="price"
          id="price"
          className="block rounded-md border-0 h-[38px] pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-1">
          <span className="text-gray-500 sm:text-sm">
            <button type="submit">
              <SearchNormal1 size="20" color="#FF8A65" />
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
