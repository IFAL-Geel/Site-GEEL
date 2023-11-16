import "./AboutCard.css";
import leftArrow from "../../assets/aboutAssets/leftArrow.svg";
import rightArrow from "../../assets/aboutAssets/rightArrow.svg";

export default function AboutCard(props) {
    const content = props.content;
    const limit = 11;
    const handleClick = event => {
        if (event.target.className === "AboutCard__leftArrow") {
            if (props.parentState.current === 0) {
                props.parentState.setter(limit);
            } else {
                props.parentState.setter(props.parentState.current - 1);
            }
        }
        if (event.target.className === "AboutCard__rightArrow") {
            if (props.parentState.current === limit) {
                props.parentState.setter(0);
            } else {
                props.parentState.setter(props.parentState.current + 1);
            }
        }
    }

    return(
        <div className="AboutCard">
            <img onClick={handleClick} className={"AboutCard__leftArrow"} src={leftArrow} alt={"any"}/>
            <div className="AboutCard__sideImage" style={{backgroundColor: content.img}}>
                {/*<img src={content.img} alt={"any"}/>*/}
            </div>
            <div className={"AboutCard__content"}>
                <div className={"AboutCard__content__header"}>
                    <h3>{content.title}</h3>
                    <h4>Dir. {content.director}</h4>
                </div>
                <div className={"AboutCard__content__body"}>
                    <p>{content.text}</p>
                </div>
            </div>
            <img onClick={handleClick} className={"AboutCard__rightArrow"} src={rightArrow} alt={"any"}/>

        </div>
    )
}