import '../App.css'
import { useState } from "react"
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"

function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  // const [imgSrc, setImgSrc] = useState(null)

  const openPopup = () => {
    // setImgSrc("big-image.jpg")
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <>
          <a href="#/" className="absolute top-20 left-20 cursor-pointer z-90">
            <img src={headerLogo} className="drag-none" draggable={false}/>
          </a>
          <div className="flex gap-2.5 items-center absolute right-[78px] top-20 z-90">
            <h3>Menu</h3>
            <img src={hamburger} className="select-none drag-none" draggable={false}/>
          </div>
      <section id="Gallery">
          <div className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-center gap-20 pt-[200px] mx-auto mt-[50px] z-90">
            <h1>My Works</h1>
            <div className="flex gap-22 w-full">
              <div onClick={openPopup} className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
              <div onClick={openPopup} className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
              <div onClick={openPopup} className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
            </div>
            <div className="flex gap-22 w-full">
              <div onClick={openPopup}className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
              <div onClick={openPopup} className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
              <div onClick={openPopup} className="w-full aspect-3/4 bg-gray-400 rounded-xl"></div>
            </div>
          </div>
      </section>
      <div className="absolute top-0 w-full h-full z-0">
        <div className="w-[66vw] h-[66vw] absolute -top-[50px] left-[calc(16.5vw)] bg-lights rounded-full blur-[500px] z-0"></div>
      </div>
      {isOpen && (
        <div className="flex gap-2.5 justify-between items-center fixed left-1/6 top-1/10 w-[66vw] h-[80vh] bg-[#02030B75] backdrop-blur-2xl p-5 rounded-2xl z-99">
          <div className="w-full aspect-[1/1] bg-gray-400 rounded-xl outline-8 outline-lewhite">
          </div>
          <div className="bg-lewhite w-1 h-9/10 mx-2.5"></div>
          <div className="flex flex-col w-full h-full justify-between items-center">
            <div className="flex flex-col gap-10 justify-start">
            <h1>Project Title</h1>
            <p>Explanation text paragraph to explain the process and the purpose and all that yknow what I mean</p>
            </div>
            <button onClick={closePopup} className="flex justify-center items-center w-3/4 outline-lewhite outline-1 rounded-full py-2.5 mb-5 group hover:bg-lewhite cursor-pointer">
              <h3 className="text-lewhite group-hover:text-leblack">Close</h3>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
