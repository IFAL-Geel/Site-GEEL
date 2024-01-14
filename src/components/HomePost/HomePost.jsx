import { Link } from "react-router-dom"
import "./HomePost.css"
import { useEffect, useState } from "react"

export default function HomePost(props) {

    const [width, setWidth] = useState(window.innerWidth)
    const [textLimit, setTextLimit] = useState(250)

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
        if(width > 900){
            setTextLimit(250)
        } else {
            setTextLimit(110)
        }
    }, [width])

    const dateApi = props.date ?? null
    const formatedDate = new Date(dateApi)
    const day = ("0" + formatedDate.getDate()).slice(-2)
    const finalMounth = formatedDate.getMonth()
    const year = formatedDate.getFullYear()
    const finaldate = day + "/" + finalMounth + "/" + year

    return(
        <div className="HomePost">
            <div className="hp_line" style={{backgroundColor: props.color ?? "black"}}/>

            <div className="hp_texts">
                <p className="hp_date" style={{color: props.color ?? "black"}}>{props.date != null ? finaldate : "01/01/000"}1</p>
                <Link style={{"--hover-color": props.color ?? "black"}} key={props.id} to={`/news/${props.id}`} className="hp_text">{props.text != null ? props.text.slice(0, textLimit) + "..." : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima quod vel dolores nulla aperiam esse nihil autem pariatur voluptatem amet harum neque nisi aliquid, vero, animi nam unde veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit"}</Link>
            </div>
        </div>
    )
}