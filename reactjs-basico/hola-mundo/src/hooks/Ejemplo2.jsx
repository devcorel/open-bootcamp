/**
 * Ejemplo de uso de:
 *    -useState()
 *    -useRef()
 *    -useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
   // Vamos a crar dos contadores distinos
   // cada uno en un estado diferente
   const [contador1, setContador1] = useState(0);
   const [contador2, setContador2] = useState(0);

   // Creamos una referencia con useRef() para asociar una varaible
   // con un elemento del DOM del componente (vista HTML)
   const miRef = useRef();

   // Creamos una función para actualizar el contador1 y otra para el contador2
   function incrementar1() {
      setContador1(contador1 + 1);
   }

   function incrementar2() {
      setContador2(contador2 + 1);
   }

   /**
    * Trabajando con useEffect()
    *
    * ? Caso 1: Ejecutar SIEMPRE un snippet de código
    * Cada vez que haya un cambio en el estado del componente
    * se ejecuta aquello que esté dentro del useEffect()
    */
   // useEffect(() => {
   //    console.log('Cambio en el estado del componente');
   //    console.log('Mostrando Referencia a elemento del DOM:', miRef.current);
   // });

   /**
    * ? Caso 2: Ejecutar SOLO cuando CAMBIE CONTADOR1
    * Cada vez que CAMBIE CONTADOR1 se ejecuta aquello que esté dentro del useEffect()
    * Si no se indica el segundo parámetro, se ejecuta SOLO cuando el componente se monta
    * En caso de que cambie el contador2, no habrá ejecución
    */

   // useEffect(() => {
   //    console.log('Cambio en el estado del CONTADOR1');
   //    console.log('Mostrando Referencia a elemento del DOM:', miRef.current);
   // }, [contador1]);

   /**
    * ? Caso 3: Ejecutar SOLO cuando CAMBIE CONTADOR1 o CONTADOR2
    * Cada vez que CAMBIE CONTADOR1 se ejecuta aquello que esté dentro del useEffect()
    * Cada vez que CAMBIE CONTADOR2 se ejecuta aquello que esté dentro del useEffect()

    */

   useEffect(() => {
      console.log('Cambio en el estado del CONTADOR1');
      console.log('Mostrando Referencia a elemento del DOM:', miRef.current);
   }, [contador1, contador2]);

   return (
      <div>
         <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
         <h2>Contador 1: {contador1}</h2>
         <h2>Contador 2: {contador2}</h2>
         {/* Elemento referenciado */}
         <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

         {/* Botones p ara cambiar los contadores */}
         <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
         </div>
      </div>
   );
};

export default Ejemplo2;
