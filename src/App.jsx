import { useState } from 'react'
import LogoGEEl from "./assets/images/LogoGeel_Horizontal.png"
import './App.css'
import AppRoutes from './routes/routes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="imgHeaderInner">
        <img src={LogoGEEl} alt="" />
      </div>
      <AppRoutes />
    </>
  )
}

export default App
