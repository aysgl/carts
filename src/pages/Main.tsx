import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { CarType } from "../types/Types";
import { fetchCars } from "../utils/fetchCars";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";
import { fuels, years } from "../utils/constants";

const Main = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    const { make, model, limit, year } = paramsObj;

    fetchCars({ make, model, limit, year })
      .then((data) => setCars(data))
      .catch((err) => setIsError(err));
  }, [params]);

  return (
    <div>
      <Hero />
      <div id="catalog" className="my-5">
        <div className="flex justify-between flex-col lg:flex-row mt-5 gap-3">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex-1 flex gap-3">
            <CustomFilter
              param={"fuel_type"}
              title="Fuel Type"
              options={fuels}
            />
            <CustomFilter param={"year"} title="Year" options={years} />
          </div>
        </div>
        <div>
          {!cars ? (
            <div className="text-center my-10">loading..</div>
          ) : isError ? (
            <h2 className="text-center my-10">Error</h2>
          ) : cars.length < 1 ? (
            <h2 className="text-center my-10">Nothing found</h2>
          ) : (
            <div>
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {cars &&
                  cars.length > 0 &&
                  cars?.map((car, i) => <Card key={i} car={car} />)}
              </section>
              <div className="flex justify-center w-full">
                <ShowMore />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
