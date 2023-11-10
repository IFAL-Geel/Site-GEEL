import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../components/Menu"

export default function AppRoutes(props) {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}