/**
 * Ejemplo para entender el uso d props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
   return (
      <div>
         <h1>Ejemplo de CHILDREN PROPS</h1>
         <h2>Nombre: {props.nombre}</h2>

         {/* props.children pintará por defecto aquello que se encuentre
         dentro de las etiquetas de apertura y cierre de éste componente
         deste el componente de orden superior
          */}

         {props.children}
      </div>
   );
};

export default Ejemplo4;
