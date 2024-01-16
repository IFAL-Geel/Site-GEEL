import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, db } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const [userDB, setUserDB] = useState(null)
    const auth = getAuth(app)
    const navigate = useNavigate()

    useEffect(() => {
        const sessionToken = localStorage.getItem("@AuthFirebase:token");
        const sessionUser = localStorage.getItem("@AuthFirebase:user");
        const sessionDB = localStorage.getItem("@Firestore:user")

        if (sessionToken && sessionUser && sessionDB) {
            setCurrentUser(JSON.parse(sessionUser));
            setUserDB(JSON.parse(sessionDB));
        } else {
            setCurrentUser(null);
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);

                const token = user.getIdToken();
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
                localStorage.setItem("@AuthFirebase:token", token);

                if (window.location.pathname === "/auth") {
                    navigate("/");
                }
            } else {
                setCurrentUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth, navigate]);

    const signIn = async (email, pass) => {
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, pass)
            const user = userCredentials.user

            console.log(user);

            const token = await user.getIdToken()
            localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
            localStorage.setItem("@AuthFirebase:token", token)

            await getUser(email)

        } catch(err){
            console.error("Erro ao fazer login", err.message)
            throw err
        }
    }

    const signOff = () => {
        try{
            signOut(auth)
    
            localStorage.removeItem("@AuthFirebase:user")
            localStorage.removeItem("@AuthFirebase:token")
            localStorage.removeItem("@Firestore:user")
    
            setCurrentUser(null)
            setUserDB(null)

            navigate("/auth")
        } catch (e) {
            console.log("erro ao deslogar: " + e.message);
        }
    }

    async function getUser(userLog){
        const docRef = doc(db, "users", userLog)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            setUserDB(docSnap.data())
            localStorage.setItem("@Firestore:user", JSON.stringify(docSnap.data()))
            console.log(docSnap.data());
        } else {
            log("usuario nn existe")
        }
    }

    return <AuthContext.Provider value={{ signIn, signed: !!currentUser && !!userDB, currentUser, signOff, userDB }}>
        { children }
    </AuthContext.Provider>
}