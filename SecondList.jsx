function SecondList(){
   const students=[
    {id:111,name:"ABHI",city:"Udupi" },
    {id:222,name:"Adhi",city:"mangalore" },
    {id:333,name:"Shri",city:"puttur" },
    {id:444,name:"Varsha",city:"pune" }
   ]
   
    return (
        <div>
<h2>Student List: </h2>
{
    students.map((student)=>
        <p key={student.id}>Name:{student.name} City:{student.city}</p>
    )
}
        </div>
    )
}
export default SecondList