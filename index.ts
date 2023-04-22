// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');

function geraTexto(arr: number[]): string {
  let texto: string = '';
  for (let i in arr) {
    texto += ' ' + arr[i];
  }
  return texto;
}

function bubbleSort(vetor: number[], tamanho: number) {
  let i: number = 0;
  let j: number = 0;
  let aux: number = 0;
  for (i = 1; i < tamanho - 1; i++) {
    for (j = 0; j <= tamanho - 1 - i; j++) {
      if (vetor[j] >= vetor[j + 1]) {
        aux = vetor[j + 1];
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
      }
    }
  }
  console.log('Bubbel Sort: ', geraTexto(vetor.slice()));
}

function insertionSort(vetor: number[], tamanho: number) {
  let i: number = 0;
  let j: number = 0;
  let pivot: number = 0;
  for (i = 1; i <= tamanho - 1; i++) {
    pivot = vetor[i];
    j = i - 1;
    while (j >= 0 && vetor[j] > pivot) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = pivot;
  }
  console.log('Insertion Sort: ', geraTexto(vetor.slice()));
}

function selectionSort(vetor: number[], tamanho: number) {
  let minpos: number = 0;
  let i: number = 0;
  let j: number = 0;
  let menorValor: number = 0;

  for (i = 0; i <= tamanho - 1; i++) {
    // percorre todos os elementos
    minpos = i;
    menorValor = vetor[i];
    for (j = i; tamanho - j; j++) {
      if (vetor[minpos] > vetor[j]) {
        minpos = j;
        menorValor = vetor[j];
      }
    }
    vetor[minpos] = vetor[i];
    vetor[i] = menorValor;
  }
  console.log('Selection Sort:', geraTexto(vetor.slice()));
}

//------------------------------------------------------

let vetDados: number[] = [
  1, 3, 2, 6, 10, 23, 4, 5, 12, 9, 17, 19, 15, 13, 22, 21, 20, 18, 16, 11, 14,
  7, 8,
];
const t: number = vetDados.length;
console.log(t);
console.log('Original: ', geraTexto(vetDados.slice()));
bubbleSort(vetDados.slice(), t);
insertionSort(vetDados.slice(), t);
selectionSort(vetDados.slice(), t);
