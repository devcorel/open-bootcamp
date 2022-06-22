import React, { useRef, useState } from 'react';

export const EjercicioContactos = () => {
   const [contactos, setContactos] = useState(getContactos());

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

   const handleChangeStatus = (id) => {
      let newContactos = contactos.map((contacto) => {
         if (contacto.id === id) {
            contacto.estado = !contacto.estado;
         }
         return contacto;
      });

      setContactos(newContactos);
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
                     width: '200px',
                  }}
               >
                  ESTADO
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
                  onChangeStatus={handleChangeStatus}
                  onDelete={handleDelete}
               />
            ))}
         </tbody>
      </table>
   );
}

function Contacto({ contacto, onChangeStatus, onDelete }) {
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
               color: contacto.estado ? 'green' : 'red',
            }}
         >
            {contacto.estado ? 'ONLINE' : 'OFFLINE'}
         </td>
         <td
            style={{
               padding: '5px',
               display: 'flex',
               gap: '8px',
            }}
         >
            <button onClick={() => onChangeStatus(contacto.id)}>
               {contacto.estado ? 'Desconectar' : 'Conectar'}
            </button>
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
            estado: true,
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
      { id: 1, nombre: 'javier', email: 'javer@mail.com', estado: true },
      {
         id: 2,
         nombre: 'israel',
         email: 'israel@mail.com',
         estado: false,
      },
      {
         id: 3,
         nombre: 'ernesto',
         email: 'ernesto@mail.com',
         estado: false,
      },
      { id: 4, nombre: 'erick', email: 'erick@mail.com', estado: true },
      {
         id: 5,
         nombre: 'luisa',
         email: 'luisa@mail.com',
         estado: false,
      },
   ];
}
