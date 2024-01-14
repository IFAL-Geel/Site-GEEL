import { useState } from "react"
import "./DarkToggle.css"

export default function DarkToggle(props){

    const [darkMode, setDarkMode] = useState(false)

    const allDark = () => {
        const all = document.querySelectorAll("*")
        const icon = document.querySelector(".dkm_icon")

        if(!darkMode){
            icon.classList.add("fa-moon")
            icon.classList.remove("fa-sun")
            setDarkMode(true)
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            icon.classList.add("fa-sun")
            icon.classList.remove("fa-moon")
            setDarkMode(false)
            document.documentElement.setAttribute("data-theme", "light");
        }
    }

    return(
        <div onClick={() => allDark()} className="DarkToggle">
            <i class="fa-solid fa-sun dkm_icon"></i>
        </div>
    )
}