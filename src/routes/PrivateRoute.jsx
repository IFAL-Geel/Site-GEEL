import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import { Outlet, Navigate } from "react-router-dom"

export default function PrivateRoute(){

    const { signed } = useContext(AuthContext)

    return signed ? <Outlet /> : <Navigate to="/auth" />
}