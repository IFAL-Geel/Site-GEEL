import { useContext, useEffect, useState } from "react"
import "./Auth.css"
import { AuthContext } from "../../contexts/InstagramAPI/authContext"
import { useNavigate } from "react-router-dom"

export default function Auth() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const navigate = useNavigate()

    const { signIn, signed } = useContext(AuthContext)

    function login(e){
        e.preventDefault()

        const button = document.querySelector(".btn-login")
        button.disabled = true

        button.innerHTML = "Carregando..."

        signIn(email, pass)
    
    }

    useEffect(() => {
        const button = document.querySelector(".btn-login")
        button.disabled = false

        button.innerHTML = "Entrar"

    }, [email, pass])

    useEffect(() => {
        if(signed){
            navigate("/")
        }
    }, [signed, navigate])

    return(
        <div className="Auth">
            <form action="">
                <h2>
                    <i class="fa-solid fa-right-to-bracket"></i>
                </h2>
                <h1>Entre na sua conta</h1>
                <p>Faça login para acessar a area de diretores</p>
                <label htmlFor="">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="text" 
                    name="email" 
                    placeholder="Digite o email aqui" />
                <label htmlFor="">Senha</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password" 
                    name="password" 
                    placeholder="Digite a senha aqui" />
                <div className="">
                    <input type="checkbox" name="rememberMe" id="" />
                    <label htmlFor="rememberMe">Lembrar-se</label>
                </div>
                <button className="btn-login" onClick={(e) => login(e)}>Entrar</button>
            </form>
        </div>
    )
}