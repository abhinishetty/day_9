function TableList(){
const students=[
    {id:111,name:"ABHI",city:"Udupi" },
    {id:222,name:"Adhi",city:"mangalore" },
    {id:333,name:"Shri",city:"puttur" },
    {id:444,name:"Varsha",city:"pune" }
   ]


    return(
        <div>
<h2>Student table :</h2>
<table border="2" cellPadding="10" cellSpacing="0">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>city</th>
        </tr>
    </thead>
<tbody>
    {
        students.map((s)=>(
            <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.city}</td>
            </tr>
        )
        )
    }
</tbody>
</table>
        </div>
    )
}
export default TableList