import React, { useRef, useState } from 'react';

export const EjercicioContactos = () => {
   const [contactos, setContactos] = useState(getContactos());

   console.log(contactos);
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            width: '100%',
            height: '300px',
            overflowY: 'scroll',
         }}
      >
         <Contactos contactos={contactos} setContactos={setContactos} />
         <FormContact setContactos={setContactos} />
      </div>
   );
};

function Contactos({ contactos, setContactos }) {
   const handleDelete = (id) => {
      setContactos(() => {
         return contactos.filter((c) => c.id !== id);
      });
   };

   return (
      <table>
         <thead>
            <tr>
               <th
                  style={{
                     padding: '5px',
                     width: '50px',
                  }}
               >
                  NOMBRE
               </th>
               <th
                  style={{
                     padding: '5px',
                     width: '200px',
                  }}
               >
                  EMAIL
               </th>
               <th
                  style={{
                     padding: '5px',
                  }}
               >
                  ACCIONES
               </th>
            </tr>
         </thead>
         <tbody>
            {contactos.map((contacto, index) => (
               <Contacto
                  key={index}
                  contacto={contacto}
                  onDelete={handleDelete}
               />
            ))}
         </tbody>
      </table>
   );
}

function Contacto({ contacto, onDelete }) {
   return (
      <tr>
         <td
            style={{
               padding: '5px',
            }}
         >
            {contacto.nombre}
         </td>
         <td
            style={{
               padding: '5px',
            }}
         >
            {contacto.email}
         </td>
         <td
            style={{
               padding: '5px',
            }}
         >
            <button onClick={() => onDelete(contacto.id)}>Borrar</button>
         </td>
      </tr>
   );
}

function FormContact({ setContactos }) {
   const nameRef = useRef('');
   const emailRef = useRef('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setContactos((prevState) => [
         ...prevState,
         {
            id: prevState[prevState.length - 1].id + 1,
            nombre: nameRef.current.value,
            email: emailRef.current.value,
         },
      ]);
   };

   return (
      <div style={{ padding: '10px' }}>
         <h3>Crear contacto:</h3>
         <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" placeholder="Nombre" />
            <br />
            <br />
            <input
               ref={emailRef}
               type="email"
               name="email"
               placeholder="Email"
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Crear</button>
         </form>
      </div>
   );
}

function getContactos() {
   return [
      { id: 1, nombre: 'javier', email: 'javer@mail.com' },
      { id: 2, nombre: 'israel', email: 'israel@mail.com' },
      { id: 3, nombre: 'ernesto', email: 'ernesto@mail.com' },
      { id: 4, nombre: 'erick', email: 'erick@mail.com' },
      { id: 5, nombre: 'luisa', email: 'luisa@mail.com' },
   ];
}
