import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
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
import AuthProvider from "../contexts/authContext"
import Admin from "../pages/Admin/Admin"
import PrivateRoute from "./PrivateRoute"
import { useEffect } from "react"
import DataProvider from "../contexts/firestoreData/firestoreDataContext"
import AddFriday from "../pages/AddFriday/AddFriday"
import Files from "../pages/Files/Files"
import AddFile from "../pages/AddFile/AddFile"
import AddStatute from "../pages/AddStatute/AddStatute"

export default function AppRoutes(props) {
    return(
        <BrowserRouter>
            <AuthProvider>
                <DataProvider>
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
                        <Route path="/admin" element={<PrivateRoute />}>
                            <Route path="/admin" element={<Admin />} />
                        </Route>
                        <Route path="admin/friday" element={<AddFriday />} />
                        <Route path="admin/file" element={<AddFile />} />
                        <Route path="admin/statute" element={<AddStatute />} />
                        <Route path="/files" element={<Files />} />
                    </Routes>
                </DataProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}