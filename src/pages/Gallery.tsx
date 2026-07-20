import '../App.css'
import { useState, useEffect } from "react"
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"
import HamburgerMenu from "./HamburgerMenu.tsx"
import ImageOverlay from "./ImageOverlay.tsx"
import { projects } from "../data/projects.ts"
import { projectsLarge } from "../data/projectsLarge.ts"
import { AnimatePresence, motion } from "framer-motion"

function Gallery() {

  type Project = {
    id: number;
    title: string;
    image: string;
    thumbnail: string;
    description: string;
    colspan: number;
  };
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  //hamburger menu
  const openBurger = () => {
    setBurgerIsOpen(true)
  }

  const closeBurger = () => {
    setBurgerIsOpen(false)
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  function close() {
    setSelectedProject(null)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
        <h3 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-lewhite lg:text-[36px]!">Gallery</h3>
          <button onClick={openBurger} className="flex gap-2.5 items-center p-1 lg:p-5 cursor-pointer">
            <h3 className="text-lewhite max-lg:hidden">Menu</h3>
            <img src={hamburger} className="select-none drag-none w-5/8 lg:w-full" draggable={false}/>
          </button>
      </div>
      <section id="Projects">
          <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-[1512px] px-[5vw] flex flex-col items-center gap-20 pt-[230px] mx-auto z-80">
            <div className="grid grid-cols-1 auto-rows-[calc(45vh)] gap-5 w-full lg:grid-cols-2">
              {projectsLarge.map((project) => (
              <motion.a
              whileHover={{scale: 1.05, transition: {  duration: 0.2, ease: "easeOut" }}}
              key={project.id}
              href={`#/gallery/${project.link}`}
              style={{ backgroundImage: `url(${project.thumbnail})`, gridColumn: `span ${project.colspan}` }}
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl cursor-pointer"></motion.a>
              ))}
            </div>
          </motion.div>
      </section>
      <section id="Other">
          <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative w-full max-w-[1512px] px-[5vw] flex flex-col items-center gap-20 pt-[200px] mx-auto z-80">
            <h1 className="text-center">Other Works</h1>
            <div className="grid grid-cols-1 auto-rows-[calc(45vh)] gap-5 w-full lg:grid-cols-3">
              {projects.map((project) => (
              <motion.button
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{scale: 1.05, transition: {  duration: 0.2, ease: "easeOut" }}}
              key={project.id}
              style={{ backgroundImage: `url(${project.thumbnail})`, gridColumn: `span ${project.colspan}` }}
              onClick={() => setSelectedProject(project)}
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl cursor-pointer max-lg:col-span-1!"></motion.button>
              ))}
            </div>
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
        {selectedProject && (
        <ImageOverlay 
          project={selectedProject}
          close={close}
          key="modal"/>
        )}
      </AnimatePresence>
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
