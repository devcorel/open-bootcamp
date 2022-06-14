import React, { useEffect, useState, useCallback } from 'react';

const EjemploMio = () => {
   const [createTimer, setCreateTimer] = useState(false);

   return (
      <div>
         <h1>Timer React</h1>
         <button onClick={() => setCreateTimer(!createTimer)}>
            {createTimer ? 'Borrar' : 'Crear'}
         </button>
         {createTimer && <TimerComponent />}
      </div>
   );
};

export default EjemploMio;

const TimerComponent = () => {
   console.log('TimmerComponent');
   const [timer, setTimer] = useState(0);

   const handleTimer = useCallback(() => {
      setTimer(timer + 1);
   }, [timer]);

   useEffect(() => {
      console.log('Solo me ejecuto UNA SOLA VEZ');

      handleTimer();
      return () => {
         console.log('limpieza');
      };
   }, []);

   return (
      <>
         <h3>Timer:</h3>
         <div>{timer}</div>
      </>
   );
};
