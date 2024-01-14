import "./NothingData.css"

export default function NothingData(props){
    return(
        <div className="NothingData">
            <i class="fa-regular fa-face-dizzy"></i>
            <p>Sem {props.text} por aqui</p>
        </div>
    )
}