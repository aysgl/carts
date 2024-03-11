import { motion } from "framer-motion";
import { CarType } from "../../types/Types";
import { generateImage } from "../../utils/generateImage";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Category2, GasStation, Kanban } from "iconsax-react";

const Card = ({ car }: { car: CarType }) => {
  const translate = {
    fwd: "Front-Wheel Drive",
    rwd: "Rear-Wheel Drive",
    "4wd": "Four-Wheel Drive",
    awd: "All-Wheel Drive",
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${car.make}/${car.model}/${car.year}`);
  };
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="group bg-white text-black p-10 rounded-xl text-center"
    >
      <h1 className="text-2xl h-[80px] capitalize font-bold">
        {car.make} <span className="font-light"> {car.model}</span>
      </h1>
      <p className="text-3xl ffont-light">
        ${Math.round(Math.random() * 7000) + 1500}{" "}
      </p>
      <p>{car.year}</p>
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="">
        <div className="text-[12px] group-hover:hidden flex w-full justify-between items-center h-10">
          <div className="text-center">
            <Category2
              className="mx-auto mb-2"
              size="28"
              color="#FF8A65"
              variant="TwoTone"
            />
            {car.transmission === "a" ? "Automatic" : "Manual"}
          </div>
          <div>
            <Kanban
              className="mx-auto mb-2"
              size="28"
              color="#FF8A65"
              variant="TwoTone"
            />
            {translate[car.drive]}
          </div>
          <div>
            <GasStation
              className="mx-auto mb-2"
              size="28"
              color="#FF8A65"
              variant="TwoTone"
            />
            {car.fuel_type}
          </div>
        </div>
      </div>
      <div className="group-hover:flex hidden">
        <Button onClick={handleClick} title="View Details" style="w-full" />
      </div>
    </motion.div>
  );
};

export default Card;
