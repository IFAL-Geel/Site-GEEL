import "./Admin.css"
import AdmOption from "../../components/AdmOption/AdmOption"
import { useContext } from "react"
import { AuthContext } from "../../contexts/InstagramAPI/authContext"

export default function Admin(props) {

    const { signOff, signed, userDB } = useContext(AuthContext)

    if(signed){

        console.log(userDB);

        return(
            <div className="Admin">
                <div className="admTopInfos">
                    <div className="admTopTexts">
                        <p>Bem-Vindo(a), <span style={{color: userDB.color}}>{userDB.firstName + ' ' + userDB.lastName ?? "Eduardo Lucas"}</span></p>
                        <div className="admTextDir">Dir. {userDB.dir}</div>
                    </div>
                    <i onClick={signOff} class="fa-solid fa-right-to-bracket"></i>
                </div>
    
                <div className="admOptionsinner">
                    <div className="admGridOptionsInner">
                        <AdmOption />
                        <AdmOption icon="copy" title="Novo Edital" desc="Fazer upload de edital"/>
                        <AdmOption icon="newspaper" title="Adicionar Jornal" desc="Adicione um novo jornal"/>
                        <AdmOption icon="file-pdf" title="Adicionar Arquivo" desc="Faça upload de um pdf, docx e etc..."/>
                    </div>
                </div>
    
            </div>
        )
    }
}