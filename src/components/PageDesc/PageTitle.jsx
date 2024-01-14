import React, { useEffect, useState } from 'react';
import "./PageTitle.css"
import LinkTitle from './LinkTitle/LinkTitle';

export default function PageTitle(props) {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [])

    return(
        <div className="pageDescInner" style={{width: props.width ?? "50%"}}>
            <div className="text_inner">
                <h2>{props.title ?? "Novidades"}</h2>
                <hr></hr>
            </div>
            <div className="pd_other">
                {props.button && <LinkTitle to={props.to} text={props.text} ></LinkTitle>}
                {props.date && <p className='pd_date'><span>{props.time}</span> •</p>}
            </div>
        </div>
    )
}