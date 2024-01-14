import "./HomeFriday.css"

export default function HomeFriday(props){
    return(
        <div className="HomeFriday" key={props.key}>
            <img src={props.img || "https://cdn.pixabay.com/photo/2023/09/20/19/47/birds-8265503_1280.jpg"} alt="" />
        </div>
    )
}