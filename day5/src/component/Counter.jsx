import { useContext, useEffect } from "react"
import { CounterContext } from "../context/CounterContext"

export default function Counter(){
    const {count,add} = useContext(CounterContext)

    useEffect(function(){
        document.title = `count:  ${count}`
    });
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )

}