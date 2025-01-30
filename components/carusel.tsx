import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Recibe terapia en casa",
    description:
      "Accede a sesiones por videollamada o llamada disfrutando de la comodidad de tu hogar.",
    background: "/CarruselInferiorMain/abuela.webp",
  },
  {
    title: "Elige a tu psicólogo",
    description:
      "Te asignamos un psicólogo colegiado que te guiará en cada sesión, con técnicas efectivas para tus necesidades.",
    background: "/CarruselInferiorMain/azul.webp",
  },
  {
    title: "Inicia tu terapia en línea",
    description:
      "Conéctate a tu consulta psicológica a través de contigo voy y empieza tu proceso terapéutico.",
    background: "/CarruselInferiorMain/brazos.webp",
  },
  {
    title: "Agenda tu horario ideal",
    description:
      "Programa tus sesiones en el día y la hora que mejor se ajusten a tu rutina.",
    background: "/CarruselInferiorMain/cruzado.webp",
  },
];

export function CarouselPlugin() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: "rtl",
        axis: "y",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
        }),
      ]}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {features.map((feature, index) => (
          <CarouselItem key={index} className="pt-1">
            <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
              <Image
                src={feature.background}
                alt={feature.title}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}