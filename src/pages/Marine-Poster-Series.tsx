import '../App.css'
import { useState, useEffect } from "react"
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"
import HamburgerMenu from "./HamburgerMenu.tsx"
import { AnimatePresence, motion } from "framer-motion"
import { marine } from "../data/marine.ts"

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
      <div className="absolute top-20 w-[90vw] translate-x-1/20 flex justify-between z-99">
          <a href="#/" className="cursor-pointer flex items-center justify-center">
            <img src={headerLogo} className="drag-none w-5/8 lg:w-full" draggable={false}/>
          </a>
        <h3 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-lewhite text-center line-clamp-1 lg:text-[36px]!">Marine Poster Series</h3>
          <button onClick={openBurger} className="flex gap-2.5 items-center p-1 lg:p-5 cursor-pointer">
            <h3 className="text-lewhite max-lg:hidden">Menu</h3>
            <img src={hamburger} className="select-none drag-none w-5/8 lg:w-full" draggable={false}/>
          </button>
      </div>
      <section id="top">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-[1512px] px-[5vw] flex flex-col items-center gap-20 pt-[230px] mx-auto z-80">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full gap-10">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-20 w-full">
              <div className="flex flex-col gap-5 w-full lg:w-[33%]">
                <h2 className="mb-2.5 text-center lg:text-left leading-none text-lewhite !text-[38px] w-full">About the Project</h2>
                <p className="text-left">{marine.about[0]}</p>
              </div>
              <div className="w-full">
                <img className="w-full rounded-xl" src="images/marineFull.jpg"/>
              </div>
            </div>
            <div className="h-[5px] w-full bg-radial from-[#4A578A] to-#4A578A00"></div>
            <div className="flex flex-col lg:flex-row items-start gap-20 w-full">
              <div className="w-full">
                <img className="w-full rounded-xl" src="images/marineCloseUps.webp"/>
              </div>
              <div className="flex flex-col gap-5 w-full lg:w-[33%]">
                <h2 className="mb-2.5 text-center lg:text-left leading-none text-lewhite !text-[38px] w-full">Design Solution</h2>
                <p className="text-left">{marine.solution[0]}</p>
                <p className="text-left">{marine.solution[1]}</p>
              </div>
            </div>
            <div className="h-[5px] w-full bg-radial from-[#4A578A] to-#4A578A00"></div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="overflow-x-scroll w-full snap-x snap-mandatory">
            <div className="flex flex-row w-max h-[85vh] gap-3 snap-x">
              <div className="snap-center max-md:snap-always">
                <img className="rounded-xl lg:h-[85vh] max-md:w-[90vw]" src="images/marineShark.webp"/>
              </div>
              <div className="snap-center max-md:snap-always">
                <img className="rounded-xl lg:h-[85vh] max-md:w-[90vw]" src="images/marineRay.webp"/>
              </div>
              <div className="snap-center max-md:snap-always">
                <img className="rounded-xl lg:h-[85vh] max-md:w-[90vw]" src="images/marineOctopus.webp"/>
              </div>
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
        <div key="menu "className="fixed w-[80vw] lg:w-[450px] h-screen right-0 top-0 z-100">
            <HamburgerMenu
                closeBurger={closeBurger}/>
        </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
