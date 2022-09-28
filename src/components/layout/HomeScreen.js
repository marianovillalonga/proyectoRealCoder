import React from "react";
import { CallToAction } from "../Home/CallToAction";
import { CallToAction2 } from "../Home/CallToAction2";
import { Cursos } from "../Home/Cursos";
import { Hero } from "../Home/Hero";
import { Informacion } from "../Home/Informacion";
import { Nosotros } from "../Home/Nosotros";
import { Objetivos } from "../Home/Objetivos";
import { Staff } from "../Home/Staff";
import { Testimonios } from "../Home/Testimonios";
import { CursosScreen } from "./CursosScreen";

export const HomeScreen = () => {
  return (
    <div className="container">
      <Hero />
      <Objetivos />
      <Cursos />
      <Informacion />
      <Testimonios />
      <CallToAction />
      <Nosotros />
      <Staff />
      <CallToAction2/>
    </div>
  );
};
