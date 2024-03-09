import { useParams } from "react-router-dom";
import { CarType, Params } from "../types/Types";
import { generateImage } from "../utils/generateImage";
import CarAnimation from "../components/Hero/CarAnimation";
import { Category2, GasStation, Kanban } from "iconsax-react";
import { useEffect, useState } from "react";
import { fetchCars } from "../utils/fetchCars";

const Detail = () => {
  const { make, model, year } = useParams<Params>();
  const parsedYear = year ? parseInt(year) : null;

  const [car, setCar] = useState<CarType>();

  useEffect(() => {
    if (make !== undefined && model !== undefined) {
      fetchCars({
        make,
        model,
        year: parsedYear !== null ? parsedYear.toString() : "",
      })
        .then((data) => {
          const foundCar = data.find(
            (car) =>
              car.make === make &&
              car.model === model &&
              car.year === parsedYear
          );
          setCar(foundCar);
        })
        .catch((err) => console.log(err));
    }
  }, [make, model, parsedYear]);

  return (
    <div>
      {car ? (
        <div className="my-10">
          <div className="grid md:grid-cols-8 gap-3 items-center">
            <div className="col-span-3">
              <h1 className="text-6xl font-light mb-4">{car.make}</h1>
              <h2 className="text-4xl mb-4">{car.model}</h2>
              <h3 className="text-3xl">{car.year}</h3>
              <div className="text-[12px] group-hover:hidden flex w-full justify-between items-center mt-10 pe-14">
                <div className="text-center">
                  <Category2
                    className="mx-auto mb-2"
                    size="32"
                    color="#FF8A65"
                    variant="TwoTone"
                  />
                  {car.transmission === "a" ? "Otomatik" : "Manuel"}
                </div>
                <div>
                  <Kanban
                    className="mx-auto mb-2"
                    size="32"
                    color="#FF8A65"
                    variant="TwoTone"
                  />
                  {car.drive}
                </div>
                <div>
                  <GasStation
                    className="mx-auto mb-2"
                    size="32"
                    color="#FF8A65"
                    variant="TwoTone"
                  />
                  {car.fuel_type}
                </div>
              </div>
              <div className="pt-10">
                {Object.entries(car).map(([key, value]) => (
                  <div className="flex justify-between mt-0 pe-14" key={key}>
                    <h2 className="capitalize leading-1">
                      {key.replace("_", " ")}
                    </h2>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="pt-10">
                <CarAnimation url={generateImage(car)} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Araç bulunamadı</div>
      )}
    </div>
  );
};

export default Detail;
