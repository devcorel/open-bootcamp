/**
 *  Ejemplo de uso del Hook useState
 *
 *  Crear un componente de tipo función y acceeder a su estado
 *  privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

export default function Ejemplo1() {
   // Valor inicial para un contador
   const valorInicial = 0;

   // Valor inicial para una persona
   const personaInicial = {
      nombre: 'Juan',
      email: 'juan@mail.com',
   };

   /**
    *  Queremos que el VALORINICIAL y PERONSAINICIAL sean
    *  parte del estado del componente para así poder gestionar su cambio
    *  y que éste se vea reflejado en la vista del componente.
    *
    *  const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
    */

   const [contador, setContador] = useState(valorInicial);
   const [persona, setPersona] = useState(personaInicial);

   /**
    * Función para actualizar el estado privado que contiene el contador
    */
   function incrementarContador() {
      // ? funcionParaCambiar(valorNuevo)
      setContador(contador + 1);
   }

   /**
    * Función para actualizar el estado privado que contiene la persona
    */
   function actualizarPersona(nombre, email) {
      setPersona({
         nombre,
         email,
      });
   }

   return (
      <div>
         <h1>Ejemplo de useState()</h1>
         <h2>Contador: {contador}</h2>
         <h2>
            Persona: {persona.nombre}, {persona.email}
         </h2>
         {/* Bloque de botones para actualizar el estado del componente */}
         <button onClick={incrementarContador}>Incrementar contador</button>
         <button onClick={() => actualizarPersona('Emilio', 'emilio@mail.com')}>
            Actualizar Persona{' '}
         </button>
      </div>
   );
}
