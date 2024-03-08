import { CarType } from "../types/Types";

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
  headers: {
    "X-RapidAPI-Key": "2ce9f4145dmsh9f6590a80474c79p13043cjsn30072b620355",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(): Promise<CarType[]> {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    options
  );
  const data = await res.json();
  return data;
}
