import "./Home.css"
import PageDesc from "../../components/PageDesc/PageTitle"
import LatestPost from "../../components/LatestPost/LatestPost"
import NewsPost from "../../components/NewsPost/NewsPost"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"

export default function Home(props) {

    const [posts, setPosts] = useState(null)

    const token = "IGQWRNNXA0TVl5S0VvX0RFMEFSVnhaSXl5M2VJekJvZAGZA2Q1dNZAjJPcG83ckVUeXdRRlFNZA1hTb1JCQnlHVnJwVVFyeThycmlLVkkxdUNGcFdMWUN5dUdtYTZAZAc0xMX1dtblJLdHU5TktYRFBYeTM4R3BrY0N0aGsZD";
    const basicUrl = `https://graph.instagram.com/me/media?fields=caption,media_type,media_url&access_token=${token}&limit=7`;

    useEffect(() =>{
        console.log(posts);
    }, [posts])

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch(basicUrl)
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error("Erro na solicitação:", error)
            }
        }

        if (posts === null) {
            fetchData();
        }
    }, [basicUrl, posts])

    if(!posts){
        return(
            <div className="Home">
                <PageDesc />
                    <div className="latestPostsInner">
                    <Fade triggerOnce="true">
                        <LatestPost type="large" img={posts != null ? posts?.data[1]?.media_url : null} title={posts != [] ? posts?.data[1]?.caption : null}/>
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
    } else {
        return(
            <div className="Home">
                <div class="progress-4"></div>
            </div>
        )
    }
}