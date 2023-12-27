import "./Admin.css"
import AdmOption from "../../components/AdmOption/AdmOption"

export default function Admin(props) {
    return(
        <div className="Admin">
            <div className="admTopInfos">
                <div className="admTopTexts">
                    <p>Bem-Vindo(a), <span>{props.name ?? "Eduardo Lucas"}</span></p>
                    <div className="admTextDir">Dir. Tecnologia e Inovação</div>
                </div>
                <i class="fa-solid fa-right-to-bracket"></i>
            </div>

            <div className="admOptionsinner">
                <div className="admGridOptionsInner">
                    <AdmOption />
                    <AdmOption />
                    <AdmOption />
                    <AdmOption />
                    <AdmOption />
                    <AdmOption />
                </div>
            </div>

        </div>
    )
}