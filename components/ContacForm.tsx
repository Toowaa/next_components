"use client";
import { Button, Form, Input } from "@nextui-org/react";
import React from "react";


export default function App() {
  const [action, setAction] = React.useState<string | null>(null);
  return (
    <Form
      className="w-full max-w-sm flex flex-col gap-4 my-[90px] bg-[#B8B8FF] rounded-2xl p-8"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      
      <Input
        isRequired
        errorMessage="Por favor ingrese un nombre válido"
        name="Nombres"
        placeholder="Nombres"
        type="text"
        
      />
      <Input

        isRequired
        errorMessage="Por favor ingrese un apellido válido"
        name="Apellidos"
        placeholder="Apellidos"
        type="text"
      />
      <Input
        isRequired
        errorMessage="Por favor ingrese un número de teléfono válido"
        name="phone"
        placeholder="Celular"
        type="tel"
      />

      <Input
        isRequired
        errorMessage="Ingrese un correo electrónico válido"
        name="email"
        placeholder="Correo"
        type="email"
      />
      <Input name="message" placeholder="Comentario" type="textarea" />
      <div className="w-full flex justify-center">
        <Button
          style={{ backgroundColor: "#634AE3", color: "white" }}
          type="submit"
        >
          Enviar
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}
