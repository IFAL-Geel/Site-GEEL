import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Menu from "../components/Menu/Menu"
import News from "../pages/News/News"
import About from "../pages/About/About"
import Report from "../pages/Report/Report"
import Post from "../pages/Post/Post"
import BackTop from "../components/BackTop/BackTop"
import Journals from "../pages/Journals/Journals"
import LeftMenu from "../components/LeftMenu/LeftMenu"
import Auth from "../pages/Auth/Auth"
import AuthProvider from "../contexts/InstagramAPI/authContext"
import Admin from "../pages/Admin/Admin"

export default function AppRoutes(props) {
    return(
        <BrowserRouter>
            <AuthProvider>
                <BackTop />
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:postId" element={<Post />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/reportChannel" element={<Report />} />
                    <Route path="/journal" element={<Journals />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}