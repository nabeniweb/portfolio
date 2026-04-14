import '../App.css'
import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu.tsx"
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"
import fullLogo from "../assets/fullLogo.svg"
import galleryIcon from "../assets/galleryIcon.svg"
import galleryIconSmall from "../assets/galleryIconSmall.svg"
import heroBackground from "../assets/heroBackground.png"
import recentBackground from "../assets/recentBackground.svg"
import { projects } from "../data/projects.ts"

function Home() {

  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  const openBurger = () => {
    setBurgerIsOpen(true)
  }

  const closeBurger = () => {
    setBurgerIsOpen(false)
  }
  return (
    <>
      <div className="overflow-visible">
        <section id="hero">
          <div className="relative w-full h-full min-h-dvh overflow-visible z-80">
            <div className="absolute top-20 left-20 lg:left-[calc(50%-34px)] z-100">
              <img src={headerLogo} className="select-none drag-none" draggable={false}/>
            </div>
            <button onClick={openBurger} className="flex gap-2.5 items-center absolute right-[78px] top-[80px] p-5 cursor-pointer z-100">
              <h3 className="text-lewhite">Menu</h3>
              <img src={hamburger} className="select-none drag-none" draggable={false}/>
            </button>
            <div className="relative w-full max-w-[1512px] px-[78px] flex flex-row-reverse pt-[200px] mx-auto">
              <div className="flex flex-col items-center justify-center gap-7.5 h-[calc(100dvh-280px)] my-auto w-full lg:max-w-[40vw] z-90">
                <img className="w-[425px] max-w-[40vw] min-w-[333px] select-none drag-none" src={fullLogo} draggable={false}/>
                <div className="flex justify-between items-center px-[33px] py-3.5 outline-lewhite bg-lewhite/10 backdrop-blur-2xl outline-3 rounded-full gap-8">
                  <h2 className="text-lewhite leading-none text-center">Web Designer</h2>
                  <h2 className="text-lewhite leading-none text-center">Illustrator</h2>
                  <h2 className="text-lewhite leading-none text-center">Graphic Designer</h2>
                </div>
                <a href="#/gallery" className="flex flex-row gap-2.5 items-center py-[26px] px-[35px] bg-lewhite rounded-xl mt-[40px] group hover:bg-blue cursor-pointer transition-all" draggable={false}>
                  <img src={galleryIcon} className="group-hover:fill-lewhite"/>
                  <h2 className="text-center text-leblack leading-none group-hover:text-lewhite"> Check out my work!</h2>
                </a>
              </div>
              <div className="absolute top-0 -translate-y-3/12 right-1/2 w-[66vw] h-[66vw]
                rounded-full bg-linear-to-b from-blue to-bluer z-1 
                lg:top-1/2 lg:-translate-y-[calc(50%-10%)] lg:left-1/2 lg:-translate-x-[calc(50%+75%)] lg:w-[45vw] lg:h-[45vw] max-w-[900px] max-h-[900px]"> </div>
              <div className="absolute top-0 -translate-y-3/12 right-1/2 w-[66vw] h-[66vw]
                rounded-full bg-linear-to-bl from-[#15072E]/0 from-33% to-[#15072E]/50 z-2 
                lg:top-1/2 lg:-translate-y-[calc(50%-10%)] lg:left-1/2 lg:-translate-x-[calc(50%+75%)] lg:w-[45vw] lg:h-[45vw] max-w-[900px] max-h-[900px]"> </div>
              <div className="absolute top-0 -translate-y-3/12 right-1/2 w-[66vw] h-[66vw]
                rounded-full bg-linear-to-bl from-[#15072E]/0 from-50% to-[#15072E]/60 z-3 
                lg:top-1/2 lg:-translate-y-[calc(50%-10%)] lg:left-1/2 lg:-translate-x-[calc(50%+75%)] lg:w-[45vw] lg:h-[45vw] max-w-[900px] max-h-[900px]"> </div>
              <div className="absolute top-0 -translate-y-3/12 right-1/2 w-[66vw] h-[66vw]
                rounded-full bg-linear-to-bl from-[#15072E00] from-60% to-[#00A6FF]/40 z-4 
                lg:top-1/2 lg:-translate-y-[calc(50%-10%)] lg:left-1/2 lg:-translate-x-[calc(50%+75%)] lg:w-[45vw] lg:h-[45vw] max-w-[900px] max-h-[900px]"> </div>
            </div>
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
              <img src={heroBackground} className="min-w-screen max-w-none object-cover translate-y-1/18 overflow-visible" />
              <div className="absolute w-[80vh] h-[80vh] lg:w-[66vw] lg:h-[66vw] rounded-full bg-lights blur-[500px] z-0 translate-x-1/3 right-0 lg:-top-1/9"></div>
              <div className="absolute w-[44vw] h-[44vw] rounded-full bg-lights blur-[500px] z-0 -translate-x-2/3 -bottom-1/3"></div>
            </div>
          </div>
        </section>
        <section id="recent">
          <div className="relative w-full">
            <div className="absolute top-0 w-full z-0 pointer-events-none overflow-hidden">
              <img src={recentBackground} className="w-[120%] max-w-[2200px] relative left-1/2 -translate-x-1/2 translate-y-10"/>
              <div className="absolute w-[44vw] h-[44vw] rounded-full bg-lights blur-[500px] z-0 right-1/9 top-1/9"></div>
            </div>
            <div className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-start gap-[36px] mx-auto mt-[50px] z-99">
              <h1 className="text-center lg:text-left leading-none mb-5">Recent Works</h1>
              <div className="flex flex-col gap-22 w-full lg:flex-row">
              {projects.slice(0,3).map((project) => (
                <div 
                  key={project.id}
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                  className="w-full aspect-3/4 bg-cover bg-center rounded-xl max-h-[66vh]"></div>
              ))}
              </div>
              <div className="w-full flex justify-center">
                <a href="#/gallery" className="flex flex-row gap-2.5 py-2.5 px-[35px] bg-lewhite rounded-[12px] group hover:bg-blue cursor-pointer transition-all">
                  <img src={galleryIconSmall} className="group-hover:text-lewhite"/>
                  <h2 className="text-leblack text-nowrap group-hover:text-lewhite">View All</h2>
                </a>
              </div>
            </div>
          </div>
        </section>
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
        {burgerIsOpen && (
        <div className="absolute top-[80px] right-[78px] z-99">
            <HamburgerMenu
                closeBurger={closeBurger}/>
        </div>
        )}
      </div>
    </>
  )
}

export default Home
