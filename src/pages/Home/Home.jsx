import "./Home.css"
import PageDesc from "../../components/PageDesc/PageTitle"
import LatestPost from "../../components/LatestPost/LatestPost"
import NewsPost from "../../components/NewsPost/NewsPost"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import { useApi } from "../../contexts/InstagramAPI/InstagramAPI"
import LoadingBar from "../../components/LoadingBar/LoadingBar"
import { useEffect, useState } from "react"

export default function Home(props) {

    const { posts } = useApi()
    const [width, setWidth] = useState(901)

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [])
    
    

    if(posts && width > 900){
        return(
            <div className="Home">
                <PageDesc />
                    <div className="latestPostsInner">
                    <Fade triggerOnce="true">
                        <LatestPost type="large" img={posts.data[0].media_type == "VIDEO" ? posts.data[0].thumbnail_url : posts.data[0].media_url} title={posts?.data[0]?.caption}/>
                        <div className="lpSmallInner">
                            <LatestPost type="small" img={posts.data[1].media_type == "VIDEO" ? posts.data[1].thumbnail_url : posts.data[1].media_url} title={posts?.data[1]?.caption}/>
                            <LatestPost type="small" img={posts.data[2].media_type == "VIDEO" ? posts.data[2].thumbnail_url : posts.data[2].media_url} title={posts?.data[2]?.caption}/>
                            <LatestPost type="small" img={posts.data[3].media_type == "VIDEO" ? posts.data[3].thumbnail_url : posts.data[3].media_url} title={posts?.data[3]?.caption}/>
                        </div>
                        <NewsPost date={posts.data[4].timestamp} img={posts.data[4].media_type == "VIDEO" ? posts.data[4].thumbnail_url : posts.data[4].media_url} title={posts.data[4].caption} desc={posts.data[4].caption} />
                        <NewsPost date={posts.data[5].timestamp} img={posts.data[5].media_type == "VIDEO" ? posts.data[5].thumbnail_url : posts.data[5].media_url} title={posts.data[5].caption} desc={posts.data[5].caption} />
                        <NewsPost date={posts.data[6].timestamp} img={posts.data[6].media_type == "VIDEO" ? posts.data[6].thumbnail_url : posts.data[6].media_url} title={posts.data[6].caption} desc={posts.data[6].caption} />
                        </Fade>
                    </div>
                    <Fade className="homeFade" triggerOnce="true">
                        <Link to="news">Mais Notícias</Link>
                    </Fade>
            </div>
        )
    } else if(posts && width < 900){
        return(
            <div className="Home">
                    <PageDesc />
                        <div className="latestPostsInner">
                        <Fade triggerOnce="true">
                            <div className="lpSmallInner">
                                <LatestPost type="small" img={posts.data[0].media_type == "VIDEO" ? posts.data[0].thumbnail_url : posts.data[0].media_url} title={posts?.data[0]?.caption}/>
                                <LatestPost type="small" img={posts.data[1].media_type == "VIDEO" ? posts.data[1].thumbnail_url : posts.data[1].media_url} title={posts?.data[1]?.caption}/>
                            </div>
                            <NewsPost date={posts.data[2].timestamp} img={posts.data[2].media_type == "VIDEO" ? posts.data[2].thumbnail_url : posts.data[2].media_url} title={posts.data[2].caption} desc={posts.data[2].caption} />
                            <NewsPost date={posts.data[3].timestamp} img={posts.data[3].media_type == "VIDEO" ? posts.data[3].thumbnail_url : posts.data[3].media_url} title={posts.data[3].caption} desc={posts.data[3].caption} />
                            <NewsPost date={posts.data[4].timestamp} img={posts.data[4].media_type == "VIDEO" ? posts.data[4].thumbnail_url : posts.data[4].media_url} title={posts.data[4].caption} desc={posts.data[4].caption} />
                            <NewsPost date={posts.data[5].timestamp} img={posts.data[5].media_type == "VIDEO" ? posts.data[5].thumbnail_url : posts.data[5].media_url} title={posts.data[5].caption} desc={posts.data[5].caption} />
                            <NewsPost date={posts.data[6].timestamp} img={posts.data[6].media_type == "VIDEO" ? posts.data[6].thumbnail_url : posts.data[6].media_url} title={posts.data[6].caption} desc={posts.data[6].caption} />
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
                <LoadingBar />
            </div>
        )
    }
}