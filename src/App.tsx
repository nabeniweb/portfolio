import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Gallery from './pages/Gallery.tsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
  )
}

export default App
