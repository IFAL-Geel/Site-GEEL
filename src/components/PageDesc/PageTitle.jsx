import React from 'react';
import "./PageTitle.css"

export default function PageTitle(props) {
    return(
        <div className="pageDescInner">
            <h2>{props.title ?? "Novidades"}</h2>
            <hr></hr>
        </div>
    )
}