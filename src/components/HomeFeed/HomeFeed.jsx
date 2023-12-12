import { Fade } from "react-awesome-reveal"
import { useApi } from "../../contexts/InstagramAPI/InstagramAPI"
import { Link } from "react-router-dom"
import LatestPost from "../LatestPost/LatestPost"
import NewsPost from "../NewsPost/NewsPost"
import PageTitle from "../PageDesc/PageTitle"
import { useEffect, useState } from "react"
import "./HomeFeed.css"

export default function HomeFeed() {
    const { posts } = useApi()
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

    if(posts && width > 900){
        return(
            <div className="Home">
                <PageTitle width="40%"/>
                    <div className="latestPostsInner">
                    <Fade triggerOnce="true">
                        <Link key={posts.data[0].id} to={`/news/${posts.data[0].id}`} className="linkPost">
                            <LatestPost type="large" img={posts.data[0].media_type == "VIDEO" ? posts.data[0].thumbnail_url : posts.data[0].media_url} title={posts?.data[0]?.caption}/>
                        </Link>
                        <div className="lpSmallInner">
                            <Link key={posts.data[1].id} to={`/news/${posts.data[1].id}`} className="linkPost linkSmall">
                                <LatestPost type="small" img={posts.data[1].media_type == "VIDEO" ? posts.data[1].thumbnail_url : posts.data[1].media_url} title={posts?.data[1]?.caption}/>
                            </Link>
                            <Link key={posts.data[2].id} to={`/news/${posts.data[2].id}`} className="linkPost linkSmall">
                                <LatestPost type="small" img={posts.data[2].media_type == "VIDEO" ? posts.data[2].thumbnail_url : posts.data[2].media_url} title={posts?.data[2]?.caption}/>
                            </Link>
                            <Link key={posts.data[3].id} to={`/news/${posts.data[3].id}`} className="linkPost linkSmall">
                                <LatestPost type="small" img={posts.data[3].media_type == "VIDEO" ? posts.data[3].thumbnail_url : posts.data[3].media_url} title={posts?.data[3]?.caption}/>
                            </Link>
                        </div>
                        <Link key={posts.data[4].id} to={`/news/${posts.data[4].id}`} className="linkPost">
                            <NewsPost date={posts.data[4].timestamp} img={posts.data[4].media_type == "VIDEO" ? posts.data[4].thumbnail_url : posts.data[4].media_url} title={posts.data[4].caption} desc={posts.data[4].caption} />
                        </Link>
                        <Link key={posts.data[5].id} to={`/news/${posts.data[5].id}`} className="linkPost">
                            <NewsPost date={posts.data[5].timestamp} img={posts.data[5].media_type == "VIDEO" ? posts.data[5].thumbnail_url : posts.data[5].media_url} title={posts.data[5].caption} desc={posts.data[5].caption} />
                        </Link>
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
                    <PageTitle />
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
                            </Fade>
                        </div>
                        <Fade className="homeFade" triggerOnce="true">
                            <Link to="news">Mais Notícias</Link>
                        </Fade>
                </div>
        )
    }
}