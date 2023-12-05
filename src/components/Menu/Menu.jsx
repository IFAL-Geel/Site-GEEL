import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu(props) {

    function scrollAlter(){
        const header = document.querySelector(".MenuHorizontal")
        const title = document.querySelector(".pageDescInner")
        const buttons = document.querySelector(".MenuLink")

        if(document.documentElement.scrollTop >= 80){
            header.classList.add("scroll")
            title.classList.add("scroll")
        } else {
            header.classList.remove("scroll")
            title.classList.remove("scroll")
        }
    }

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

    window.onscroll = (scrollAlter)

    return (
        <div className="Menu">
            <div className="MenuHorizontal">
                <Link onClick={() => selectLink("homeLink")} className="MenuLink MenuActive homeLink" to="/">
                    Início
                </Link>
                <Link onClick={() => selectLink("newsLink")} className="MenuLink newsLink" to="/news">Notícias</Link>
                <Link onClick={() => selectLink("aboutLink")} className="MenuLink aboutLink" to="/about">Sobre Nós</Link>
                <Link onClick={() => selectLink("rcLink")} className="MenuLink rcLink" to="/reportChannel">Canal de Denúncias</Link>
                <Link onClick={() => selectLink("smLink")} className="MenuLink smLink" to="/studentManual">Manual do Aluno</Link>
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
            <Link to="/studentManual">
                <i class="fa-solid fa-book"></i>
            </Link>
            </div>
        </div>
    );
}
