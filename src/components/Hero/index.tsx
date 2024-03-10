import CarAnimation from "./CarAnimation";

const Hero = () => {
  const urls: { [key: number]: string } = {
    0: "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=porsche&modelFamily=718%20spyder&zoomType=fullscreen",
    1: "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=porsche&modelFamily=718%20cayman%20gt4&zoomType=fullscreen",
    2: "https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=porsche&modelFamily=718%20boxster&zoomType=fullscreen",
  };

  const random = Math.floor(Math.random() * Object.keys(urls).length);
  const randomUrl = urls[parseInt(Object.keys(urls)[random])];

  return (
    <div className="grid md:grid-cols-8 sm:flex-row justify-content py-5">
      <div className="md:col-span-3 col-span-1 sm:mr-4 text-center sm:text-left">
        <h1 className="text-7xl font-light pt-5 leading-tight pt-14 mt-6">
          Feel the <span className="font-bold">Freedom,</span> Start Your
          Journey!
        </h1>
      </div>
      <div className="md:col-span-5 col-span-1 pt-14 sm:pt-0">
        <CarAnimation url={randomUrl} />
      </div>
    </div>
  );
};

export default Hero;
