import "./Home.css"
import PageDesc from "../../components/PageDesc/PageTitle"
import LatestPost from "../../components/LatestPost/LatestPost"
import NewsPost from "../../components/NewsPost/NewsPost"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"

export default function Home(props) {
    return(
        <div className="Home">
            <PageDesc />
                <div className="latestPostsInner">
                <Fade triggerOnce="true">
                    <LatestPost type="large" />
                    <div className="lpSmallInner">
                        <LatestPost type="small"/>
                        <LatestPost type="small"/>
                        <LatestPost type="small"/>
                    </div>
                    <NewsPost />
                    <NewsPost />
                    <NewsPost />
                    </Fade>
                </div>
                <Fade className="homeFade" triggerOnce="true">
                    <Link to="news">Mais Notícias</Link>
                </Fade>
        </div>
    )
}