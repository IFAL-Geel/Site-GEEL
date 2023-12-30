import "./CoursesIcon.css"

export default function CoursesIcon(props) {
    return(
        <div className={`CoursesIcon ${props.cr}`}>
            <div className="CI_img_inner">
                <img src={props.url || "https://i.ibb.co/VQz3MMS/INFORMATICA.png"} alt="brasão do curso"/>
            </div>

            <div className="CI_name">
                <p>{props.name || "INFORMÁTICA"}</p>
            </div>
        </div>
    )
}