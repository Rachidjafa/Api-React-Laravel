import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Ajouter() {
    
    const navigate = useNavigate();

    const [Matricule ,setMatricule] = useState('');
    const [Nom ,setNom] = useState('');
    const [Salaire ,setSalaire] = useState('');

    const createSalaire = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('Matricule', Matricule)
        formData.append('Nom', Nom)
        formData.append('Salaire', Salaire)

        console.log(formData)
        await axios.post('http://127.0.0.1:8000/api/salaries', formData)
        .then(({data})=>{
            console.log(data.message)
            navigate('/')
        }).catch(({response})=>{
            if (response.status ==422) {
                console.log(response.data.errors)
            } else {
                console.log(response.data.message)
            }
        })
    }

    return (
        <div className='container mt-4'>
            <h1 className='h1'>Ajouter Salaries</h1>
            <form action="" onSubmit={createSalaire}>
                <label htmlFor="" className='form-label'>Matricule :</label><br />
                <input type="text" className='form-control' value={Matricule} onChange={(e)=>{setMatricule(e.target.value)}} /><br />
                <label htmlFor="" className='form-label'>Nom Complet :</label><br />
                <input type="text" className='form-control' value={Nom} onChange={(e)=>{setNom(e.target.value)}}/><br />
                <label htmlFor="" className='form-label mt-4'>Salaire :</label><br />
                <input type="text" className='form-control' value={Salaire} onChange={(e)=>{setSalaire(e.target.value)}} /><br />
                <button type="submit" class="btn btn-success">Ajouter</button>
            </form>
        </div>
    )
}



