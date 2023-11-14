import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu(props) {

    const token = "IGQWRPLUg3b0NhRmF4V2U0NGtsTFJCXzJsWnBWQUpnSGItMm52NTlVcm1DWE9ZANFMxbWk5dHFGekE4aWlfMGpGZA05zQVNoUnN5UXZAfX3M1aHptaFJYMVkyWW95aFlrQWNLUlFZAenBzVFFlempBaWVndVB3VDcyb28ZD"
    const redirect_uri = "https://geel-git-instaapitest-geel-ifal.vercel.app/"
    const client_id = "1045488653544602"
    const scope = "user_profile,user_media"
    const response_type = "code"
    const basicUrl = "//api.instagram.com/oauth/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&scope=" + scope + "&response_type=" + response_type

    fetch(basicUrl).then(response => console.log(response))


    return(
        <div className="Menu">
                <Link className="Active" to="/">Início</Link>
                <Link to="/news">Notícias</Link>
                <Link to="/about">Sobre Nós</Link>
                <Link to="/reportChannel">Canal de Denúncias</Link>
                <Link to="/studentManual">Manual do Aluno</Link>
        </div>
    )
}