import "../App.css"
import { motion } from "framer-motion"

type ImageOverlayProps = {
  close: () => void
  project: Project
}

type Project = {
  id: number
  title: string
  image: string
  description: string
  thumbnail: string
}

function ImageOverlay({ close, project }:
ImageOverlayProps) {

  return(
  <>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{
          duration: 0.2
        }}
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") {
            close()
          }
        }}
        className="fixed inset-0 flex items-center justify-center bg-leblack/40 backdrop-blur-2xl w-full h-full z-98">
        <div className=" group max-w-[90vw] max-h-[90vh] rounded-xl p-5 bg-lewhite z-98 hover:mb-20 transition-all ease-out">
          <img className="max-h-[80vh] max-w-[80vw] object-contain rounded-xl" src={project.image}/>
          <div className="fixed w-[100vw] left-0 bottom-0 bg-linear-to-t from-leblack via-leblack/60 via-75% to-leblack/0 z-100 opacity-0 group-hover:opacity-100 transition-all">
              <div className="flex flex-col p-20">
                <h1 className="leading-none mb-5">{project.title}</h1>
                <p className="!text-[24px]">{project.description}</p>
              </div>
          </div>
        </div>
      </motion.div>
  </>
  )
}

export default ImageOverlay
