import "./News.css"
import PageTitle from "../../components/PageDesc/PageTitle"
import { useApi } from "../../contexts/InstagramAPI/InstagramAPI"
import NewsPost from "../../components/NewsPost/NewsPost"
import LoadingBar from "../../components/LoadingBar/LoadingBar"
import { Fade } from "react-awesome-reveal"
import { useState } from "react"

export default function News(props) {

    const { posts } = useApi()

    if (posts) {
        const [ currentPage, setCurrentPage ] = useState(0)

        var dataPosts = posts.data

        var pages = Math.ceil(dataPosts.length / 5)
        var startIndex = currentPage * 5
        var endIndex = startIndex + 5
        var currentIndex = dataPosts.slice(startIndex, endIndex)

        const nextPage = () => {
            if(currentPage + 1 == pages){
                setCurrentPage(currentPage)
            } else {
                setCurrentPage(currentPage+1)
                window.scrollTo(0,0);
            }
            console.log(currentPage)
            console.log(pages)
        }


        const prevPage = () => {
            if(currentPage == 0){
                setCurrentPage(currentPage)
            } else {
                setCurrentPage(currentPage-1)
                window.scrollTo(0,0);
            }
            console.log(currentPage)
            console.log(pages)
        }
        return (
            <div className="News">
                <PageTitle title="Notícias" />
                <div className="newsPostInner">
                    <Fade triggerOnce="true">
                        {currentIndex.map((post) => (
                        <NewsPost
                            key={post.timestamp}
                            date={post.timestamp}
                            img={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
                            title={post.caption}
                            desc={post.caption}
                        />
                        ))}
                    </Fade>
                </div>
                <div className="paginationButtons">
                    <button onClick={() => prevPage()}><i class="fa-solid fa-caret-left"></i></button>
                    <select onChange={(e) => {setCurrentPage(e.target.value - 1); window.scrollTo(0,0);}} value={currentPage+1}>
                        {Array.from({ length: pages }, (v, k) => k + 1).map((page) => (
                            <option key={page} value={page}>{page}</option>
                        ))}
                    </select>
                    <button onClick={() => nextPage()}><i class="fa-solid fa-caret-right"></i></button>
                </div>
            </div>
        )
    } else {
        return <LoadingBar />
    }
}