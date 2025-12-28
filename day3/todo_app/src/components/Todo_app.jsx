import { useState } from "react";

function Todo_app(){
    const [tasks,setTask] = useState(["hello ","hey ","namsate"]);
    const [newTask,setNewTask] = useState("");

    function addTask(){
        setTask(t=>[...t,newTask]);
        setNewTask("");
    }

    function remove(idx){
        setTask(tasks.filter((_,index)=>index!=idx));
    }


    return(
        <div className="container">
            <h1>Todo app</h1>
            <div className="input">
                <input type="text" placeholder="enter the todos..." value={newTask} onChange={(e)=>setNewTask(e.target.value)} /> <button onClick={addTask}>Add</button>
            </div>
            <div className="list_todos">
                <ol>
                    {
                       tasks.map((task,idx)=>(
                        <li key={idx}>{task} <button onClick={()=>remove(idx)}>del</button></li>
                       ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Todo_app;