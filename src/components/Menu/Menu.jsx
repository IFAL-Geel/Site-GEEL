import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu(props) {
    return (
        <div className="Menu">
            <div className="MenuHorizontal">
                <Link className="Active" to="/">
                    Início
                </Link>
                <Link to="/news">Notícias</Link>
                <Link to="/about">Sobre Nós</Link>
                <Link to="/reportChannel">Canal de Denúncias</Link>
                <Link to="/studentManual">Manual do Aluno</Link>
            </div>

            <div className="MenuVertical">
            <Link className="Active" to="/">
                <i class="fa-solid fa-house"></i>
            </Link>
            <Link to="/news">
                <i class="fa-solid fa-newspaper"></i>
            </Link>
            <Link to="/about">
                <i class="fa-solid fa-circle-question"></i>
            </Link>
            <Link to="/reportChannel">
                <i class="fa-solid fa-bullhorn"></i>
            </Link>
            <Link to="/studentManual">
                <i class="fa-solid fa-book"></i>
            </Link>
            </div>
        </div>
    );
}
