import { useEffect, useState } from "react"
import "./BackTop.css"

export default function BackTop() {

    const [backEnabled, setBackEnabled] = useState(false)

    useEffect(() => {
        function handleScroll(){
            if(document.documentElement.scrollTop >= 80){
                setBackEnabled(true)
            } else {
                setBackEnabled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    if(backEnabled){
        return(
            <div onClick={() => window.scrollTo(0, 0)} className="BackTopInner">
                <i class="fa-solid fa-caret-up"></i>
            </div>
        )
    } else {
        return null
    }
}