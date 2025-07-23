import EmployeeCard from "./EmployeeCard"
function EmployeeList(){
   const employees=[
    {id:111,name:"ABHI",city:"Udupi" },
    {id:222,name:"Adhi",city:"mangalore" },
    {id:333,name:"Shri",city:"puttur" },
    {id:444,name:"Varsha",city:"pune" }
   ]
   
    return(
        <div>
<h2>employee list</h2>
{
    employees.map((employee)=>
   <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>
   )
}
        </div>
    )
}
export default EmployeeList