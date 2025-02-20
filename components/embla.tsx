"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const carrouseldata = [
  {
    tittle: "Terapia para niños",
    edad: "De 3 a 12 años de edad",
    motto:
      "¿Por qué no darle a tu pequeño la oportunidad de crecer emocionalmente con la ayuda de un profesional?",
    background: "/CarruselInferiorMain/azul.webp",
    description:
      "  Ayuda a tu hijo a superar sus desafíos emocionales con nuestra terapia infantil. Apoyamos a los niños a comprender y manejar sus emociones, mejorando su bienestar de manera accesible y con la participación activa de los padres en cada sesión online.  ",
    tittleIcon:
      "En Contigo Voy, puedes encontrar a un psicólogo infantil online para ayudar a tu hijo a enfrentar una variedad de temas.",
    iconos: [
      {
        id: 1,
        text: "Dificultades en el desarrollo del lenguaje",
        iconImage: "/Services/niños/lenguaje.webp",
      },
      {
        id: 2,
        text: "Habilidades sociales",
        iconImage: "/Services/niños/sociales.webp",
      },
      {
        id: 3,
        text: "Manejo de la fustración",
        iconImage: "/Services/niños/frustracion.webp",
      },
      {
        id: 4,
        text: "Vinculo de apego",
        iconImage: "/Services/niños/apego.webp",
      },
      {
        id: 5,
        text: "Dificultades académicas",
        iconImage: "/Services/niños/academicas.webp",
      },
    ],
    tittlecards: "Beneficios de la terapia infantil",
    cards: [
      {
        id: 1,
        text: "Detecta y modifica patrones que afectan su desarrollo, promoviendo un crecimiento equilibrado.",
        icon: "/Services/niños/therapy/cerebro.webp",
      },
      {
        id: 2,
        text: "Mejora la interacción, promoviendo respeto, colaboración y relaciones positivas.",
        icon: "/Services/niños/therapy/charla.webp",
      },
      {
        id: 3,
        text: "Ayuda a los niños a desarrollar una imagen positiva, promoviendo su felicidad y confianza.",
        icon: "/Services/niños/therapy/positiva.webp",
      },
      {
        id: 4,
        text: "Enseña a los niños a manejar sus emociones y enfrentar desafíos con resiliencia.",
        icon: "/Services/niños/therapy/rompe.webp",
      },
      {
        id: 5,
        text: "Proporciona herramientas personalizadas para enfrentar dificultades y adaptarse asertivamente.",
        icon: "/Services/niños/therapy/herramientas.webp",
      },
    ],
    textfooter:
      "¿Tu pequeño enfrenta desafíos como falta de atención?¿Tiene una conducta agresiva?",
  },
  {
    tittle: "Terapia para adolescentes",
    edad: "De 13 a 18 años de edad",
    motto:
      "¿Listo para dar el primer paso hacia el bienestar emocional de tu hijo?",
    background: "/CarruselInferiorMain/abuela.webp",
    description:
      "Ayuda a tu hijo a sentirse escuchado y comprendido en esta etapa tan crucial de su desarrollo con nuestra terapia integral. Apoyamos a los adolescentes a manejar sus emociones, fortalecer su autoestima y desarrollar su habilidades sociales en un espacio seguro.",
    tittleIcon:
      "Prioriza su bienestar emocional. A través de la terapia para adolescentes, ayudamos a jóvenes a enfrentar desafíos.",
    iconos: [
      {
        id: 1,
        text: "Manejo de emociones",
        iconImage: "/Services/teen/emociones.webp",
      },
      {
        id: 2,
        text: "Estrés académico",
        iconImage: "/Services/teen/estres.webp",
      },
      {
        id: 3,
        text: "Fortalecimiento del autoestima",
        iconImage: "/Services/teen/autoestima.webp",
      },
      {
        id: 4,
        text: "Habilidades sociales",
        iconImage: "/Services/teen/sociales.webp",
      },
      {
        id: 5,
        text: "Orientación vocacional",
        iconImage: "/Services/teen/vocacional.webp",
      },
    ],
    tittlecards: "Beneficios de la terapia para adolescentes",
    cards: [
      {
        id: 1,
        text: "Ayuda a manejar la frustración y transformar emociones difíciles en acciones positivas.",
        icon: "/Services/teen/therapy/frustraciones.webp",
      },
      {
        id: 2,
        text: "Fomenta un equilibrio saludable entre sus responsabilidades y su bienestar emocional",
        icon: "/Services/teen/therapy/equilibrio.webp",
      },
      {
        id: 3,
        text: "Mejora las habilidades para comunicarse y relacionarse con los demás.",
        icon: "/Services/teen/therapy/comunicacion.webp",
      },
      {
        id: 4,
        text: "Les brinda herramientas para enfrentar decisiones importantes con seguridad.",
        icon: "/Services/teen/therapy/seguridad.webp",
      },
      {
        id: 5,
        text: "Impulsa su autoestima,ayudándoles a construir una imagen positiva de sí mismos.",
        icon: "/Services/teen/therapy/construir.webp",
      },
    ],
    textfooter:
      "Cada sesión es una oportunidad para que tu hijo explore,crezca y enfrente sus desafíos con seguridad y confianza.",
  },
  {
    tittle: "Terapia familiar",
    edad: "Para todos los miembros",
    motto:
      "¿Sientes que los conflictos familiares están afectando el bienestar de tu hogar?",
    background: "/CarruselInferiorMain/brazos.webp",
    description:
      "Estamos aquí para ayudarte a sanar y fortalecer los lazos entre ustedes. En la terapia familiar,encontrarás un espacio para comunicarse, comprenderse mejor y resolver las dificultades que afectan a tu familia. Juntos podemos restaurar el equilibrio y la armonía.",
    tittleIcon:
      "¡Recupera la armonía en tu hogar! A través de la terapia familiar,te ayudamos a enfrentar juntos los desafíos.",
    iconos: [
      {
        id: 1,
        text: "Conflictos familiares",
        iconImage: "/Services/family/familiares.webp",
      },
      {
        id: 2,
        text: "Problemas de comunicación",
        iconImage: "/Services/family/problemascomu.webp",
      },
      {
        id: 3,
        text: "Problemas de divorcio o separación",
        iconImage: "/Services/family/divorcio.webp",
      },
      {
        id: 4,
        text: "Relaciones tensas",
        iconImage: "/Services/family/tensas.webp",
      },
      {
        id: 5,
        text: "Desacuerdos en la gestión del hogar",
        iconImage: "/Services/family/desacuerdo.webp",
      },
    ],
    tittlecards: "Beneficios de la terapia familiar",
    cards: [
      {
        id: 1,
        text: "Fomenta una comunicación más abierta y respetuosa.",
        icon: "/Services/family/therapy/respeto.webp",
      },
      {
        id: 2,
        text: "Ayuda a resolver conflictos de manera constructiva.",
        icon: "/Services/family/therapy/resolver.webp",
      },
      {
        id: 3,
        text: "Fortalece los lazos afectivos entre los miembros de la familia.",
        icon: "/Services/family/therapy/lazos.webp",
      },
      {
        id: 4,
        text: "Promueve un ambiente emocionalmente seguro y saludable.",
        icon: "/Services/family/therapy/ambiente.webp",
      },
      {
        id: 5,
        text: "Facilita la adaptación a cambios importantes en la vida familiar.",
        icon: "/Services/family/therapy/adaptacion.webp",
      },
    ],
    textfooter:
      "¡Es el momento de dar el primer paso hacia un hogar más unido y saludable!",
  },
  {
    tittle: "Terapia para adultos",
    edad: "de 19 años a más",
    motto:
      "¿Sientes que las preocupaciones del día a día están afectando tu bienestar emocional?",
    background: "/CarruselInferiorMain/cruzado.webp",
    description:
      "Estamos aquí para ayudarte a recuperar el equilibrio. A través de la terapia para adultos, encontrarás un espacio para comprenderte mejor, gestionar las situaciones difíciles y fortalecer tu bienestar emocional.¡Es el momento de dar el primer paso hacia una vida más equilibrada y plena!",
    tittleIcon:
      "¡Recupera tu bienestar emocional! A través de la terapia para adultos,te ayudamos a enfrentar desafíos.",
    iconos: [
      {
        id: 1,
        text: "Estrés",
        iconImage: "/Services/adult/estres.webp",
      },
      {
        id: 2,
        text: "Desafíos laborales",
        iconImage: "/Services/adult/laborales.webp",
      },
      {
        id: 3,
        text: "Dificultades emocionales",
        iconImage: "/Services/adult/dificultades.webp",
      },
      {
        id: 4,
        text: "Proceso de duelo",
        iconImage: "/Services/adult/duelo.webp",
      },
      {
        id: 5,
        text: "Crecimiento personal",
        iconImage: "/Services/adult/personal.webp",
      },
    ],
    tittlecards: "Beneficios de la terapia para adultos",
    cards: [
      {
        id: 1,
        text: "Aprenderás a manejar el estrés y la ansiedad para recuperar tu equilibrio emocional.",
        icon: "/Services/adult/therapy/manejar.webp",
      },
      {
        id: 2,
        text: "Comprenderás y gestionarás tus emociones, tomando decisiones más conscientes.",
        icon: "/Services/adult/therapy/comprender.webp",
      },
      {
        id: 3,
        text: "Fortalecerás tu confianza al trabajar en tus habilidades y superar límites.",
        icon: "/Services/adult/therapy/fortalecer.webp",
      },
      {
        id: 4,
        text: "Te enseñaremos cómo enfrentar los desafíos de la vida diaria de manera saludable y resiliente.",
        icon: "/Services/adult/therapy/enfrentar.webp",
      },
      {
        id: 5,
        text: "Te ayudará a gestionar conflictos emocionales y mejorar tus relaciones personales y laborales.",
        icon: "/Services/adult/therapy/gestion.webp",
      },
    ],
    textfooter:
      "Estamos aquí para acompañarte y ayudarte a transformar tus retos en oportunidades de crecimiento personal.",
  },
  {
    tittle: "Terapia de pareja",
    edad: "Para parejas de toda edad",
    motto: "¿Tu relación está en crisis? ¿Buscas fortalecer el vínculo?",
    background: "/CarruselInferiorMain/abuela.webp",
    description:
      "Todas las parejas enfrentan desafíos y buscar ayuda es un paso hacia una relación más satisfactoria. En Contigo Voy, pueden iniciar una terapia de pareja online diseñada para cuidar su bienestar de forma accesible y práctica.",
    tittleIcon:
      "En Contigo Voy puedes encontrar un psicólogo de parejas online para abordar una gran variedad de temas.",
    iconos: [
      {
        id: 1,
        text: "Sexualidad",
        iconImage: "/Services/couple/sexualidad.webp",
      },
      {
        id: 2,
        text: "Problemas de comunicación",
        iconImage: "/Services/couple/problemascomuni.webp",
      },
      {
        id: 3,
        text: "Celos",
        iconImage: "/Services/couple/celos.webp",
      },
      {
        id: 4,
        text: "Familia",
        iconImage: "/Services/couple/familia.webp",
      },
      {
        id: 5,
        text: "Dependencia emocional",
        iconImage: "/Services/couple/dependencia.webp",
      },
    ],
    tittlecards: "Beneficios de la terapia de parejas",
    cards: [
      {
        id: 1,
        text: "Aprenderán a comunicarse y expresar sus emociones de manera clara y efectiva, fortaleciendo el entendimiento mutuo.",
        icon: "/Services/couple/therapy/comunicarse.webp",
      },
      {
        id: 2,
        text: "Incrementará la satisfacción y el bienestar, no solo en la relación, sino también a nivel personal.",
        icon: "/Services/couple/therapy/satisfaccion.webp",
      },
      {
        id: 3,
        text: "Desarrollarán una empatía más profunda para comprender y atender mejor las necesidades de su pareja.",
        icon: "/Services/couple/therapy/empatia.webp",
      },
      {
        id: 4,
        text: "Mejorarán su empatía, facilitando el respeto hacia sus diferencias y promoviendo la armonía.",
        icon: "/Services/couple/therapy/armonia.webp",
      },
      {
        id: 5,
        text: "Construirán su mejor versión individual para crecer y avanzar juntos como pareja.",
        icon: "/Services/couple/therapy/avanza.webp",
      },
    ],
    textfooter: "¿Listos para fortalecer su relación y crecer juntos?",
  },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [backgroundImage, setBackgroundImage] = useState(
    carrouseldata[0].background
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        setBackgroundImage(carrouseldata[selectedIndex].background);
      });
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {carrouseldata.map((item, index) => (
          <div className="embla__slide" key={index}>
            <div className="flex justify-between mx-6 pb-8 font-lexend items-center ">
              <p className="text-xl font-bold pl-[71px]">{item.tittle}</p>
              <div className="pr-[80px]">{item.edad}</div>
            </div>
            <div
              className="h-[578px] bg-cover  flex items-center  bg-center pl-[79px]"
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <p className="w-[661px] text-left h-[230px] font-lexend font-bold text-[40px] leading-[54px]">
                {item.motto}
              </p>
            </div>
            <div className="pt-12 flex justify-center">
              <div className="max-w-[829px] h-[89px] font-lexend font-normal text-[16px] leading-[28px] text-center">
                {item.description}
              </div>
            </div>
            <div className="pt-24 flex justify-center">
              <div className="w-[937px] h-[74px] font-lexend font-bold text-[24px] leading-[33px] text-center">
                {item.tittleIcon}
              </div>
            </div>
            <div className="flex justify-center py-8">
              <div className="flex pt-14 flex-col items-center gap-y-20">
                {/* Primera fila - 3 iconos */}
                <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-[229px]">
                  {item.iconos?.slice(0, 3).map((icono) => (
                    <div
                      key={icono.id}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="rounded-full p-1 bg-[#9494F3]">
                        <div className="rounded-full bg-[#9494F3] p-4">
                          <div className="w-32 h-32 flex items-center justify-center">
                            <img
                              src={icono.iconImage}
                              alt={icono.text}
                              className="w-20 h-20 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-center pt-3 text-[16px] font-lexend font-semibold leading-[20px] max-w-[200px]">
                        {icono.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-[229px]">
                  {item.iconos?.slice(3, 5).map((icono) => (
                    <div
                      key={icono.id}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="rounded-full p-1 bg-[#9494F3]">
                        <div className="rounded-full bg-[#9494F3] p-4">
                          <div className="w-32 h-32 flex items-center justify-center">
                            <img
                              src={icono.iconImage}
                              alt={icono.text}
                              className="w-20 h-20 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-center pt-3 text-[16px] font-lexend font-semibold leading-[20px] max-w-[120px]">
                        {icono.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-24 flex justify-center px-4 md:px-0">
              <div className="w-full md:w-[937px] h-auto md:h-[74px] font-lexend font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[33px] text-center">
                {item.tittlecards}
              </div>
            </div>
            <div className="flex justify-center py-8 px-4 md:px-8">
              <div className="flex flex-col items-center gap-y-12">
                <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8">
                  {item.cards?.slice(0, 3).map((card) => (
                    <div
                      key={card.id}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="rounded-3xl p-1 bg-[#634AE2]">
                        <div className="rounded-3xl bg-[#634AE2] p-4">
                          <div className="w-full md:w-[360px] h-auto md:h-[236px] flex flex-col bg-[#634AE2] rounded-lg p-4">
                            <div className="flex justify-center items-center">
                              <img
                                src={card.icon}
                                alt={card.text}
                                className="w-[140px] md:w-[183.27px] h-[68px] md:h-[88px] object-contain"
                              />
                            </div>
                            <div className="flex-grow flex items-center justify-center px-4">
                              <p className="text-center text-[14px] md:text-[16px] text-white font-lexend font-semibold leading-[20px] md:leading-[24px] w-full">
                                {card.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8">
                  {item.cards?.slice(3, 5).map((card) => (
                    <div
                      key={card.id}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="rounded-3xl p-1 bg-[#634AE2]">
                        <div className="rounded-3xl bg-[#634AE2] p-4">
                          <div className="w-full md:w-[360px] h-auto md:h-[236px] flex flex-col bg-[#634AE2] rounded-lg p-4">
                            <div className="flex justify-center items-center">
                              <img
                                src={card.icon}
                                alt={card.text}
                                className="w-[140px] md:w-[183.27px] h-[68px] md:h-[88px] object-contain"
                              />
                            </div>
                            <div className="flex-grow flex items-center justify-center px-4">
                              <p className="text-center text-[14px] md:text-[16px] text-white font-lexend font-semibold leading-[20px] md:leading-[24px] w-full">
                                {card.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-24">
              <div className="h-36 bg-[#DEDEFF] flex items-center justify-center px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1100px] space-y-4 md:space-y-0">
                  {/* Texto del footer PRUEBITA */}
                  <p className="text-center md:text-left max-w-[652px]">
                    {item.textfooter}
                  </p>
                  <button className="w-full md:w-[359px] h-[70px] bg-[#634AE2] rounded-[34px] text-white font-lexend font-normal text-[18px] md:text-[24px] leading-[33px] text-center">
                    Reserva tu cita gratuita y mas
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
