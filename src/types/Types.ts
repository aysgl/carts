import { MouseEventHandler } from "react";

export type ButtonType = {
  title: string;
  disabled?: boolean;
  style?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CarType = {
  city_mpg: string;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: 26;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};

export type Params = {
  make: string;
  model: string;
  year?: string;
};

export type OptionType = {
  value: string;
  label: string;
};
