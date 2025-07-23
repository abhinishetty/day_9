function NameList(){
     const students=[
    {id:111,name:"ABHI"},
    {id:222,name:"Adhi" },
    {id:333,name:"Shri" },
    {id:444,name:"Varsha" }
   ]
   
    return (
        <div>
<h2>Student Names: </h2>
{
    students.map((student)=>
        <ul key={student.id}>
       <li>  {student.name}</li>   
             </ul>
    )
}
        </div>
    )
}

export default NameList