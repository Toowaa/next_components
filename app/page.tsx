"use client";
import AccordionQuest from "../components/AccordionQuest";
import TherapyServices from "../components/Services";
import React from "react";
import AppCaro from "@/components/carousel";
import {  CarouselPlugin } from "@/components/carusel";

export default function App() {
  return (
    <>
      <div className="text-center font-bold text-xl mt-[119px] mb-[115px] text-[#634AE2]">Preguntas Frecuentes</div>
      <div className="grid gap-4 mx-auto px-4 max-w-4xl">
        <AccordionQuest
          Question="¿Cuánto cuesta la consulta?"
          Answer={
            <>
              La <strong>primera consulta diagnóstica </strong>tiene un costo de{" "}
              <strong>X soles</strong>. Las consultas regulares tienen un valor
              de <strong>X soles</strong>, pero al iniciar tu tratamiento, el
              psicólogo te ofrecerá un paquete personalizado con sesiones a
              partir de <strong>X soles</strong>.
            </>
          }
        />
        <AccordionQuest
          Question="¿Cuánto cuesta la consulta?"
          Answer={
            <>
              La <strong>primera consulta diagnóstica </strong>tiene un costo de{" "}
              <strong>X soles</strong>. Las consultas regulares tienen un valor
              de <strong>X soles</strong>, pero al iniciar tu tratamiento, el
              psicólogo te ofrecerá un paquete personalizado con sesiones a
              partir de <strong>X soles</strong>.
            </>
          }
        />
        <AccordionQuest
          Question="¿Cuánto cuesta la consulta?"
          Answer={
            <>
              La <strong>primera consulta diagnóstica </strong>tiene un costo de{" "}
              <strong>X soles</strong>. Las consultas regulares tienen un valor
              de <strong>X soles</strong>, pero al iniciar tu tratamiento, el
              psicólogo te ofrecerá un paquete personalizado con sesiones a
              partir de <strong>X soles</strong>.
            </>
          }
        />
      </div>
      <TherapyServices/>


          <AppCaro></AppCaro>
        <CarouselPlugin/>
       
    </>
  );
}
