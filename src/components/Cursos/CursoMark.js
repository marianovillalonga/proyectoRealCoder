import React from 'react'
import imagenCurso from "../../images/Libro-mayor-1140x760.jpg";

export const CursoMark = () => {
  return (

    <div>
        <div className="container seccion">
            <div className="d-flex">
                <div className="w-50 overflow-hidden m-5 imgNosotros__container">
                <img src={imagenCurso} alt={imagenCurso} className="w-100" />
                </div>
                <div className="w-50 p-5 m-5">
                <h3 className="fw-bold text-start">MARKETING</h3>
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
