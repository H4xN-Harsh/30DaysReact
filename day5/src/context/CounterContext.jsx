import { Children, createContext, useState } from "react";
export const  CounterContext = createContext();


function CounterProvider({children}){
    const[count,setCount]=useState(0);
    function add(){
        setCount(count+1);
    }

    return(
        <CounterContext.Provider value={{add,count}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider;