import React from "react";
import ContactForm from "@/components/ContacForm";

const ContactUs = () => {
  return (
    <div
      className="h-100vh flex flex-col text-left  text-white px-4 md:px-16"
      style={{
        backgroundImage: `linear-gradient(#634AE27A, #634AE27A), url('images/ServiceBackground2.webp')`,
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col pl-24 h-full  py-12">
        <h1 className="text-xl 2xl:text-7xl xl:text-7xl md:text-5xl sm:text-3xl font-bold ">
          <p>¡La solución que buscas,</p> empieza aquí!
        </h1>
        <h3 className=" my-4 mx-5 2xl:text-4xl xl:text-2xl md:text-xl sm:text-lg font-bold  ">
        Contáctanos</h3>
       <ContactForm />
          
      </div>
    </div>
  );
};

export default ContactUs;