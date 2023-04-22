// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');

function bubbleSort(vetor: number[], tamanho: number) {
  let i: number = 0;
  let j: number = 0;
  let aux: number = 0;
  for (i = 1; i < (tamanho - 1); i++) {
    for (j = 0; j <= (tamanho - 1 - i); j++) {
      if (vetor[j] >= vetor[j + 1]) {
        aux = vetor[j + 1];
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
      }
    }
  }
  console.log(vetor);
}

let vetDados: number[] = [
  1, 3, 2, 6, 10, 23, 4, 5, 12, 9, 17, 19, 15, 13, 22, 21, 20, 18, 16, 11, 14,
  7, 8,
];
const t: number = vetDados.length;
console.log(t);
//bubbleSort([1, 3, 2, 6, 10, 23, 4, 5], 8);
bubbleSort(vetDados, t);
