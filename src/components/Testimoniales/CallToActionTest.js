import React from 'react'
import { Link } from 'react-router-dom'

export const CallToActionTest = () => {
  return (
    <div className="container">
      <h3>Si queres potenciarte y capacitarte, este es tu lugar.</h3>
      <button className="btn btn-primary btn-lg fs-3"><Link to={"/Form"} className="text-white">Contactar</Link></button>
      <div className="container">
      <h3>Preguntas frecuentes</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              1. ¿Entregan certificaciones ?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Si, entregamos certificaciones validadas por la escuela y el Departamento Educativo Provincial</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            2.  ¿Como puedo inscribirme?
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Para la inscripcion solo puedes mandar un emal, whatsapp o entrando en nuestras redes</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            3.  ¿Necesito tener conocimientos previos para cursar ?
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">No es necesario tener conocimientos previos sobre las carreras, pero si ser egresado de la preparatoria.</div>
        </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}
