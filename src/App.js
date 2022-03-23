import React,{ useState } from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'


function  App() {
   const [task, setTask] = useState("")
   const [tasks, setTasks] = useState([])

   const addTask = (e) =>{
      e.preventDefault()
      if (isEmpty(task)){
       console.log("task empty")
       return
      }

      const newTask =   {
         id: shortid.generate(),
         name: task
      }

      setTasks([...tasks, newTask ])

     setTask("")

   }

   const deleteTask = (id) => {
      const filteredtasks = tasks.filter(task => task.id !==id)
      setTasks(filteredtasks)

   }


return (
 <div className="container mt-5"> 
    <h1>TAREAS</h1>
     <hr/>
      <div className="row"> 
       <div className="col-8">
          <h4 className="text-center">lista de tareas</h4>
       {
          size(tasks) === 0 ? (
            <h5 className="text-center">no hay tareas programadas</h5>

          ) : (
          <ul className="list-group">
            {tasks.map((task) => (
                <li className="list-group-item" key={task.id}>
                   <span className="lead">{task.name}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(task.id)}
                  >
                   eliminar
                  </button>
                  <button
                   className="btn btn-warning btn-sm float-right "
                  >
                   eliminar
                  </button>
                </li>
                ))
             }
          </ul>
          )     
       }
       </div>
      <div className="col-4">
          <h4 className="text-center">formularios</h4>
          <form onSubmit={addTask}>
             <input 
             type="text"
             className="form-control mb-2"
             placeholder="ingerse la tarea..."  
             onChange={(text) => setTask(text.target.value)}
             value={task}
             >
             </input>
             <button
             className="btn btn-dark btn-block"
             type="submit"
             >
             agregar
             </button>
          </form>
       </div>
     </div>
   </div>
  )
}

export default App ;