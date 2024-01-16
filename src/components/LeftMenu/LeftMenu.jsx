import { Link } from "react-router-dom"
import "./LeftMenu.css"
import LeftMenuButton from "./LeftMenuButton/LeftMenuButton"

export default function LeftMenu(){
    return(
        <div className="LeftMenu">
            <LeftMenuButton link="/journal" color="#C6151C" />
            <LeftMenuButton text="MANUAL" color="#FFB944"/>
            <LeftMenuButton text="EDITAIS" color="#003A74"/>
            <LeftMenuButton link="/files" text="ARQUIVOS" color="#3bb562"/>
        </div>
    )
}