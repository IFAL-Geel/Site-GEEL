import { Link } from "react-router-dom";
import "./UserButton.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/InstagramAPI/authContext";

export default function UserButton(props){

    const { signed, userDB } = useContext(AuthContext)
    const [key, setKey] = useState(0)

    useEffect(() => {
        setKey((prev) => prev + 1);
    }, [userDB])

    if(signed && userDB){
        return(
            <Link className="btn-User" to="/admin" key={"userButtonKey" + key}>
                <div className="imgUserInner">
                    <img src={userDB.photoURL ?? "https://images.squarespace-cdn.com/content/v1/60300340d27ffb2c6946ccbe/60a8c595-c4ac-4197-bc2f-fb04778ea08f/Laufey-Bewitched-Website.png"} alt="" />
                </div>
            </Link>
        )
    }
}