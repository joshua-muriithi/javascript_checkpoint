//-----STRING MANIPULATION FUNCTIONS-----

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}



// Count Characters
var str = "Joshua"
function countCharacters(str) {
    return str.length;
}
console.log(count)



// Capitalize Words
var sentence = "my name is joshua muriithi"
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


//------ARRAY FUNCTIONS-------

// Find Maximum 
const array1 = [34,21,67,89,107,65,36,17,]
function findMax(array) {
    return Math.max(...array);
}
console.log(findMax);


//Find Minimum
function findMin(array1) {
    return Math.min(...array1);
}
console.log(findMin);


// Sum of Array
var initialValue = 0;
const arraySum = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(arraySum)


//filter Array elements
function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}





// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}
