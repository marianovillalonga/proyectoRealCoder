import React from "react";
import imagenhero from "../../images/1-3-pasos-para-crear-un-negocio-1024x682.jpg";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-between my-5 p-5 ">
      <div className="d-flex flex-column flex-md-row">
        <div className="d-flex flex-column ">
          <h1 className="text-center text-md-start">
            Capacitamos personas para que cumplan su sueño emprendedor
          </h1>
          <p className="mb-5 text-center text-md-start">
            Te acompañamos en tu camino con profesionales experimentados y las
            mejores herramientas.
          </p>
        </div>
        <div className="container">
          <img
            src={imagenhero}
            className="img-fluid img-hero"
            alt="imagen-hero"
          />
        </div>
      </div>

      <button className="btn__hero btn-lg mt-5 w-75">
        <Link to={"/Cursos"} className="text-white"> Conoce nuestros cursos</Link>
      </button>
    </div>
  );
};
