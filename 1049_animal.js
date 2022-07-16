const lines = ['invertebrado', 'anelideo', 'onivoro'];
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const entrada1 = lines[0];
const entrada2 = lines[1];
const entrada3 = lines[2];

const animais = {
  vertebrado: {
    ave: {
      carnivoro: 'aguia',
      onivoro: 'pomba',
    },

    mamifero: {
      onivoro: 'homem',
      herbivoro: 'vaca',
    },
  },

  invertebrado: {
    inseto: {
      hematofago: 'pulga',
      herbivoro: 'lagarta',
    },

    anelideo: {
      hematogo: 'sanguessuga',
      onivoro: 'minhoca',
    },
  },
};

console.log(animais[entrada1][entrada2][entrada3]);
