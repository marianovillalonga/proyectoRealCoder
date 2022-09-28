import React from 'react'
import imagenCurso from "../../images/pexels-olia-danilevich-8145328.jpg";

export const CursoAdm = () => {
  return (

    <div>
        <div className="container seccion">
            <div className="d-flex">
                <div className="w-50 overflow-hidden m-5 imgNosotros__container">
                <img src={imagenCurso} alt={imagenCurso} className="w-100" />
                </div>
                <div className="w-50 p-5 m-5">
                <p className="fs-1 fw-bold text-start">ADMINISTRACIÓN</p>
                <p>
                    descripcioncuanto duracuanto duracuanto dura
                    salida laboralcertificacion?salida laboral
                    certificacion?salida laboralcuanto dura
                    salida laboralcuanto durasalida laboral
                    certificacion?
                    certificacion?cuanto durasalida laboralcertificacion?certificacion?cuanto durasalida laboral  certificacion?
                </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
