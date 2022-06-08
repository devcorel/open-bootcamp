const getAutor = () => {
   return 'Miguel de Cervantes';
};

// Exportaciones por nomenclatura:
export const libro = 'Don Quijote de la Mancha';
export const libro2 = 'Kafka y La Muñeca Viajera';

// Exportación por defecto:
// NOTA: Cada archivo solo puede tener "una exportación por defecto"
export default getAutor;
