import { useState } from "react";

function AddNewUser() {
  const [students, setStudents] = useState([
    { id: 111, name: "ABHI" },
    { id: 222, name: "Adhi" },
    { id: 333, name: "Shri" },
    { id: 444, name: "Varsha" }
  ]);
   const handleAddUser=s
    return (
         <div>
            <h2>Student Names:</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            <input type="text">Add user name</input>
            <button onClick={handleAddUser}>Add new user</button>
        </div>
    )
}

export default AddNewUser

