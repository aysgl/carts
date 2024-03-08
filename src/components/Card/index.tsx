import { CarType } from "../../types/Types";
import Button from "../Button";

const Card = ({ car }: { car: CarType }) => {
  const translate = {
    fwd: "Önden Çeker",
    rwd: "Arkadan İtişli",
    "4wd": "4 çeker",
    awd: "Arkadan 4 çeker",
  };
  return (
    <div className="group bg-white text-black p-4 m-4 rounded-xl">
      <h1>
        {" "}
        {car.make} <span> {car.model}</span>
      </h1>
      <p className="text-2xl">
        <span className="text-[12px]">₺</span>
        {Math.round(Math.random() * 7000) + 1500}{" "}
        <span className="text-[12px]">/gün</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <img src="/car.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div>
        <div className="group-hover:hidden flex w-full justify-between">
          <div>{car.transmission === "a" ? "Otomatik" : "Manuel"}</div>
          <div>{translate[car.drive]}</div>
          <div>{car.fuel_type}</div>
        </div>
      </div>
      <div className="group-hover:flex hidden">
        <Button title="hello" style="w-full" />
      </div>
    </div>
  );
};

export default Card;
