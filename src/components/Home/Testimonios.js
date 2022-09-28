import React from "react";
import { CardTestimonios } from "../ui/cards/CardTestimonios";
const imagenesTestimonios = require.context("../../images", true);

export const Testimonios = () => {
  return (
    <div className="container seccion">
      <div className="row">
        <h2 className="text-start">Testimonios</h2>
        <div className="col-md-4">
          <CardTestimonios
            imagen={imagenesTestimonios("./tips-1200x685.jpg")}
            text1={
              "El curso fue muy interesante, muy didáctico en cuanto a la metodología de trabajo y contenidos. (…) todas las dudas fueron perfectamente respondidas. Creo que todo lo aprendido tiene mucho valor para el desempeño de nuestro trabajo profesional cotidiano. Gracias por el compromiso y predisposición del docente para con el curso."
            }
            text2={
              "Juliana, 24 años"
            }
          />
        </div>
        <div className="col-md-4">
          <CardTestimonios
            imagen={imagenesTestimonios("./istockphoto-1266579019-612x612.jpg")}
            text1={
              "El material entregado en el Curso de Marketing cubrió totalmente la necesidad, y el objetivo superó totalmente con lo propuesto. El curso esta relacionado con lo que realmente pasa en la empresa."
            }
            text2={
              "Rosa, 37 años"
            }
          />
        </div>
        <div className="col-md-4">
          <CardTestimonios
            imagen={imagenesTestimonios(
              "./retrato-de-hombre-mexicano-adulto-maduro-con-barba-en-casa-211185463.jpg"
            )}
            text1={
              "Una vez iniciados mis estudios, descubrí el trato personalizado, profesional y la excelente calidad humana de todos sus profesores. Todos de una forma u otra, contribuyeron motivándome, inspirándome y retándome a dar lo mejor de mí."
            }
            text2={
              "Carlos, 45 años"
            }
          />
        </div>
      </div>
    </div>
  );
};
