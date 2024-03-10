import { CarType } from "../types/Types";
import { colors } from "./constants";

export const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL(
    `https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=${
      car.make
    }&modelFamily=${car.model.split("/")[0]}&zoomType=fullscreen`
  );

  if (angle) {
    url.searchParams.append("angle", angle);
  }
  const random = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[random]);

  return url.href;
};
