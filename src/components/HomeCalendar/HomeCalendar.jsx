import "./HomeCalendar.css"
import events from "../../mock/calendarEvents"
import { useEffect, useState } from "react"
import EventComp from "./EventComp/EventComp"
import NothingData from "../NothingData/NothingData"

export default function HomeCalendar(props){

    const [index, setIndex] = useState(0)
    const [screen, setScreen] = useState(window.innerWidth)
    const [screenMobile, setScreenMobile] = useState(false)

    useEffect(() => {
        const updateWidth = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [])

    useEffect(() => {
        if(screen <= 900){
            setScreenMobile(true)
        }
    })

    function CalendarAlter(button, index){
        const buttons = document.querySelectorAll(".hc_btn")

        setIndex(index)

        buttons.forEach((button) => {
            button.classList.remove("active")
        })
        button.classList.add("active")
    }

    useEffect(() => {
        const button = document.querySelector(".first_btn0")
        button.classList.add("active")
    }, [])

    return(
        <div className="HomeCalendarComp">
            <div className="hc_menu_inner">
                {events.map((data, index) => (
                    <button onClick={(e) => CalendarAlter(e.target, index)} key={"hc_btn" + index} className={"hc_btn first_btn" + index}>{data.mounth}</button>
                ))}
            </div>

            <div className="hc_events_inner">
                <div className="hc_events">
                    {events[index].dates != undefined ? events[index].dates.map((evento, indiceEvento) => (
                        <EventComp key={`evento_${indiceEvento}`} title={evento.title} start={evento.start} end={evento.end} />
                    )) : !screen && <NothingData text="eventos"/>}

                </div>
            </div>
        </div>
    )
}