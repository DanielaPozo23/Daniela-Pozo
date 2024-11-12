import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../components/inicio/Home'

//Rutas absolutas
import ViewCalificaciones from '../components/calificaciones/ViewCalificaciones'
function Rutas() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
            <Route path='/calificaciones' element={<ViewCalificaciones/>}></Route>
        </Routes>
    </div>
  )
}

export default Rutas 