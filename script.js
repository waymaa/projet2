
//String Manipulation Functions:

function inverserChaine(chaine) {
  return chaine.split('').reverse().join('');
}

// Exemple
console.log(inverserChaine("bonjour")); // "ruojnob"


function compterCaracteres(chaine) {
  return chaine.length;
}

// Exemple
console.log(compterCaracteres("hello world")); // 11



function majusculePremiereLettre(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase())
    .join(' ');
}

// Exemple
console.log(majusculePremiereLettre("bonjour tout le monde")); // "Bonjour Tout Le Monde"


//Array Functions:

//  Sum of an Array
function findMax(array) {
  return Math.max(...array);
}

function findMin(array) {
  return Math.min(...array);
}

// Example
const numbers = [12, 5, 8, 42, -3, 19];
console.log(findMax(numbers)); // 42
console.log(findMin(numbers)); // -3

 // Sum of an Array
function sumArray(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

// Example
console.log(sumArray([1, 2, 3, 4])); // 10

// Filter an Array Based on a Condition


function filterArray(array, condition) {
  return array.filter(condition);
}

// Example: filter even numbers
const evenNumbers = filterArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Mathematical Functions:

// Factorial (Factorielle)

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Exemple
console.log(factorial(5)); // 120

//Prime Number Check (Test de primalité)

function isPrime(i) {
  if (i < 2) return false;
  for (let c = 2; c <= Math.sqrt(i); c++) {
    if (i % c === 0) return false;
  }
  return true;
}

// Exemple
console.log(isPrime(7));  // true
console.log(isPrime(100)); // false


//Fibonacci Sequence Generator (Suite de Fibonacci)

function fibonacciSeqRecursive(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fib = fibonacciSeqRecursive(n - 1);
  return fib.concat(fib[fib.length - 1] + fib[fib.length - 2]);
}

// Exemple
console.log(fibonacciSeqRecursive(6)); // [0,1,1,2,3,5]