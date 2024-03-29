import { Link } from "react-router-dom";
import "./AdmOption.css"


export default function AdmOption(props){
    return(
        <Link className="AdmOption" to={props.to}>
            <div className="AdmOptionL">
                <i class={props.icon ? props.icon : "fa-regular fa-plus"}></i>
            </div>

            <div className="lineAdm"></div>

            <div className="AdmOptionR">
                <p className="admOptionTitle">{props.title ?? "Novo Post"}</p>
                <p className="admOptionDesc">{props.desc ?? "Criar novo post para tela de notícias"}</p>
            </div>
        </Link>
    )
}