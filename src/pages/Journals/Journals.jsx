import { useEffect } from "react"
import Journal from "../../components/Journal/Journal"
import PageTitle from "../../components/PageDesc/PageTitle"
import "./Journals.css"

export default function Journals(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return(
        <div className="Journals">
            <PageTitle title="Jornais" width="95%"/>
            <div className="journalList">
                <Journal />
                <Journal />
                <Journal />
                <Journal />
                <Journal />
            </div>
        </div>
    )
}