import React from 'react';
import PropTypes from 'prop-types';
import { Contacto as ContactoModel } from '../../models/contacto.class';

const Contacto = ({ contacto }) => {
   return (
      <div>
         <h2>
            Nombre: {contacto.name} {contacto.lastName}
         </h2>
         <h3>Email: {contacto.email}</h3>
         <h4>
            Estado:{' '}
            {contacto.isConnected ? 'Contacto En Línea' : 'No Disponible'}
         </h4>
      </div>
   );
};

Contacto.propTypes = {
   contacto: PropTypes.instanceOf(ContactoModel),
};

export default Contacto;
