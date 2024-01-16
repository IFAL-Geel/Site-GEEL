import { useEffect } from "react"
import Journal from "../../components/Journal/Journal"
import PageTitle from "../../components/PageDesc/PageTitle"
import "./Journals.css"
import LeftMenu from "../../components/LeftMenu/LeftMenu"

export default function Journals(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return(
        <div className="Journals">
            <LeftMenu />
            <PageTitle title="Jornais" width="92%"/>
            <div className="journalList">
                <Journal />
            </div>
        </div>
    )
}