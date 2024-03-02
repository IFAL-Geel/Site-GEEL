import "./Admin.css"
import AdmOption from "../../components/AdmOption/AdmOption"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useLocation } from "react-router-dom"

export default function Admin(props) {

    const { signOff, signed, userDB } = useContext(AuthContext)
    const location = useLocation()
    const { uploadComplete } = location.state || {}
    const [showUC, setShowUC] = useState(true)

    useEffect(() => {
        if (uploadComplete) {
            setShowUC(true);
            const timeoutId = setTimeout(() => {
                setShowUC(false);
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, [uploadComplete]);

    if(signed){
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
                        <AdmOption to="/admin/statute" icon="fa-regular fa-copy" title="Novo Edital" desc="Fazer upload de edital"/>
                        <AdmOption icon="fa-regular fa-newspaper" title="Adicionar Jornal" desc="Adicione um novo jornal"/>
                        <AdmOption to="/admin/file" icon="fa-regular fa-file-pdf" title="Adicionar Arquivo" desc="Faça upload de um pdf, docx e etc..."/>
                        <AdmOption icon="fa-regular fa-calendar" title="Gerenciar Eventos" desc="Adicione, exclua e altere eventos"/>
                        <AdmOption to="/admin/friday" icon="fa-solid fa-masks-theater" title="Adicionar Sexta-Cutural" desc="Adici-one, exclua e altere eventos"/>
                    </div>
                </div>

                <div className={`adm_upload_complete ${!showUC ? "disabled" : ""} ${uploadComplete ? "enabled" : ""}`} >
                    <p>{uploadComplete && "Upload feito com sucesso"}</p>
                </div>
    
            </div>
        )
    }
}