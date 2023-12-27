import { Link } from "react-router-dom";
import "./UserButton.css"

export default function UserButton(props){
    return(
        <Link className="btn-User" to="/admin">
            <div className="imgUserInner">
                <img src="https://images.squarespace-cdn.com/content/v1/60300340d27ffb2c6946ccbe/60a8c595-c4ac-4197-bc2f-fb04778ea08f/Laufey-Bewitched-Website.png" alt="" />
            </div>
        </Link>
    )
}