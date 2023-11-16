import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Menu from "../components/Menu/Menu"
import News from "../pages/News/News"
import About from "../pages/About/About"

export default function AppRoutes(props) {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}