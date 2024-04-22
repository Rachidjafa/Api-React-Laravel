import React from "react"

export default function Modifier() {
    return (
        <div className='container mt-4'>
            <h1 className='h1'>Ajouter Salaries</h1>
            <form action="">
                <label htmlFor="" className='form-label'>Matricule :</label><br />
                <input type="text" className='form-control' /><br />
                <label htmlFor="" className='form-label'>Nom Complet :</label><br />
                <input type="text" className='form-control'/><br />
                <label htmlFor="" className='form-label mt-4'>Salaire :</label><br />
                <input type="text" className='form-control' /><br />
                <button class="btn btn-success">Add</button>
            </form>
        </div>
    )
}