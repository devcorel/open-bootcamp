import React from 'react';
import { Contacto as ContactoModel } from '../../models/contacto.class';

import Contacto from '../pure/Contacto';

export const ContactoList = () => {
   const contactos = [
      new ContactoModel('Juan', 'Perez', 'jperez@mail.com', true),
      new ContactoModel('Pedro', 'Perez', 'pperez@mail.com', false),
   ];

   return (
      <div>
         <Contacto contacto={contactos[0]} />
         <Contacto contacto={contactos[1]} />
      </div>
   );
};
