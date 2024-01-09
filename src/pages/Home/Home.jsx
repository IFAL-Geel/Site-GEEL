import "./Home.css"
// import HomeFeed from "../../components/HomeFeed/HomeFeed"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import { useApi } from "../../contexts/InstagramAPI/InstagramAPI"
import LoadingBar from "../../components/LoadingBar/LoadingBar"
import React, { useEffect, useState } from "react"
import OldJournal from "../../components/OldJournal/OldJournal"
import PageTitle from "../../components/PageDesc/PageTitle"
import Footer from "../../components/Footer/Footer"
import LeftMenu from "../../components/LeftMenu/LeftMenu"
import cursos from "../../data/aboutData/cursos"
import CoursesIcon from "../../components/CoursesIcon/CoursesIcon.jsx"
import LatestPost from "../../components/LatestPost/LatestPost.jsx"
import HomePost from "../../components/HomePost/HomePost.jsx"

export default function Home(props) {

    const { posts } = useApi()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    if(posts){
        return(
            <div className="Home">
                <LeftMenu /> 
                {/* <HomeFeed /> */}

                <div className="HomeFeed">
                    <PageTitle title="Novidades" width="92%" />
                    <div className="lp_inner">
                        <div className="lp_insta_inner">
                            <div className="lp_img_inner">
                                <LatestPost type="small" img={posts.data[0].media_type == "VIDEO" ? posts.data[0].thumbnail_url : posts.data[0].media_url} title={posts?.data[0]?.caption}/>
                                <LatestPost type="small" img={posts.data[1].media_type == "VIDEO" ? posts.data[1].thumbnail_url : posts.data[1].media_url} title={posts?.data[1]?.caption}/>
                            </div>
                            <div className="lp_text_inner">
                                <HomePost />
                                <HomePost />
                                <HomePost />
                                <HomePost />
                            </div>
                        </div>

                        <div className="lp_line"></div>

                        <div className="lp_site_inner">
                            <div className="lp_img_inner">
                                <LatestPost type="small" img={posts.data[0].media_type == "VIDEO" ? posts.data[0].thumbnail_url : posts.data[0].media_url} title={posts?.data[0]?.caption}/>
                                <LatestPost type="small" img={posts.data[1].media_type == "VIDEO" ? posts.data[1].thumbnail_url : posts.data[1].media_url} title={posts?.data[1]?.caption}/>
                            </div>
                            <div className="lp_text_inner">
                                <HomePost />
                                <HomePost />
                                <HomePost />
                                <HomePost />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="HomeClubes">
                    <PageTitle title="Clubes" width="92%"/>
                </div>

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

                <div className="HomeCourses">
                    <PageTitle title="Cursos Técnicos" width="90%" />
                    <div className="coursesInner">
                        {cursos.map((curso, index) => {
                            return <CoursesIcon key={index + curso.name} name={curso.name} url={curso.url} cr={curso.cr} />
                        })}
                    </div>
                </div>

                <Footer />
            </div>
        )
    } else {
        return(
            <div className="Home">
                <LoadingBar />
                <Footer />
            </div>
        )
    }
}