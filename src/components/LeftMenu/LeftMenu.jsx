import { Link } from "react-router-dom"
import "./LeftMenu.css"
import LeftMenuButton from "./LeftMenuButton/LeftMenuButton"

export default function LeftMenu(){
    return(
        <div className="LeftMenu">
            <LeftMenuButton link="/journal" />
            <LeftMenuButton text="MANUAL" color="#000"/>
        </div>
    )
}