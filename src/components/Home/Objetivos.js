import React from "react";
import { CardObjetivos } from "../ui/cards/CardObjetivos";

const imagenesObjetivo = require.context("../../images", true)

export const Objetivos = () => {
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between seccion">
      <CardObjetivos
        titulo={"Misión"}
        imagen={imagenesObjetivo("./pexels-liza-summer-6347912.jpg")}
        contenido={
          "Nos enfocadamos en la educación de alto nivel para los pequeños y medianos emprendedores en México"
        }
      />
      <CardObjetivos
        titulo={"Visión"}
        imagen={imagenesObjetivo("./portrait-female-owner-fashion-store-2721149.jpg")}
        contenido={
          "Aportar valor a la mayor cantidad posible de pequeños emprendedores"
        }
      />
      <CardObjetivos
        titulo={"Valores"}
        imagen={imagenesObjetivo("./pexels-yan-krukov-7793692.jpg")}
        contenido={
          "Creemos en el potencial de cada persona, en la superación personal y determinacion"
        }
      />
    </div>
  );
};
