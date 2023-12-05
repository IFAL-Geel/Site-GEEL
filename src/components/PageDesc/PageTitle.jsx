import React, { useEffect, useState } from 'react';
import "./PageTitle.css"

export default function PageTitle(props) {

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
        if(width < 900 && props.id){
            const item = document.querySelector(".pageDescInner")
            item.style.display = "none"
        } else {
            const item = document.querySelector(".pageDescInner")
            item.style.display = "block"
        }
    })

    return(
        <div className="pageDescInner" style={{width: props.width ?? "50%"}}>
            <h2>{props.title ?? "Novidades"}</h2>
            <hr></hr>
        </div>
    )
}