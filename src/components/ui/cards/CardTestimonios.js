import React from "react";
import { Avatar } from "./Avatar";

export const CardTestimonios = ({ imagen, text1, text2 }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Avatar imagen={imagen} />
      <p className="text-center mx-1">
        {text1}
      </p>
      <p className="text-center mx-1">
        {text2}
      </p>
    </div>
  );
};
