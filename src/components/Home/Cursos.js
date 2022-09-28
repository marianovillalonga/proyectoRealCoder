import React from "react";
import { CardCursos } from "../ui/cards/CardCursos";

const imagenesCursos = require.context("../../images", true);

export const Cursos = () => {
  return (
    <div className="container d-flex flex-column seccion card-mov">
      <h2 className="text-start">Nuestro Cursos</h2>
      <span>
        Nuestra oferta académica te permitirá desempeñarte en las áreas de:{" "}
      </span>
      <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="move-1 col-10 d-flex my-5 radius__cardCurso">
          <CardCursos
            imagen={imagenesCursos("./pexels-olia-danilevich-8145328.jpg")}
            titulo={"Administración"}
            contenido={
              "Suma conocimientos de gestión y administracióna altamente útiles y requeridos en toda empresa. "
            }
          />
        </div>
        <div className="move-2 col-10 d-flex my-5 radius__cardCurso">
          <CardCursos
            imagen={imagenesCursos(
              "./Aprende-todo-sobre-la-Contabilidad-Financiera-en-10-minutos.jpg"
            )}
            titulo={"Contabilidad"}
            contenido={
              "Aprende la mejor manera de atender las cuentas de tu negocio o de la empresa que vayas a trabajar. "
            }
          />
        </div>
        <div className="move-3 col-10 d-flex my-5 radius__cardCurso">
          <CardCursos
            imagen={imagenesCursos("./Libro-mayor-1140x760.jpg")}
            titulo={"Marketing"}
            contenido={
              "Gestiona, planifica y crea las mejores estrategias de publicidad y promoción para tu emprendimiento o para clientes."
            }
          />
        </div>
      </div>
    </div>
  );
};
