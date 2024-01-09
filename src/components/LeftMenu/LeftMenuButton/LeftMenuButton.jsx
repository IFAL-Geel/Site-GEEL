import { Link } from "react-router-dom"
import "./LeftMenuButton.css"

export default function LeftMenuButton(props) {
    return(
        <Link to={props.link ?? ""} className="lmLinkInner" style={{backgroundColor: props.color ?? "red"}}>
                <div style={{backgroundColor: props.color ?? "red"}}>
                    <p>{props.text ?? "JORNAL"}</p>
                </div>
        </Link>
    )
}