import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Gallery from './pages/Gallery.tsx'
import Riptide from './pages/Riptide.tsx'
import MarinePosterSeries from './pages/Marine-Poster-Series.tsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/gallery/riptide" element={<Riptide/>}/>
        <Route path="/gallery/marine-poster-series" element={<MarinePosterSeries/>}/>
      </Routes>
  )
}

export default App
