import React from "react";

const imagenesInfo = require.context("../../images", true);

export const Informacion = () => {
  return (
    <div className="container seccion">
      <div className="row">
        <p className="mb-5 fs-1 fw-bold text-center">
          De 1,038 egresados de la carrera de Administración, 919 se encuentran
          trabajando.
        </p>
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="infoCard">
              <div className="infoCard1 col-md-3">
                <img
                  src={imagenesInfo("./pexels-michael-burrows-7129007.jpg")}
                  alt={imagenesInfo("./pexels-michael-burrows-7129007.jpg")}
                />
              </div>
              <p className="text-center">
                ¿Sabías que tener conocimientos de Administración te permite
                contar con herramientas para gestionar de manera eficiente tu
                negocio?
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="infoCard d-flex flex-column align-items-center">
              <div className="infoCard2 col-md-3 m-0 p-0">
                <p className="text-center ">
                  <span>95%</span> <br /> de los estudiantes de{" "}
                  <span>Marketing</span>
                  <br /> consiguen trabajo inmediato
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="infoCard">
              <div className="infoCard3 col-md-3">
                <img
                  src={imagenesInfo("./istockphoto-1288634246-612x612.jpg")}
                  alt={imagenesInfo("./istockphoto-1288634246-612x612.jpg")}
                />
              </div>
              <h4>¿Quieres ser Contador/a?</h4>
              <p>
                Contaduría está entre las carreras con menor porcentaje de
                informalidad y de desempleo en México.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
