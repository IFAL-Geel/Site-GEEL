import { Link } from "react-router-dom"
import "./HomePost.css"

export default function HomePost(props) {
    return(
        <div className="HomePost">
            <div className="hp_line" />

            <div className="hp_texts">
                <p className="hp_date">01/01/0001</p>
                <Link className="hp_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima quod vel dolores nulla aperiam esse nihil autem pariatur voluptatem amet harum neque nisi aliquid, vero, animi nam unde veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit</Link>
            </div>
        </div>
    )
}