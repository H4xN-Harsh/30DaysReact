import { useState } from "react";
import Card from "./Components/Card";

const students=[
  {id:1,name:"Harsh",Marks:17},
  {id:2,name:"Rosie",Marks:98},
  {id:3,name:"Nivedita",Marks:92},
  {id:4,name:"Yuvan",Marks:74},
  {id:5,name:"Yash",Marks:35},
  {id:6,name:"Ritesh",Marks:41},
  {id:7,name:"Rakhi",Marks:39},
  {id:8,name:"Ravina",Marks:95},
]

export default function App(){
  const [ShowAll,setShowAll] = useState(true);
  // filter logic 
  const filterStudents = ShowAll?students:students.filter((students)=>students.Marks>=40)


  return(
    <div id="root">
      <h1>Students Result Portal</h1>
      <button onClick={()=>setShowAll(!ShowAll)}>{ShowAll?"hide failed students":"show All Students"}</button>


      <div id="container">
        {filterStudents.map((students)=>{
        return(
          <div key={students.id}>
            <Card name={students.name} marks={students.Marks}/>
          </div>
        )
      })}
      </div>
      
    </div>
  )
}