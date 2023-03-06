import { useContext, useRef } from "react"
import { Navigate } from "react-router-dom"
import { Context } from "./Context"


 


export const ProtectRoute=({children})=>{
    const {LoginParol}=useContext(Context)
   
    if(LoginParol==undefined){
        return <Navigate to={'/login'}/>
    }
    return children

}