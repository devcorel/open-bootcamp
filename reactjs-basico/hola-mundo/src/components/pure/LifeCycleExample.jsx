/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida de React.
 */

import React from 'react';

import PropTypes from 'prop-types';

class LifeCycleExample extends React.Component {
   constructor(props) {
      super(props);
      console.log('Cuando se instancia el componente');
   }

   // Deprecated
   // componentWillMount() {

   // }

   componentDidMount() {
      console.log('Cuando el componente se monta');
   }
}
