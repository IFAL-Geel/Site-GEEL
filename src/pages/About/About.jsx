import { useState } from "react";

import './About.css'
import AboutCard from "../../components/AboutCard/AboutCard.jsx";
import data from "../../data/diretorias.js";

export default function About(props) {
    const [index, setIndex] = useState(0);

    return(
        <div className="About">
            <AboutCard content={data[index]} parentState={{current: index, setter: setIndex, limit: 11}}/>
        </div>
    )
}