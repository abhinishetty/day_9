import Table from 'react-bootstrap/Table';
function BootStrapTable(){
    const students=[
    {id:111,name:"ABHI",city:"Udupi" },
    {id:222,name:"Adhi",city:"mangalore" },
    {id:333,name:"Shri",city:"puttur" },
    {id:444,name:"Varsha",city:"pune" }
   ]
  
return(
    
    <div className='container mt-4'>
        <h2 className='head3'>Student Table</h2>
        <Table striped bordered hover responsive>
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
        </Table>
    </div>
    
)

}
export default BootStrapTable