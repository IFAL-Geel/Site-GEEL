import { useState } from 'react'
import LogoGEEl from "./assets/images/LogoGeel_Horizontal.png"
import './App.css'
import AppRoutes from './routes/routes'
import Footer from './components/Footer/Footer'
import DarkToggle from './components/DarkToggle/DarkToggle'

function App() {
  return (
    <>
      <div className="imgHeaderInner">
        <img src={LogoGEEl} alt="" />
        <DarkToggle />
      </div>
      <AppRoutes />
    </>
  )
}

export default App
