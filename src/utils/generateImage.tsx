import { CarType } from "../types/Types";

export const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL(
    `https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=${car.make}&modelFamily=${car.model}`
  );

  if (angle) {
    url.searchParams.append("zoomType", angle);
  }

  return url.href;
};
