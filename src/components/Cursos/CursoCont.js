import React from 'react'
import imagenCurso from "../../images/Aprende-todo-sobre-la-Contabilidad-Financiera-en-10-minutos.jpg";

export const CursoCont = () => {
  return (

    <div>
        <div className="container seccion">
            <div className="d-flex">
                <div className="w-50 p-5 m-5">
                    <h3 className="fw-bold text-start">CONTABILIDAD</h3>
                    <p>
                        descripcioncuanto duracuanto duracuanto dura
                        salida laboralcertificacion?salida laboral
                        certificacion?salida laboralcuanto dura
                        salida laboralcuanto durasalida laboral
                        certificacion?
                        certificacion?cuanto durasalida laboralcertificacion?certificacion?cuanto durasalida laboral  certificacion?
                    </p>
                </div>
                <div className="w-50 overflow-hidden m-5 imgNosotros__container">
                    <img src={imagenCurso} alt={imagenCurso} className="w-100" />
                </div>
            </div>
        </div>
    </div>
    
  )
}