import { motion } from "framer-motion";
import { CarType } from "../../types/Types";
import { generateImage } from "../../utils/generateImage";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Card = ({ car }: { car: CarType }) => {
  const translate = {
    fwd: "Önden Çeker",
    rwd: "Arkadan İtişli",
    "4wd": "4 çeker",
    awd: "Arkadan 4 çeker",
  };

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("first");
    navigate(`/${car.make}&${car.model}`);
  };
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="group bg-white text-black p-4 rounded-xl"
    >
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
        <img
          src={generateImage(car)}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="">
        <div className="group-hover:hidden flex w-full justify-between h-10">
          <div>{car.transmission === "a" ? "Otomatik" : "Manuel"}</div>
          <div>{translate[car.drive]}</div>
          <div>{car.fuel_type}</div>
        </div>
      </div>
      <div className="group-hover:flex hidden">
        <Button onClick={handleClick} title="hello" style="w-full" />
      </div>
    </motion.div>
  );
};

export default Card;
