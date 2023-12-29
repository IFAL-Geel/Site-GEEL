import "./Admin.css"
import AdmOption from "../../components/AdmOption/AdmOption"
import { useContext } from "react"
import { AuthContext } from "../../contexts/InstagramAPI/authContext"

export default function Admin(props) {

    const { signOff } = useContext(AuthContext)

    return(
        <div className="Admin">
            <div className="admTopInfos">
                <div className="admTopTexts">
                    <p>Bem-Vindo(a), <span>{props.name ?? "Eduardo Lucas"}</span></p>
                    <div className="admTextDir">Dir. Tecnologia e Inovação</div>
                </div>
                <i onClick={signOff} class="fa-solid fa-right-to-bracket"></i>
            </div>

            <div className="admOptionsinner">
                <div className="admGridOptionsInner">
                    <AdmOption />
                    <AdmOption icon="copy" title="Novo Edital" desc="Fazer upload de edital"/>
                    <AdmOption icon="newspaper" title="Adicionar Jornal" desc="Adicione um novo jornal"/>
                </div>
            </div>

        </div>
    )
}