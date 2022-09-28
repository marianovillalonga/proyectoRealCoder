import React from "react";

export const CardCursos = ({ imagen, titulo, contenido }) => {
  return (
    <>
      <div className="col-7 p-5 ">
        <h4 className="m-5"> {titulo} </h4>
        <p className="m-5">{contenido}</p>
      </div>
      <div className="col-5 ">
        <img src={imagen} className="w-100 h-100 " alt={imagen} />
      </div>
    </>
  );
};
