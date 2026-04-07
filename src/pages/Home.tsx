import '../App.css'
import headerLogo from "../assets/headerLogo.svg"
import hamburger from "../assets/hamburger.svg"
import fullLogo from "../assets/fullLogo.svg"
import galleryIcon from "../assets/galleryIcon.svg"
import galleryIconSmall from "../assets/galleryIconSmall.svg"
import heroBackground from "../assets/heroBackground.png"
import recentBackground from "../assets/recentBackground.svg"

function Home() {
  return (
    <>
      <section id="hero">
        <div className="relative w-full h-dvh z-99">
          <div className="absolute top-[80px] left-[calc(50%-34px)]">
            <img src={headerLogo} className="select-none drag-none" draggable={false}/>
          </div>
          <div className="flex gap-2.5 items-center absolute right-[78px] top-[80px]">
            <h3>Menu</h3>
            <img src={hamburger} className="select-none drag-none" draggable={false}/>
          </div>
          <div className="relative w-full max-w-[1512px] px-[78px] flex flex-row-reverse pt-[200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-7.5 h-[calc(100dvh-280px)] my-auto">
              <img className="max-w-[425px] select-none drag-none" src={fullLogo} draggable={false}/>
              <div className="flex flex-row justify-between px-[33px] py-2 bg-lewhite rounded-full w-[618px]">
                <h2 className="text-leblack">Web Designer</h2>
                <h2 className="text-leblack">Illustrator</h2>
                <h2 className="text-leblack">Graphic Designer</h2>
              </div>
              <a href="#/gallery" className="flex flex-row gap-2.5 py-[26px] px-[35px] bg-lewhite rounded-xl mt-[40px] group hover:bg-blue cursor-pointer">
                <img src={galleryIcon} className="group-hover:fill-lewhite"/>
                <h2 className=" text-leblack group-hover:text-lewhite"> Check out my work!</h2>
              </a>
            </div>
            <div className="absolute -left-[18vw] top-[calc(8vw)] w-[45vw] h-[45vw] max-w-[900px] max-h-[900px] rounded-full bg-linear-to-b from-blue to-bluer z-1"> </div>
            <div className="absolute -left-[18vw] top-[calc(8vw)] w-[45vw] h-[45vw] max-w-[900px] max-h-[900px] rounded-full bg-linear-to-bl from-[#15072E00] from-50% to-[#15072EAA]z-1 "> </div>
            <div className="absolute -left-[18vw] top-[calc(8vw)] w-[45vw] h-[45vw] max-w-[900px] max-h-[900px] rounded-full bg-linear-to-bl from-[#15072E00] from-60% to-[#00A6FF50]z-1 "> </div>
          </div>
        </div>
      </section>
      <section id="recent">
          <div className="relative w-full max-w-[1512px] px-[78px] flex flex-col items-start gap-[36px] pt-[200px] mx-auto mt-[50px] z-99">
            <h1>Recent Works</h1>
            <div className="flex gap-22 w-full">
              <div className="w-full aspect-[3/4] bg-gray-400 rounded-xl"></div>
              <div className="w-full aspect-[3/4] bg-gray-400 rounded-xl"></div>
              <div className="w-full aspect-[3/4] bg-gray-400 rounded-xl"></div>
            </div>
            <div className="w-full flex justify-center">
              <a href="#/gallery" className="flex flex-row gap-2.5 py-2.5 px-[35px] bg-lewhite rounded-[12px] group hover:bg-blue cursor-pointer">
                <img src={galleryIconSmall} className="group-hover:text-lewhite"/>
                <h2 className="text-leblack text-nowrap group-hover:text-lewhite">View All</h2>
              </a>
            </div>
          </div>
      </section>
      <div className="absolute top-0 w-full z-0 overflow-hidden">
        <img src={heroBackground} className="w-full z-0 relative -translate-y-20"/>
        <img src={recentBackground} className="w-[120%] max-w-[2200px] relative left-1/2 -translate-x-1/2 -translate-y-40"/>
        <div className="w-[66vw] h-[66vw] absolute -top-[50px] -right-[50px] bg-lights rounded-full blur-[500px] z-0"></div>
        <div className="w-[24vw] h-[24vw] absolute top-[66vh] left-[11vw] bg-lights rounded-full blur-[500px] z-0"></div>
        <div className="w-[40vw] h-[40vw] absolute top-[calc(100vh+40vh)] right-[15vw] bg-lights rounded-full blur-[500px] z-0"></div>
      </div>
    </>
  )
}

export default Home
