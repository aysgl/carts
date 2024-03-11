import { CarType, Params } from "../types/Types";

const options = {
  method: "GET",
  url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
  headers: {
    "X-RapidAPI-Key": "2ce9f4145dmsh9f6590a80474c79p13043cjsn30072b620355",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filter: Params): Promise<CarType[]> {
  const {
    make = "Porsche",
    model = "911",
    limit = "10",
    fuel_type = "gas",
  } = filter;

  // Seçilen yıl değerini filter objesinden al
  const selectedYear = filter.year || "2015"; // Varsayılan olarak 2015 yılını kullan

  console.log("filtre", filter);

  // URL'de seçilen yılı da kullan
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${selectedYear}`,
    options
  );

  const data = await res.json();

  return data;
}
