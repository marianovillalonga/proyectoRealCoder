import React from "react";
import { Avatar } from "../ui/cards/Avatar";

const staffImagenes = require.context("../../images", true);

export const Staff = () => {
  return (
    <div className="container seccion d-flex align-items-center justify-content-between w-100 contenedor-seccion">
      <div className="w-75">
        <h3>Staff</h3>
        <p>
          Contamos con un plantel de profesionales experimentados en las áreas
          dictadas. Cada miembro se desempeña en guiar, brindar los
          conocimiemtos y acompañar a cada estudiante en su proceso de
          aprnedizaje.
        </p>
      </div>
      <div className="d-flex mb-5">
        <div className="d-flex w-25">
          <Avatar
            imagen={staffImagenes(
              "./1-3-pasos-para-crear-un-negocio-1024x682.jpg"
            )}
          />
        </div>
        <div className="d-flex w-25">
          <Avatar
            imagen={staffImagenes(
              "./becas-mexico-2019-estudiantes-mexicanos.jpg"
            )}
          />
        </div>
        <div className="d-flex w-25">
          <Avatar
            imagen={staffImagenes("./istockphoto-1266579019-612x612.jpg")}
          />
        </div>
        <div className="d-flex w-25">
          <Avatar
            imagen={staffImagenes("./istockphoto-1161222690-170667a.jpg")}
          />
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center text-center w-25 mt-5">
        <Avatar
          imagen={staffImagenes(
            "./retrato-de-hombre-mexicano-adulto-maduro-con-barba-en-casa-211185463.jpg"
          )}
        />
        <p>Carlos Carrera</p>
        <span>CEO/Director BAX Soluciones</span>
      </div>
    </div>
  );
};
