import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Gallery from './pages/Gallery.tsx'
import Riptide from './pages/Riptide.tsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/gallery/riptide" element={<Riptide/>}/>
      </Routes>
  )
}

export default App
