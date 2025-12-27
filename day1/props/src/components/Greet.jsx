import "./Greet.css"
export default function Greet(props){
    return(
        <div className="g-box">
            <h1>This is details no. {props.details}</h1>
            <p>hey {props.name} are u {props.age} years old </p>
        </div>
    )
}