
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


export default function SliderComponentSSS() {
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  const handleSlideChange = (splide: any) => {
    setCurrentPhrase(splide.index);
  };

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center px-4 py-16 bg-[#9494f3] relative overflow-hidden">
     
          <div className="w-full md:w-1/2">
            <div className="w-[750px] h-[750px]  overflow-hidden "> 
              <Splide
                options={{
            
                  pagination: true,
                  arrows: false,
                  autoplay: true,
                  interval: 8000,
                  pauseOnHover: false,
                  rewind: true,
                  loop:true,
                }}
                onMove={handleSlideChange}
              >
                {features.map((feature, index) => (
                  <SplideSlide
                    key={`online-psychology-${index}`}
                    id={`slide-online-psychology-${index}`}
                  >
                    <div
                      className="w-[500px] h-[500px] "
                      style={{
                        backgroundImage: `url(${features[currentPhrase].background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />   

                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
     
  );
}

