import { useState } from 'react'
import LogoGEEl from "./assets/images/LogoGEEL_Horizontal.png"
import './App.css'
import AppRoutes from './routes/routes'

function App() {
  return (
    <>
      <div className="imgHeaderInner">
        <img src={LogoGEEl} alt="Logo GEEL" />
      </div>
      <AppRoutes />
    </>
  )
}

export default App
