import React from "react";
 
export const CardObjetivos = ({ titulo, contenido, imagen }) => {
  return (
    <div className="mx-3 w-75 ">
      <h3 className="titulo-neg"> {titulo} </h3>
      <div className=" h-100 card__radius">
        <div className="card-img__container">
          <img src={imagen} alt={imagen} />
        </div>
        <div className=" p-3 cardObj__text-container">
          <p className="cardObj__text mt-2">{contenido}</p>
        </div>
      </div>
    </div>
  );
};
