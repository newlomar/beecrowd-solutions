var lines = ['11 39 19 15'];

const horaInicio = Number(lines[0].split(' ')[0]);
const minutoInicio = Number(lines[0].split(' ')[1]);
const horaFim = Number(lines[0].split(' ')[2]);
const minutoFim = Number(lines[0].split(' ')[3]);
let resultHora = horaFim - horaInicio;
let resultMinuto = minutoFim - minutoInicio;

if (resultHora > 0 && minutoFim < minutoInicio) {
  resultHora--;
}

if (resultHora === 0 && resultMinuto < 0) {
  resultHora += 23;
}

if (resultHora === 1 && resultMinuto < 0) {
  resultHora = 0;
}

if (resultHora === 0 && resultMinuto === 0) {
  resultHora = 24;
}

if (resultHora < 0 && minutoFim < minutoInicio) {
  resultHora += 23;
}

if (resultHora < 0) {
  resultHora += 24;
}

if (resultMinuto < 0) {
  resultMinuto += 60;
}

if (resultHora === 24 && resultMinuto > 0) {
  console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
} else if (resultHora === 24 && resultMinuto < 1) {
  console.log(`O JOGO DUROU 0 HORA(S) E 1 MINUTO(S)`);
} else {
  console.log(`O JOGO DUROU ${resultHora} HORA(S) E ${resultMinuto} MINUTO(S)`);
}
