import { Link, useLocation } from "react-router-dom";
import "./Menu.css";
import { useEffect, useLayoutEffect, useState } from "react";
import LoginButton from "../LoginButton/LoginButton";

export default function Menu(props) {

    const path = useLocation()

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [])

    
    useEffect(() => {
        if(path.pathname === "/auth"){
            const header = document.querySelector(".MenuHorizontal")
            const title = document.querySelector(".pageDescInner")
            const loginButton = document.querySelector(".LoginButton")

            header.classList.remove("scroll")
            try{
                title.classList.remove("scroll")
            } catch(e){
                console.log("Objeto nn encontrado");
            }
            loginButton.classList.remove("scroll")
        }
    },)

    useEffect(() => {
        function scrollAlter() {
            const header = document.querySelector(".MenuHorizontal")
            const title = document.querySelector(".pageDescInner")
            const loginButton = document.querySelector(".LoginButton")

            if (document.documentElement.scrollTop >= 80) {
                header.classList.add("scroll")
                try{
                    title.classList.remove("scroll")
                } catch(e){
                    console.log("Objeto nn encontrado");
                }
                loginButton.classList.add("scroll")
            } else {
                header.classList.remove("scroll")
                try{
                    title.classList.remove("scroll")
                } catch(e){
                    console.log("Objeto nn encontrado");
                }
                loginButton.classList.remove("scroll")
            }
        }

        if (width >= 900 && path.pathname !== "/auth") {
            window.onscroll = scrollAlter
        }

        return () => {
            window.onscroll = null
        };
    }, [width, path.pathname]);

    function selectLink(linkText) {
        const link = document.querySelector("."+linkText)
        const allLinks = document.querySelectorAll(".MenuLink")
        console.log(link)
        console.log(allLinks)

        allLinks.forEach((button) => {
            button.classList.remove("MenuActive")
        })
        link.classList.add("MenuActive")
    }

    return (
        <div className="Menu">
            <div className="MenuHorizontal">
                <Link onClick={() => selectLink("homeLink")} className={`MenuLink homeLink ${path.pathname === "/" ? "MenuActive" : ""}`} to="/">
                    Início
                </Link>
                <Link onClick={() => selectLink("newsLink")} className={`MenuLink newsLink ${path.pathname.startsWith("/news") ? "MenuActive" : ""}`} to="/news">Notícias</Link>
                <Link onClick={() => selectLink("aboutLink")} className={`MenuLink aboutLink ${path.pathname === "/about" ? "MenuActive" : ""}`} to="/about">Sobre Nós</Link>
                <Link onClick={() => selectLink("rcLink")} className={`MenuLink rcLink ${path.pathname === "/reportChannel" ? "MenuActive" : ""}`} to="/reportChannel">Canal de Denúncias</Link>
                <div className="loginButtonInner">
                    <LoginButton />
                </div>
            </div>

            <div className="MenuDock">
            <Link className="Active" to="/">
                <i class="fa-solid fa-house"></i>
            </Link>
            <Link to="/news">
                <i class="fa-solid fa-newspaper"></i>
            </Link>
            <Link to="/about">
                <i class="fa-solid fa-circle-question"></i>
            </Link>
            <Link to="/reportChannel">
                <i class="fa-solid fa-bullhorn"></i>
            </Link>
            </div>
        </div>
    );
}
