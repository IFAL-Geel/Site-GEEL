import { useEffect, useState } from "react"
import "./DarkToggle.css"

export default function DarkToggle(props){

    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem("@DarkMode:Active")
        return storedMode === "dark";
    })

    useEffect(() => {
        const icon = document.querySelector(".dkm_icon")

        icon.classList.add(darkMode ? "fa-moon" : "fa-sun")
        icon.classList.remove(darkMode ? "fa-sun" : "fa-moon")
        icon.style.color = darkMode ? "#5F4CFE" : "#FCAF4F"
        localStorage.setItem("@DarkMode:Active", darkMode ? "dark" : "light")
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return(
        <div onClick={() => setDarkMode(!darkMode)} className="DarkToggle">
            <div className="">
                <i className="fa-solid fa-sun dkm_icon" style={{color: "#FCAF4F"}}></i>
            </div>
        </div>
    )
}