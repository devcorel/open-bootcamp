import chalk from 'chalk';
import { suma, multiplica } from './controller.js';

const sumaN = suma(4, 22);
console.log(chalk.magenta('Suma: ') + chalk.green(sumaN));

const multiplicaN = multiplica(4, 22);
console.log(chalk.magenta('Multiplica: ') + chalk.blue(multiplicaN));

console.log(chalk.green('Modulo Controller'));
