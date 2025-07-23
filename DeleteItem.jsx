import { useState } from "react"
function DeleteItem(){
   const handleDeleteButton=(id)=>{
    const newStudent=students.filter((c)=>c.id!==id);
    setStudents(newStudent)
}
const[students,setStudents]=useState([

    {id:111,name:"ABHI",city:"Udupi" },
    {id:222,name:"Adhi",city:"mangalore" },
    {id:333,name:"Shri",city:"puttur" },
    {id:444,name:"Varsha",city:"pune" }
   ])
    return(
        <div>
<h2> NameList: </h2>
{
    students.map((c)=>(
        <div key={c.id}>{c.name}
        <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
</div>
    ))
}
        </div>
    )
}
export default DeleteItem