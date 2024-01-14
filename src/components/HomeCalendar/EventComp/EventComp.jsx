import "./EventComp.css"

export default function EventComp(props){

    const start = props.start
    const end = props.end
    const title = props.title

    return(
        <div className="EventComp">
            <div className="ec_date_inner">
                <p>{start || "29/01 à 01/02"} {end && "à"} {end && end}</p>
            </div>

            <div className="ec_title_inner">
                <p>{title || "JOGOS INTERNOS PARTE 2"}</p>
            </div>
        </div>
    )
}