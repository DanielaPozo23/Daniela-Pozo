import React,{useState} from 'react'

function Estados() {
    const[valor,setValor]=useState(500)
    const agregarValor=()=>{
        setValor(valor-1)
    }
  return (
    <div>Estados
        <h1>agregar valor {valor}</h1>
        <button onClick={agregarValor}>Incrementar</button>
    </div>
  )
}

export default Estados