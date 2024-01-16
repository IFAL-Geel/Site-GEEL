import "./FileComp.css"

export default function FileComp(props){

    const type = props.type || "pdf"

    return(
        <a href={props.link} target="_blank" className="File">
            <i className={`fa-regular fa-file-${type}`}></i>
            <p>{props.title || "File Name"}</p>
        </a>
    )
}