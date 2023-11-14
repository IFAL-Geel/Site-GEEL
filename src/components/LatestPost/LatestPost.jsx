import "./LatestPost.css"
import React from "react"

export default function LatestPost(props) {
    if(props.type == "large"){
        return(
            <div className="LatestPostInnerLarge">
                <div className="lpTextsInner">
                    <h3 className="lpTile">{props.title ?? "Lorem ipsum dolor sit amet consectetur adipiscing elit."}</h3>
                    <p>{props.desc ?? "Proin aliquet sem quis tempor fermentum. In posuere dui vitae rhoncus tempus. In sed interdum odio, eget feugiat arcu. Fusce id ante non velit auctor semper. Integer gravida faucibus posuere. Maecenas varius risus eu odio ullamcorper porttitor. Nullam eu nibh a ipsum posuere vehicula quis in erat. Nulla at tincidunt velit, ac molestie libero."}</p>
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
                    <h3 className="lpTile">{props.title ?? "Lorem ipsum dolor sit amet consectetur adipiscing elit."}</h3>
                </div>
                <div className="lpImgInner">
                    <img src={props.img ?? "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-the-geometry-of-the-abstract-cubes-creates-a-futuristic-scene-image_2606442.jpg"} alt="" />
                    <div className="lpImgBlur"></div>
                </div>
            </div>
        )
    }
}