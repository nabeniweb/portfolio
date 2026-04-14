import '../App.css'
import { useState, useEffect } from "react"
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"
import HamburgerMenu from "./HamburgerMenu.tsx"
import { AnimatePresence, motion } from "framer-motion"
import { riptide } from "../data/riptide.ts"

function Gallery() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  //hamburger menu
  const openBurger = () => {
    setBurgerIsOpen(true)
  }

  const closeBurger = () => {
    setBurgerIsOpen(false)
  }

  useEffect(() => {
    window.scrollTo({
      top:0,
      left:0,
      behavior: "instant"
    })
  }, [])

  const container = {
    hidden: { opacity: 0, marginTop: "75px" },
    show : {
      opacity: 1,
      marginTop: "0px",
      transition: {
        staggerchildren: 0.3,
        delaychildren: 0.1
      }
    }
  }

  return (
    <>
      <a href="#/" className="absolute top-20 left-20 cursor-pointer z-100">
        <img src={headerLogo} className="drag-none" draggable={false}/>
      </a>
      <button onClick={openBurger} className="flex gap-2.5 items-center absolute right-[78px] top-[80px] p-5 cursor-pointer z-99">
        <h3 className="text-lewhite">Menu</h3>
        <img src={hamburger} className="select-none drag-none" draggable={false}/>
      </button>
      <section id="top">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-center gap-20 pt-[200px] mx-auto z-80">
          <h1 className="leading-none mt-3.5 text-center">Riptide: Expense Tracker</h1>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-between w-full gap-20 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-20 items-center max-w-[500px] w-full">
              <div className="flex flex-col items-center gap-5">
                <h2 className="mb-2.5 text-center leading-none text-lewhite !text-[38px]">About the Project</h2>
                <p className="text-left">{riptide.about}</p>
              </div>
              <div className="w-full">
                <img className="w-full rounded-xl" src="images/riptideThumb.jpg"/>
              </div>
              <div className="w-full">
                <img className="w-full rounded-xl" src="images/riptideImage2.png"/>
              </div>
            </div>
            <div className="flex flex-col gap-20 items-center max-w-[500px] w-full">
              <div className="w-full">
                <img className="w-full rounded-xl" src="images/riptideImage1.png"/>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h2 className="mb-2.5 text-center leading-none text-lewhite !text-[38px]">Design Solution</h2>
                <p className="text-left">{riptide.solution[0]}</p>
                <p className="text-left">{riptide.solution[1]}</p>
                <p className="text-left">{riptide.solution[2]}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-3 w-full">
            <div className="flex justify-center w-full">
              <img className="h-2/3 rounded-xl" src="images/riptideImage1.png"/>
            </div>
            <div className="flex justify-center w-full">
              <img className="h-2/3 rounded-xl" src="images/riptideImage3.png"/>
            </div>
            <div className="flex justify-center w-full">
              <img className="h-2/3 rounded-xl" src="images/riptideImage4.png"/>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <div className="absolute top-0 w-full h-full z-0 pointer-events-none">
        <div className="w-[66vw] h-[66vw] absolute -top-[50px] left-[calc(16.5vw)] bg-lights rounded-full blur-[500px] z-0"></div>
      </div>
      <section id="footer">
        <div className="relative bg-linear-to-b from-blue to-bluer mt-[200px]">
          <div className="relative w-full max-w-[1512px] px-[78px] py-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-lewhite leading-none !text-[38px]">Sitemap</h2>
              <h3 className="text-lewhite">Home</h3>
              <h3 className="text-lewhite">Gallery</h3>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {burgerIsOpen && (
        <div key="menu "className="absolute top-[80px] right-[78px] z-99">
            <HamburgerMenu
                closeBurger={closeBurger}/>
        </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
