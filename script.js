// console.log(num);
// var num = 4;
// console.log(num);

// function square(number) {
//   var square = number * number;
//   return square;
// }
// console.log(square);
// var result = square(num);
// console.log(result);

// Write a JavaScript function to calculate the sum of two numbers.

const heading = document.createElement("h1");
heading.innerHTML = "handle html with js";

const root = document.getElementById("root");

root.appendChild(heading);

function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}
console.log(add(10, 50));

// Write a JavaScript program to find the maximum number in an array.

function findMaxNumber(array) {
  if (array.length === 0) {
    return console.log("Array is empty");
  } else {
    return Math.max(...array);
  }
}
let arrayNumber = [10, 20, 2, 30, 4, 5, 6, 7, 8];
let maxNumber = findMaxNumber(arrayNumber);
console.log(maxNumber);

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

let palindromeString = "ABCDCBA";

function isPalindrome(value) {
  let lowerStr = value.toLowerCase();
  let reversedStr = lowerStr.split("").reverse().join("");

  return lowerStr === reversedStr;
}

console.log(isPalindrome(palindromeString));

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// answer = here we are using the filter array method that is used to create the new array that passes a specific test .

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(value) {
  return value.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers(numbersArray));

// Write a JavaScript program to calculate the factorial of a given number.

function factorial(value) {
  if (value < 0) {
    return "factorial is not define for negative numbers";
  } else if (value === 0 || value === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= value; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(6));

// Write a JavaScript function to check if a given number is prime.

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));

// Higher order functions

const radius = [1, 6, 4, 2];

const calculateArea = function (radius) {
  return Math.PI * radius * radius;
};

const calculateCircumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculateDiameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, calculateArea));
console.log(calculate(radius, calculateCircumference));
console.log(calculate(radius, calculateDiameter));

// I have to learn hwo reduce method works in javascript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr = [5, 23, 2, 5, 76, 54, 34, 77, 32, 22];

const sumOfNumbers = function (number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
};
console.log(sumOfNumbers(numbers));

// how we can use the reduce function

const output = numbers.reduce(function (arr, curr) {
  arr = arr + curr;
  return arr;
}, 0);
console.log(output);

// find the maximum number from the array arr

const findMax = function (value) {
  let max = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] > max) {
      max = value[i];
    }
  }
  return max;
};
console.log(findMax(arr));

const findMaxValue = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(findMaxValue);

// find the full name of array list

const Emp = [
  { firstName: "John", lastName: "Doe", age: 24 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "David", lastName: "Johnson", age: 36 },
  { firstName: "Emily", lastName: "Williams", age: 28 },
  { firstName: "Michael", lastName: "Brown", age: 42 },
  { firstName: "Sarah", lastName: "Davis", age: 24 },
];

const fullName = Emp.map((value) => {
  return value.firstName + " " + value.lastName;
});
console.log(fullName);

const numberOfPropleWithSameAge = Emp.reduce((acc, curr) => {
  console.log(acc[curr.age], "vikram");
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(numberOfPropleWithSameAge);

// Print the name of that person having the age less than 30

const ageLessThan30 = Emp.filter((value) => {
  return value.age < 30;
}).map((value) => {
  return value.firstName;
});
console.log(ageLessThan30);

// Achive the same with the help of reduce
const output1 = Emp.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output1);

// Promises  : the object represents the eventual completion or failure of asynchronous operation and its resulting a value is returned when the operation completes successfully

// const cart = ["c1", "c2", "c3", "c4", "c5"];

// const promise = createOrder(cart);
// // consumer
// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     //   proceedPayment(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// producer

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateOrder(cart)) {
//       const err = new Error("Promise is rejected");
//       reject(err);
//     }
//     const orderId = "123";
//     if (orderId) {
//       setTimeout(() => {
//         console.log("Order created successfully");
//         resolve(orderId);
//       }, 1000);
//     }
//   });
//   return pr;
// }
// function validateOrder(cart) {
//   return false;
// }

// Async await

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise created successfully");
  }, 1000);
});

async function handlePromise() {
  const val = await pr;
  console.log(val);
}
handlePromise();
