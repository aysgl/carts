import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CarAnimation = ({ url }: { url: string }) => {
  const angles = [
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "211",
    "212",
    "213",
    "214",
    "215",
    "216",
    "217",
    "218",
    "219",
    "220",
    "221",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "230",
    "231",
  ];
  const [currentAngleIndex, setCurrentAngleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const autoSlide = () => {
      if (!isHovered) {
        const newIndex = (currentAngleIndex + 1) % angles.length;
        setCurrentAngleIndex(newIndex);
      }
    };

    const interval = setInterval(autoSlide, 100);

    return () => clearInterval(interval);
  }, [currentAngleIndex, isHovered]);

  return (
    <div className="text-center">
      <motion.div
        initial={{
          // translateX: 200,
          scale: 0.2,
        }}
        animate={{
          translateX: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        id="imagesContainer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {angles.map((angle, index) => (
          <img
            key={index}
            src={`${url}&angle=${angle}`}
            alt={`Angle ${angle}`}
            className={index === currentAngleIndex ? "image current" : "image"}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CarAnimation;
