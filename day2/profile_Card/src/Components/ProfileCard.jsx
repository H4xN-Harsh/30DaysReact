import { useState } from "react"
import './Compo.css'

function ProfileCard({name,age,image,details}){
    const [showDetails , setShowDetails] = useState(true);
    return(
        <div className="container">
            <div>
                <img className="image" src={image} alt={name} />
                <p>name: {name}</p>
                <p>age: {age}</p>
                
                <button onClick={()=>setShowDetails(!showDetails)}>{showDetails?"less":"details"}</button>
                {showDetails&& (
                    <p>{details}</p>
                )}
            </div>
        </div>
    )
}

export default ProfileCard;