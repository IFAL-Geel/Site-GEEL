import { Link } from "react-router-dom";
import "./LinkTitle.css"

export default function LinkTitle(props){
    return(
        <Link className="LinkTitle" to={props.to}>{props.text ?? "Digite Algo"}</Link>
    )
}