var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const currentSalary = Number(lines[0]);
const arr = [2000.01, 1200.01, 800.01, 400.01, 400.0];
const raises = {
  0: 0.04,
  1: 0.07,
  2: 0.1,
  3: 0.12,
  4: 0.15,
};
let percent;
for (let i = 0; i < arr.length; i++) {
  if (currentSalary >= arr[i]) {
    percent = raises[i];
    break;
  }
}

const newSalary = currentSalary + currentSalary * percent;
const readjust = newSalary - currentSalary;

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${readjust.toFixed(2)}`);
console.log(`Em percentual: ${(percent * 100).toFixed(0)} %`);
