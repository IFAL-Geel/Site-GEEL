import { Link } from "react-router-dom";
import "./AdmOption.css"


export default function AdmOption(props){
    return(
        <Link className="AdmOptionLink">
            <div className="AdmOption">
                <i class="fa-regular fa-newspaper"></i>
                <p>Novo Post</p>
            </div>
        </Link>
    )
}