/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let salary = Number(lines[0]);

if (salary <= 2000.0) {
  console.log('Isento');
} else if (salary <= 3000) {
  let tax = (salary - 2000) * 0.08;
  console.log(`R$ ${tax.toFixed(2)}`);
} else if (salary <= 4500) {
  let tax1 = (salary - 3000) * 0.18;
  salary -= salary - 3000;
  let tax2 = (salary - 2000) * 0.08;
  console.log(`R$ ${(tax1 + tax2).toFixed(2)}`);
} else {
  let tax1 = (salary - 4500) * 0.28;
  let tax2 = 1500 * 0.18;
  let tax3 = 1000 * 0.08;
  console.log(`R$ ${(tax1 + tax2 + tax3).toFixed(2)}`);
}
