
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Navbar from "./Navbar"
import { FaMessage } from "react-icons/fa6"
import { HeadphoneData } from "../data/MockData"
import { useEffect, useState } from "react"

const Hero = () => {
  const [active, setActive] = useState(HeadphoneData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeadphoneData.length);
    }, 3000);
    return () => clearInterval(interval);  
  },[currentIndex])

  useEffect(() => {
    setActive(HeadphoneData[currentIndex]);
  }, [currentIndex])

  return (
    <section className="bg-red-400 text-white">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">
        {/*Headdphone info*/}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 md:space-y-7 text-center md:text-left">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">{active.title}</h1>
            <p className="text-sm leading-loose text-white/80">{active.subtitle}</p>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold">{active.price}</p>
            {/*Social Icons*/}
            <div className="flex items-center justify-center md:justify-start gap-4 text-3xl">
              <FaFacebook  className="cursor-pointer border rounded-full p-[6px]"/>
              <FaInstagram  className="cursor-pointer border rounded-full p-[6px]"/>
              <FaTwitter  className="cursor-pointer border rounded-full p-[6px]"/> 
            </div>
          </div>
        </div>
        {/*Headphone Image section*/}
        <div className="flex flex-col items-center justify-center order-1 md:order-2 relative">
          <img src={active.image} alt=""  className="w-[300px] md:w-[400px] xl:w-[500px] relative z-10"/>
          <div className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-poppins font-extrabold">{active.modal}</div> 
        </div>
        <div className="absolute bottom-10 right-10 z-[999]">
          <FaMessage className="text-2xl cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
