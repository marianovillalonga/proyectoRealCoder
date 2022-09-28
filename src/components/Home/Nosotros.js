import React from "react";
import imagenNosotros from "../../images/pexels-bruno-bueno-3854816.jpg";

export const Nosotros = () => {
  return (
    <div className="container seccion">
      <h2 className="text-start">Nosotros</h2>
      <div className="d-flex flex-column align-items-center">
        <div className="w-75 overflow-hidden m-3 imgNosotros__container">
          <img src={imagenNosotros} alt={imagenNosotros} className="w-100" />
        </div>
        <div className="w-75 p-2">
          <h3 className="fw-bold text-start">La escuela</h3>
          <p>
            Bax soluciones es una empresa que se dedica a la educación de alto
            nivel dirigida a pequeños y medianos empresarios. Bax soluciones
            brinda conocimientos en los campos de marketing, contabilidad,
            administración y psicología para que sus alumnos sean capaces de
            llevar su emprendimiento al siguiente nivel de manera independiente.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
