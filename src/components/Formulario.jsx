import { useState } from 'react'
import './Formulario.css'

function Formulario() {

const [nombre,setNombre]=useState("")
function nombreAct(e) {
    setNombre(e.target.value)
    console.log(nombre);
    
}


    return(
        <div className=" f-tp6 6row g-3"> <h2 className='p'>LOGIN</h2>
        
        <form>
           <div class="col">
             <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" value={nombre} onChange={nombreAct}/>
           </div>

           <div class="col">
             <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"/>
           </div>

           <div class="col">
             <input type="Email" className="form-control" placeholder="Email" aria-label="Email"/>
           </div>

           <div class="col">
             <input type="number" className="form-control" placeholder="Telefono" aria-label="Telefono"/>
           </div>

           <div class="col">
             <input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
           </div>

           <div class="col">
             <input type="password" className="form-control" placeholder="Confirmar password" aria-label="Confirmar password"/>
           </div>

           <button type="submit" class="btn btn-outline-dark">ingresar</button>
        </form>
        </div>
        
    )
}

export{Formulario}