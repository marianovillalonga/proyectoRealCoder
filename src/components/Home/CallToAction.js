import React from 'react'
import { Link } from 'react-router-dom'

export const CallToAction = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center callToAction__container'>
      <div className='w-50 '>
        <h1 className='fw-bold fs-1 text-center '>Aprende las mejores herramientas para hacer crecer tu negocio.</h1>
      </div>
      <div className=' d-flex align-items-center justify-content-center '>
        
        <button className=' fs-2 p-4 text-white'><Link to={"/Form"} className="text-white">Consultar inscripciones</Link></button>
      </div>
    </div>
  )
}
