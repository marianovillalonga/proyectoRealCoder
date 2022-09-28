import React from "react";

export const Avatar = ({ imagen }) => {
  return (
    <div className="avatar">
      <img src={imagen} alt={imagen} />
    </div>
  );
};
