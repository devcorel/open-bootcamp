export function suma(a, b) {
   return a + b;
}

export function multiplica(a, b) {
   return a * b;
}

export function eleva(a, b) {
   return a ** b;
}

export function factorial(a) {
   let factorial = 1;
   for (let i = a; i > 0; i--) {
      factorial *= i;
   }
   return factorial;
}

export const nombre = 'matemáticas';
