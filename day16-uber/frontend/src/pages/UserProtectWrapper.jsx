import { useContext } from "react"


import { useNavigate } from "react-router-dom"



export default function UserProtectWrapper({children}){
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if(!token){
        navigate('/login');
    }
    return(
        <>{children}</>
    )
}