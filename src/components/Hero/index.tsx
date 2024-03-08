import Button from "../Button"
import Car from "../../assets/car.png"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-content md:py-24 py-5">
      <div className="flex-1 sm:mr-4 text-center sm:text-left">
        <h1 className="text-7xl font-light text-emerald-400 pt-5">
          Özgürlüğü Hisset, Yolculuğa Başla!
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, necessitatibus officiis animi ad eius reiciendis dicta nobis, sequi porro sit aliquid ipsum, laudantium id obcaecati et aperiam nisi recusandae aliquam!
        </p>
        <Button title="Discover" style="mt-4" />
      </div>
      <div className="flex-1 mt-4 sm:mt-0">
        <motion.img
        initial={{
            translateX:-200,
            scale:0.2
          }}
          animate={{
            translateX:0,
            scale:1
          }}
          transition={{
            duration:.6
          }}
        src={Car} alt="" className="w-full sm:max-w-none" />
      </div>
    </div>
  )
}

export default Hero
