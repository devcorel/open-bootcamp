import React, { useState } from 'react';

// Definiendo estilos en constante

// Estilos para usuario logueado:
const loggedStyle = {
   color: 'blue',
};

// Estilos para usuario no logueado:
const unloggedStyle = {
   color: 'tomato',
   fontWeight: 'bold',
};

const GreetingUser = (props) => <p>Hola , {props.name}!</p>;
const PleaseLoginText = () => <p>Please loggin</p>;

export const GreetingStyled = (props) => {
   const [logged, setLogged] = useState(false);

   return (
      <div style={logged ? loggedStyle : unloggedStyle}>
         {logged ? <GreetingUser name={props.name} /> : <PleaseLoginText />}

         <button onClick={() => setLogged(!logged)}>
            {logged ? 'Logout' : 'LogIn'}
         </button>
      </div>
   );
};
