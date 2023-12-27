import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth(app)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {

            const sessionToken = localStorage.getItem("@AuthFirebase:token")
            const sessionUser = localStorage.getItem("@AuthFirebase:user")

            if (user && sessionToken && sessionUser) {
                setCurrentUser(user);
                console.log(user)
            } else {
                setCurrentUser(null);
            }
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    const signIn = async (email, pass) => {
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, pass)
            const user = userCredentials.user

            console.log(user);

            const token = await user.getIdToken()
            localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
            localStorage.setItem("@AuthFirebase:token", token)

            navigate("/")

        } catch(err){
            console.error("Erro ao fazer login", err.message)
            throw err
        }
    }

    return <AuthContext.Provider value={{ signIn, signed: !!currentUser, currentUser }}>
        { children }
    </AuthContext.Provider>
}