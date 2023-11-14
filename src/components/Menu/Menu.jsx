import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu(props) {
    return (
        <div className="Menu">
            <Link className="Active" to="/">
                Início
            </Link>
            <Link to="/news">Notícias</Link>
            <Link to="/about">Sobre Nós</Link>
            <Link to="/reportChannel">Canal de Denúncias</Link>
            <Link to="/studentManual">Manual do Aluno</Link>
        </div>
    );
}
