import { domAnimation, LazyMotion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LazyMotion>
  )
}

export default App
