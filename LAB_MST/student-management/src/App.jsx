import { useState } from 'react'
import StudentCard from './components/student-card'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { name: "Alice Johnson", id: "101", age: 20 },
    { name: "Bob Smith", id: "102", age: 22 },
    { name: "Charlie Brown", id: "103", age: 19 }
  ])

  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [age, setAge] = useState("")

  function addStudent() {
    if (name && id && age) {
      const newStudent = { name: name, id: id, age: age }
      setStudents(students.concat(newStudent))
      setName("")
      setId("")
      setAge("")
    }
  }

  return (
    <div>
      <h1>Student List</h1>
      
      <div>
        <h2>Add Student</h2>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <button onClick={addStudent}>Add</button>
      </div>

      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard 
            key={index}
            name={student.name} 
            id={student.id} 
            age={student.age} 
          />
        ))}
      </div>
    </div>
  )
}

export default App