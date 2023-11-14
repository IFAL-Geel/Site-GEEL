import "./NewsPost.css"

export default function NewsPost(props){
    return(
        <div className="NewsPostInner">
            <div className="npImgInner">
                <img src="https://img.freepik.com/fotos-gratis/artigos-de-papelaria-coloridos-e-maca-colocados-de-forma-aleatoria_23-2147847408.jpg?w=740&t=st=1699931903~exp=1699932503~hmac=d1a2b2e3752800a286dd892f17341df17faacd6b18963fea942682f35d7b484f"/>
                <div className="npImgOverlay"></div>
            </div>
            <div className="npTextInner">
                <h3 className="npTitle">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                <div className="npMoreInfoInner">
                    <p>27 dez, 2023</p>
                    <div></div>
                    <p>Diretoria de Assuntos Políticos</p>
                </div>
                <p className="npDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt urna enim, sed euismod ex tempus in. Aliquam laoreet lorem arcu, sit amet sagittis eros luctus ut. Nam lobortis pharetra risus ac euismod.
                </p>
            </div>
        </div>
    )
}