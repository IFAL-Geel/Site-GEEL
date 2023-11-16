import { useState } from "react";

import './About.css'
import AboutCard from "../../components/AboutCard/AboutCard.jsx";
import PageTitle from "../../components/PageDesc/PageTitle.jsx";
import logoGeel from "../../assets/images/LogoGEEL.png";
import data from "../../data/aboutData/diretorias.js";

export default function About(props) {
    const [index, setIndex] = useState(0);

    return(
        <div className="About">
            <PageTitle title="Sobre nós" />
            <div className="About__geral">
                <img src={logoGeel} alt="Logo do GEEL" />

                <p>
                    O <abbr title="Grêmio Estudantil Edson Luís">GEEL</abbr> orienta-se pelos princípios da defesa de
                    uma educação pública, gratuita e de qualidade, a democracia como base para a participação estudantil,
                    legalidade, transparência na gestão, gestão participativa, defesa dos interesses do corpo discente,
                    autonomia e independência estudantil. Seus objetivos incluem fortalecer a identidade estudantil,
                    promover cooperação na comunidade acadêmica, defender direitos e democracia, estimular a cidadania
                    plena, valorizar a cultura e expressão criativa, contribuir para o desenvolvimento integral do corpo
                    discente, buscar educação de qualidade, estabelecer parcerias e intercâmbios, manter
                    representatividade ampliada, garantir participação e acessibilidade nos processos decisórios,
                    promover democracia, transparência e acessibilidade no instituto, colaborar com a administração,
                    promover saúde e bem-estar estudantil, incentivar responsabilidade ambiental e sustentabilidade,
                    participar de movimentos sociais, e promover lazer e entretenimento.
                </p>
            </div>
            <PageTitle title="Diretorias" />
            <AboutCard
                content={data[index]}
                parentState={{current: index, setter: setIndex}}
            />
        </div>
    )
}