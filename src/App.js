import React, { useState } from 'react'

function App() {
  const [state,setstate] = useState(initialState)
  return (
    <div className="container mt-5">
         <h1>Tareas</h1>
             <hr/>
              <div className="row">
                 <div className="col -8">
                     <h4 className="text-center"> lista de tareas</h4>
                        <ul className="list-grup">
                           <li className="list-grup-item">
                               <span className="lead">nombre de la tarea</span>
                               <button className="btn btn-danger btn-sn float right mx-2">Eliminar</button>
                               <button className="btn btn-warning btn-sn float right mx-2">Editar</button> 
                            </li>
                         </ul>
                 </div>
                 <div className="col-4">
                   <h4 className="text-center">formularios</h4>
                   <form>
                     <input
                      type= "text"
                      className="form-control mb-2"
                      placeholder="ingrese la tarea.."
                      />
                      <button className="btn btn-dark btn-block" type="submit">agregar</button> 
                   </form>
                </div>
             </div>
    </div>
  )
}

export default App
