const logger = require('./logger');

function getFirsArrayElement(array) {
   if (typeof array !== 'undefined') {
      // ... más validaciones
      return array[0];
   }

   throw new Error('El array no está definido');
}

let array = [1, 2, 3];

try {
   logger.info('Get first element of array: ' + array);
   const firstElement = getFirsArrayElement();
   logger.debug(firstElement);
} catch (error) {
   logger.error('Error: ' + error);
}

logger.info('Fin del programa');
