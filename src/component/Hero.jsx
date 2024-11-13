
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Navbar from "./Navbar"
import { FaMessage } from "react-icons/fa6"
import { HeadphoneData } from "../data/MockData"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { SlideRight } from "../Utility/Animation"

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
    <motion.section
      initial={{
        backgroundImage: `radial-gradient(circle, ${active.bgColor} 0%, ${active.bgColor} 0%)`,
      }} 
      animate={{
        backgroundImage: `radial-gradient(circle, ${active.bgColor}aa 0%, ${active.bgColor} 70%)`,
      }}
      transition={{ duration: 0.8 }}
      className="bg-red-400 text-white"
    >
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">
        {/*Headdphone info*/}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 md:space-y-7 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={active.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {active.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="show"
                exit="exit" 
                className="text-sm leading-loose text-white/80"
              >
                {active.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p 
                key={active.id}
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {active.price}
              </motion.p>
            </AnimatePresence>
            
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
          <AnimatePresence mode="wait">
            <motion.img 
              key={active.id}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.4, ease: easeInOut, delay: 0}}
              exit={{opacity: 0, x: -100}}
              src={active.image} 
              alt=""  
              className="w-[300px] md:w-[400px] xl:w-[500px] relative z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: easeInOut, delay: 0 }}
            exit={{ opacity: 0 }}
            className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-poppins font-extrabold"
          >
            {active.modal}
          </motion.div>
          </AnimatePresence> 
        </div>
        <div className="absolute bottom-10 right-10 z-[999]">
          <FaMessage className="text-2xl cursor-pointer"/>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
