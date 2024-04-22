import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ajouter from './Ajouter'
import Modifier from './Modifier'
import ListeSal from './ListeSal'


export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListeSal/>}/>
            <Route path="/ajou" element={<Ajouter/>}/>
            <Route path='/modi/:Matricule' element={<Modifier/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
