import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Context } from "./Context"


 


export const ProtectRoute=({children})=>{
    const {LoginParol}=useContext(Context)
    console.log(LoginParol);
    if(LoginParol==undefined){
        return <Navigate to={'/login'}/>
    }
    return children

}