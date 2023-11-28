import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from '../../contexts/InstagramAPI/InstagramAPI'
import "./Post.css"
import PageTitle from '../../components/PageDesc/PageTitle'

function Post() {
    const { posts } = useApi()
    
    if (!posts) {
        return <div>Post não encontrado.</div>
    } else {

        const { postId } = useParams()
        const post = posts.data.find((p) => p.id === postId)

        var title = post.caption
        const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B06}\u{2934}\u{2935}\u{2194}\u{2195}\u{25AA}\u{25AB}\u{25FE}\u{25FD}\u{25FB}\u{25FC}\u{25B6}\u{25C0}\u{1F200}-\u{1F251}]/gu
        title = title.replace(emojiRegex, '');
        title = title.slice(0 ,35)

        const dateApi = post.timestamp ?? null
        const formatedDate = new Date(dateApi)
        const day = ("0" + formatedDate.getDate()).slice(-2)
        const mounth = [
        "jan", "fev", "mar", "abr", "mai", "jun",
        "jul", "ago", "set", "out", "nov", "dez"
        ]
        const finalMounth = mounth[formatedDate.getMonth()]
        const year = formatedDate.getFullYear()
        const finaldate = day + " " + finalMounth + ", " + year

        const paragraphs = post.caption.split('.').map((paragraph, index) => (
            <p key={index} className="text">{paragraph.trim()}</p>
        ));
        

        return (
            <div className='Post'>
                <PageTitle title={"Notícias /" + title + "..."}/>
                <div className="postInfoInner">
                    <p className="date">{finaldate}</p>
                    <div className="postImgInner">
                        <img src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url} alt="" />
                        <div className="npImgOverlay"></div>
                    </div>
                    <p className="to">De <span className="toStyle">Instagram</span></p>
                    {paragraphs}
                    <div className="postLnks">
                        <Link to={"/news"} className='backPost'>Voltar</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Post;