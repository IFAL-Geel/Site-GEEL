import { useState } from "react";

import './About.css'
import AboutCard from "../../components/AboutCard/AboutCard.jsx";
import data from "../../data/diretorias.js";

export default function About(props) {
    const [index, setIndex] = useState(0);

    return(
        <main className="About Main">
            <div className="About__container">
                <h2 className="About__title">Sobre nós</h2>
                <div className="division__line"></div>
                {/*general about text goes here with the logo*/}
                <h2 className="About__title">Diretorias</h2>
                <div className="division__line"></div>
                <AboutCard
                    content={data[index]}
                    parentState={{current: index, setter: setIndex}}
                />
            </div>
        </main>
    )
}