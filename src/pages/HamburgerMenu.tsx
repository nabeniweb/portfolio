import close from "../assets/close.svg"
import hamburgerBackground from "../assets/hamburgerBackground.png"
import { motion } from "framer-motion"

type HamburgerMenuProps = {
  closeBurger: () => void
}

function HamburgerMenu ({ closeBurger }:
HamburgerMenuProps) {
  return(
  <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit= {{ x: "100%", transition: { duration: 0.2, ease: [0.12, 0, 0.39, 0] } }}
        transition={{ 
          duration: 0.8,
          ease: [0, 0.93, 0.76, 1]
        }}

        className="w-full h-full bg-blue/50 backdrop-blur-2xl flex flex-col items-end">
        <div className="flex flex-col items-end w-full text-lewhite pr-[5vw] pl-8">
          <div className="h-50"></div>
          <a href="#" className="py-2.5 w-full pr-3 cursor-pointer hover:text-[#071FA3] hover:bg-lewhite rounded-2xl transition-all ease-in" draggable={false}>
            <h2 className="text-right text-[28px]!">Home</h2>
          </a>
          <a href="#/gallery" className="py-2.5 w-full pr-3 cursor-pointer hover:text-[#071FA3] hover:bg-lewhite rounded-2xl transition-all ease-in" draggable={false}>
            <h2 className="text-right text-[28px]!">Gallery</h2>
          </a>
          <a href="" className="py-2.5 w-full pr-3 cursor-pointer hover:text-[#071FA3] hover:bg-lewhite rounded-2xl transition-all ease-in" draggable={false}>
            <h2 className="text-right text-[28px]!">About</h2>
          </a>
          <a href="" className="py-2.5 w-full  pr-3 cursor-pointer hover:text-[#071FA3] hover:bg-lewhite rounded-2xl transition-all ease-in" draggable={false}>
            <h2 className="text-right text-[28px]!">Contact</h2>
          </a>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img src={hamburgerBackground} className="min-w-[1000px] -translate-x-1/6 -translate-y-1/6"/>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        exit={{ opacity: "0%" }}
        transition={{
          duration: 0.2,
          ease: "linear"
        }}
        className="absolute top-20 right-[5vw] mr-3">
        <button onClick={closeBurger} className="flex p-1 py-3 max-md:-translate-y-1/6 lg:p-5 gap-2.5 items-center cursor-pointer z-99 bg-lewhite rounded-full">
          <motion.div
            initial={{ width: 0, opacity: "0%" }}
            animate={{ width: "auto", opacity: "100%" }}
            exit={{ width: 0, opacity: "0%", transition: { duration: 0.2, ease: [0, 0.93, 0.76, 1] } }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0, 0.93, 0.76, 1]
            }}
            className="max-md:hidden">
            <h3>Close</h3>
          </motion.div>
          <motion.div
            initial={{ rotate: 90, opacity: "0%" }}
            animate={{ rotate: 0, opacity: "100%" }}
            exit={{ rotate: 90, opacity: "0%", transition: { duration: 0.2, ease: [0, 0.93, 0.76, 1] } }}
            transition={{ 
              duration: 1,
              type: "spring"
            }}
          className="flex items-center justify-center">
            <img src={close} className="w-5/8 lg:w-full select-none drag-none" draggable={false}/>
          </motion.div>
        </button>
      </motion.div>
  </>
  )
}
export default HamburgerMenu
