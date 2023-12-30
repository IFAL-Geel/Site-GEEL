import "./Footer.css"
import { Fade } from "react-awesome-reveal"

export default function Footer(props) {
    return(
        <div className="footerInner">
            <footer>
                <div className="footerInfoInner">
                        <div className="footerLeft">
                            <div className="footerAdress footerSection">
                                <h3>Grêmio Estudantil Edson Luís</h3>
                                <p>Insituto Federal de Alagoas - Campus Maceió</p>
                                <p>R. Mizael Domingues, 530 <br></br> Centro, Maceió - AL <br></br> 57020-600</p>
                            </div>

                            <div className="footerContact footerSection">
                                <h3>Contatos</h3>
                                <p>(82) 99327-4102</p>
                                <p>gremioedsonluisifal@gmail.com</p>
                                <p>@geelifal</p>
                            </div>
                        </div>

                        <div className="footerMid">
                            <div className="footerExec footerSection">
                                <h3>Executiva</h3>
                                <p>Presidente</p>
                                <p>Vice-Presidente</p>
                                <p>Secretário Geral</p>
                                <p>Primeiro Secretpario</p>
                                <p>Secretário de Patrimônio</p>
                            </div>

                            <div className="footerDir footerSection">
                                <h3>Diretorias</h3>
                                <p>Arte e Cultura</p>
                                <p>Assusntos Educacionais</p>
                                <p>Assistência Estudantil</p>
                                <p>Assuntos Políticos</p>
                                <p>Comunicação Social</p>
                                <p>Diversidade Étnica</p>
                                <p>Diversidade Sexual e de Genêro</p>
                            </div>
                        </div>

                        <div className="footerRight">
                            <div className="footerDirCont footerSection">
                                <p>Esportes</p>
                                <p>Mulher</p>
                                <p>Saúde e Meio Ambiente</p>
                                <p>Social e Eventos</p>
                                <p>Tecnologia e Inovação</p>
                            </div>
                        </div>
                </div>
            </footer>
        </div>
    )
}