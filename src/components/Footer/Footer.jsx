import "./Footer.css"
import { Fade } from "react-awesome-reveal"
import GeelLogo from "../../assets/images/LogoGeel_Horizontal.png"
import IFLogo from "../../assets/images/logo_if.png"
import { Link } from "react-router-dom"

export default function Footer(props) {
    return(
        <div className="footerInner">
            <footer>
                <div className="ft_up">
                    <div className="ft_imgInner">
                        <img src={GeelLogo} alt="" />
                    </div>

                    <div className="ft_socialmedia_inner">
                        <a href="https://www.youtube.com/@gremioedsonluis1162" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/geelifal" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www2.ifal.edu.br/campus/maceio" target="_blank"><img src={IFLogo} alt="" /></a>
                    </div>
                </div>

                <div className="ft_mid">
                    <div className="ft_links_inner">
                        <Link to="/" className="ft_link" >Inicio</Link>
                        <Link to="/news" className="ft_link" >Notícias</Link>
                        <Link to="about" className="ft_link" >Sobre Nós</Link>
                        <Link to="reportChannel" className="ft_link" >Canal de Denúncias</Link>
                        <Link to="auth" className="ft_link" >Login</Link>
                        <Link to="journal" className="ft_link" >Jornal</Link>
                        <Link className="ft_link" >Manual do Aluno</Link>
                        <Link className="ft_link" >Arquivos</Link>
                    </div>
                </div>

                <div className="ft_down">
                    <div className="ft_maps_inner">
                        <p className="ft_maps_loc">Instituto Federal de Alagoas <br></br>
                            R. Mizael Domingues, 75 - Centro, <br></br>
                            Maceió - AL, <br></br>
                            CEP: 57020-600 <br></br>
                            Telefone: +55 82</p>
                        <div className="ft_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1880337633784!2d-35.733645426238255!3d-9.664969302135406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014579ed447a21%3A0x268379f38865bbbc!2sGr%C3%AAmio%20Estudantil%20Edson%20Lu%C3%ADs!5e0!3m2!1spt-BR!2sbr!4v1704915482755!5m2!1spt-BR!2sbr" width="500" height="250" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="ft_location_inner">
                            <i class="fa-solid fa-map"></i>
                            <p>Como chegar?</p>
                            <div className="ft_location_icons">
                                <a href=""><i class="fab fa-uber"></i></a>
                                <a href=""><i class="fa-brands fa-waze"></i></a>
                                <a href=""><i class="fa-solid fa-location-dot"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft_copyright">
                    <p>© 2024 Diretoria de Tecnologia e Inovação - GEEL</p>
                </div>
            </footer>
        </div>
    )
}