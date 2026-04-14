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
          <a href="#/" className="absolute top-20 left-20 cursor-pointer z-100">
            <img src={headerLogo} className="drag-none" draggable={false}/>
          </a>
          <button onClick={openBurger} className="flex gap-2.5 items-center absolute right-[78px] top-[80px] p-5 cursor-pointer z-99">
            <h3 className="text-lewhite">Menu</h3>
            <img src={hamburger} className="select-none drag-none" draggable={false}/>
          </button>
      <section id="Projects">
          <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-center gap-20 pt-[200px] mx-auto z-80">
            <h1 className="text-center">Large Projects</h1>
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
          className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-center gap-20 pt-[200px] mx-auto z-80">
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
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl cursor-pointer"></motion.button>
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
