import Button from "../Button"
import Car from "../../assets/car.png"

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-content h-screen">
      <div className="flex-1 sm:mr-4 text-center sm:text-left">
        <h1 className="text-6xl font-light text-emerald-400 pt-5">
          Özgürlüğü Hisset, Yolculuğa Başla!
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, necessitatibus officiis animi ad eius reiciendis dicta nobis, sequi porro sit aliquid ipsum, laudantium id obcaecati et aperiam nisi recusandae aliquam!
        </p>
        <Button title="Discover" style="mt-4" />
      </div>
      <div className="flex-1 mt-4 sm:mt-0">
        <img src={Car} alt="" className="w-full sm:max-w-none" />
      </div>
    </div>
  )
}

export default Hero
