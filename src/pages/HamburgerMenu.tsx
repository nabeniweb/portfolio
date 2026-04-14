import close from "../assets/close.svg"
import { motion } from "framer-motion"

type HamburgerMenuProps = {
  closeBurger: () => void
}

function HamburgerMenu ({ closeBurger }:
HamburgerMenuProps) {
  return(
  <>
      <motion.div
        initial={{ width: "0px", height: "0px", opacity: 0 }}
        animate={{ width: "auto", height: "auto", opacity: 1 }}
        exit= {{ width: "0px", height: "0px", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          ease: "easeOut"
        }}

        className=" relative bg-lewhite flex flex-col gap-2.5 p-5 pl-[100px] pb-9 rounded-br-[65px] rounded-bl-[65px] rounded-tl-[65px] items-end justify-end overflow-clip">
        <div className="absolute w-full h-[96%] -right-2/16 -top-[5%] border-leblack border-l-4 border-b-4 rounded-bl-[65px] z-0 pointer-events-none"></div>
        <div className="absolute w-full h-[96%] -right-1/16 top-0 border-leblack border-l-4 border-b-4 rounded-bl-[65px] z-0 pointer-events-none"></div>
        <button onClick={closeBurger} className="flex flex-row gap-2.5 items-center cursor-pointer z-99">
          <h3 className="text-leblack">Close</h3>
          <img src={close} className="select-none drag-none" draggable={false}/>
        </button>
        <div className="flex flex-col items-end">
          <a href="#" className="p-2.5 cursor-pointer hover:text-[#071FA3]">
            <h2>Home</h2>
          </a>
          <a href="#/gallery" className="p-2.5 cursor-pointer hover:text-[#071FA3]">
            <h2>Gallery</h2>
          </a>
          <a href="" className="p-2.5 cursor-pointer hover:text-[#071FA3]">
            <h2>About</h2>
          </a>
          <a href="" className="p-2.5 cursor-pointer hover:text-[#071FA3]">
            <h2>Contact</h2>
          </a>
        </div>
      </motion.div>
  </>
  )
}
export default HamburgerMenu
