import { Link } from "react-router-dom"
import "./LoginButton.css"

export default function LoginButton() {
    return(
        <Link to="/auth" className="LoginButton">
            <i class="fa-solid fa-user"></i>
            Login
        </Link>
    )
}