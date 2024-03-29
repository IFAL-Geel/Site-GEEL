import "./LatestPost.css"
import React, { useEffect, useState } from "react"

export default function LatestPost(props) {

    const [width, setWidth] = useState(window.innerWidth)
    const [textLimit, setTextLimit] = useState(100)

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
            setTextLimit(100)
        } else {
            setTextLimit(50)
        }
    }, [width])

    if(props.type == "large"){
        return(
            <div className="LatestPostInnerLarge">
                <div className="lpTextsInner">
                    <h3 className="lpTile">{props.title != null ? props.title.slice(0 ,textLimit) + "..." : "Lorem ipsum dolor sit amet consectetur adipiscing elit."}</h3>
                </div>
                <div className="lpImgInner">
                    <img src={props.img ?? "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-the-geometry-of-the-abstract-cubes-creates-a-futuristic-scene-image_2606442.jpg"} alt="" />
                    <div className="lpImgBlur"></div>
                </div>
            </div>
        )
    } else if (props.type == "small"){
        return(
            <div className="LatestPostInnerSmall">
                <div className="lpTextsInner">
                    <h3 className="lpTile">{props.title != null ? props.title.slice(0 ,40) + "..." : "Lorem ipsum dolor sit amet consectetur adipiscing elit."}</h3>
                </div>
                <div className="lpImgInner">
                    <img src={props.img ?? "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-the-geometry-of-the-abstract-cubes-creates-a-futuristic-scene-image_2606442.jpg"} alt="" />
                    <div className="lpImgBlur"></div>
                </div>
            </div>
        )
    }
}