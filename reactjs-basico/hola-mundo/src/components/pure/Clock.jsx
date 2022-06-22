import React, { useEffect, useState } from 'react';

import '../../styles/clock.scss';

export const Clock = () => {
   const [stopClock, setStopClock] = useState(false);

   return (
      <>
         {stopClock ? <>Reloj detenido </> : <ClockTimmer />}
         <button onClick={() => setStopClock(!stopClock)}>
            {stopClock ? 'Start' : 'Stop'}
         </button>
      </>
   );
};

const ClockTimmer = () => {
   const [data, setData] = useState({
      fecha: new Date(),
      edad: 0,
      nombre: 'Ernesto',
      apellidos: 'Gonzalez Mendez',
   });

   useEffect(() => {
      const intervalo = setInterval(() => {
         setData((prevState) => ({
            ...prevState,
            fecha: new Date(),
            edad: prevState.edad + 1,
         }));
      }, 1000);

      return () => {
         console.log('Clock stopped!');
         clearInterval(intervalo);
      };
   }, []);

   return (
      <div>
         <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
         <h3>
            {data.nombre} {data.apellidos}
         </h3>
         <h1>Edad: {data.edad}</h1>
      </div>
   );
};
