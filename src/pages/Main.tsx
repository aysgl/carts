import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types/Types";
import Card from "../components/Card";

const Main = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch((err) => setIsError(err));
  }, []);

  return (
    <div>
      <Hero />
      <div id="catalog" className="mt-5">
        <h1 className="text-3xl">Cars</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex-4 flex">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        <div>
          {!cars ? (
            <div>yükleniyor</div>
          ) : isError ? (
            <h2>Hata</h2>
          ) : cars.length < 1 ? (
            <h2>araba bulunamadı</h2>
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {cars?.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
