import "./Auth.css"

export default function Auth() {
    return(
        <div className="Auth">
            <form action="">
                <h2>
                    <i class="fa-solid fa-right-to-bracket"></i>
                </h2>
                <h1>Entre na sua conta</h1>
                <p>Faça login para acessar a area de diretores</p>
                <label htmlFor="">Email</label>
                <input type="text" name="email" placeholder="Digite o email aqui" />
                <label htmlFor="">Senha</label>
                <input type="password" name="password" id="" placeholder="Digite a senha aqui" />
                <div className="">
                    <input type="checkbox" name="rememberMe" id="" />
                    <label htmlFor="rememberMe">Lembrar-se</label>
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}