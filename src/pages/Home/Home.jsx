import "./Home.css"
import HomeFeed from "../../components/HomeFeed/HomeFeed"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import { useApi } from "../../contexts/InstagramAPI/InstagramAPI"
import LoadingBar from "../../components/LoadingBar/LoadingBar"
import { useEffect, useState } from "react"
import OldJournal from "../../components/OldJournal/OldJournal"

export default function Home(props) {

    const { posts } = useApi()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    if(posts){
        return(
            <div className="Home">
                <HomeFeed />
                <div className="HomeJournal">
                    <div className="hjLeft">
                        <div className="hjLImgInner">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="hjRight">
                        <div className="hjRTextsInner">
                            <h1>Leia nosso jornal mensal para ficar atualizado sobre o que tem acontecido no nosso campus</h1>
                            <h3>Edição: Dezembro 01.12.2023</h3>
                        </div>

                        <div className="hjRLinksInner">
                            <Link className="hjRLink">Ler Edição Mensal</Link>
                            <Link className="hjRLinkAll" to={"/journal"}>Todas Edições</Link>
                        </div>

                        <div className="hjROldVersionsInner">
                            <OldJournal />
                            <OldJournal />
                            <OldJournal />
                            <OldJournal />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="Home">
                <LoadingBar />
            </div>
        )
    }
}