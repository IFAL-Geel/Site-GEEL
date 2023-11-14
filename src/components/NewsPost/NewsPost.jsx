import "./NewsPost.css"

export default function NewsPost(props){

    const dateApi = props.date ?? null
    const formatedDate = new Date(dateApi)
    const day = ("0" + formatedDate.getDate()).slice(-2)
    const mounth = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez"
    ]
    const finalMounth = mounth[formatedDate.getMonth()]
    const year = formatedDate.getFullYear()
    const finaldate = day + " " + finalMounth + ", " + year

    return(
        <div className="NewsPostInner">
            <div className="npImgInner">
                <img src={props.img ?? "https://img.freepik.com/fotos-gratis/artigos-de-papelaria-coloridos-e-maca-colocados-de-forma-aleatoria_23-2147847408.jpg?w=740&t=st=1699931903~exp=1699932503~hmac=d1a2b2e3752800a286dd892f17341df17faacd6b18963fea942682f35d7b484f"}/>
                <div className="npImgOverlay"></div>
            </div>
            <div className="npTextInner">
                <h3 className="npTitle">{props.title != null ? props.title.slice(0 ,55) + "..." : "Lorem ipsum dolor sit amet consectetur adipiscing elit."}</h3>
                <div className="npMoreInfoInner">
                    <p>{finaldate}</p>
                    <div></div>
                    <p>{props.dir ?? "Instagram"}</p>
                </div>
                <p className="npDesc">
                    {props.desc != null ? props.desc.slice(0 ,270) + "..." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt urna enim, sed euismod ex tempus in. Aliquam laoreet lorem arcu, sit amet sagittis eros luctus ut. Nam lobortis pharetra risus ac euismod."}
                </p>
            </div>
        </div>
    )
}