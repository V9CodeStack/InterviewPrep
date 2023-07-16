import { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./index.css";

const javascriptobj = [
  /* **** question 1 **** */
  {
    id: 1,
    question: `1. Implement a function that takes two arrays and returns their intersection (elements that are present in both arrays ?`,
    javaScriptCode: `/** JavaScript **/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function getIntersection(arr1, arr2) {
  return arr1.filter((eachValue) => arr2.includes(eachValue));
}

console.log(getIntersection(arr1, arr2)); // Output: [ 3, 4, 5 ]
`,
    pythonCode: `/** Python **/
arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6, 7]

def getIntersection(arr1, arr2):
    return list(set(arr1) & set(arr2))

print(getIntersection(arr1, arr2))  // Output: [3, 4, 5]
`,
  },
  /* **** question 2 **** */
  {
    id: 2,
    question: `2. Implement a function that takes an array of integers and returns the second highest number in the array`,
    javaScriptCode: `/** JavaScript **/
const arry = [2, 7, 3, 5, 4];
const sortedOuput = arry.sort((a, b) => a - b);
const secondHighest = sortedOuput[1];
console.log(secondHighest); // Output: 3
`,
    pythonCode: ` /** Python **/
arry = [2, 7, 3, 5, 4]
arry.sort()
secondHighest = arry[1]
print(secondHighest)  //Output: 3
`,
  },
  /* **** question 3 **** */
  {
    id: 3,
    question: `3. Write a function to reverse a string in JavaScript.`,
    javaScriptCode: `/** JavaScript **/
let str = "hello world";
let reverseResult = "";
function getReverse(str) {
  str = str.split("");
  return (reverseResult = str.reverse().join(""));
}
console.log(getReverse(str)); // Output: dlrow olleh`,
    pythonCode: `/** Python **/
str = "hello world"
str = list(str)
reverseResult = "".join(str[::-1])
print(reverseResult) // Output: dlrow olleh`,
  },
  /* **** question 4 **** */
  {
    id: 4,
    question: `4. Write a function that checks whether a given string is a palindrome or not.?`,
    javaScriptCode: `/** JavaScript **/
const str = "racecar";
const reverseStr = str.split("").reverse().join("");
if (str === reverseStr) {
  console.log("Input is Palindrome");
} else {
  console.log("Input is not Palindrome");
}
// Output: Input is Palindrome`,
    pythonCode: `/** Python **/
str = "racecar"
reverseStr = "".join(list(str)[::-1])
if str == reverseStr:
    print("Input is Palindrome")
else:
    print("Input is not Palindrome") // Output: Input is Palindrome
`,
  },
  /* **** question 5 **** */
  {
    id: 5,
    question: `5. Implement a function to flatten a nested array.?`,
    javaScriptCode: `/** JavaScript **/
const arr = [13, [12, [7, 4, [10, 11]], 9], 6];

function flatternArry(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatternArry(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatternArry(arr)); // Output: [13, 12, 7, 4, 10, 11, 9, 6]

// OR 

function flatArray(arr) {
  let flatrenArray = arr;
  for (let i = 0; i < arr.length; i++) {
    flatrenArray = flatrenArray.flat();
  }
  return flatrenArray;
}

console.log(flatArray(arr)); // [13, 12, 7, 4,10, 11, 9, 6]`,
    pythonCode: `/** Python **/
arr = [13, [12, [7, 4, [10, 11]], 9], 6]

def flatternArry(arr):
    result = []
    for i in range(len(arr)):
        if type(arr[i]) == list:
            result = result + flatternArry(arr[i])
        else:
            result.append(arr[i])
    return result

print(flatternArry(arr)) // Output: [13, 12, 7, 4, 10, 11, 9, 6]
`,
  },
  /* **** question 6 **** */
  {
    id: 6,
    question: `6. Implement a function to find the maximum subarray sum in an array of integers.?`,
    javaScriptCode: `/** JavaScript **/
const arr = [1, 2, 3, 4, -10];

function maximunSubArraySum(arr) {
  let arrySum = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      if (j > 1) {
        let sum = 0;
        for (let k of arr.slice(i, j)) {
          sum = sum + k;
        }
        arrySum.push(sum);
      }
    }
  }
  return arrySum.sort((a, b) => b - a)[0];
}

console.log(maximunSubArraySum(arr)); // Output: 10

/** Using Kadane's algorithm, which is an efficient algorithm **/
function getMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(getMaxSubarraySum(arr)); //10`,
    pythonCode: ``,
  },
  /* **** question 7 **** */
  {
    id: 7,
    question: `7. Write a function that takes a string as input and returns the first non-repeating character.?`,
    javaScriptCode: `/** JavaScript **/
const str = "javascript";
const charCount = {};
for (let i = 0; i < str.length; i++) {
  charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
}
console.log(charCount);

// Find first non-repeating character
for (j in charCount) {
  if (charCount[j] === 1) {
    console.log(j);
    break;
  }
}

// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
// Output: j
`,
    pythonCode: ``,
  },
  /* **** question 8 **** */
  {
    id: 8,
    question: `8. Implement a function that returns the Nth Fibonacci number.?`,
    javaScriptCode: `/** JavaScript **/
let n = 9;

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(n)); // Output: 34`,
    pythonCode: ` /** Python **/
n = 9

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-2) + fibonacci(n-1)

print(fibonacci(n)) // Output: 34
`,
  },
  /* **** question 9 **** */
  {
    id: 9,
    question: `9. Implement a logic that gives list of prime numbers ?`,
    javaScriptCode: `/** JavaScript **/
let n = 10;

for (let i = 2; i <= n; i++) {
  let sum = 0;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      sum += 1;
      break;
    }
  }
  if (sum === 0) {
    console.log(i);
  }
}
// Output: 2 3 5 7
`,
    pythonCode: ``,
  },
  /* **** question 10 **** */
  {
    id: 10,
    question: `10. Implement a logic that checks whether a given number is a prime number or not.?`,
    javaScriptCode: `/** JavaScript **/
let n = 10;

function isPrime(n) {
  if (n <= 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
        break;
      }
    }
    return true;
  }
}
console.log(isPrime(n)); // Output: false`,
    pythonCode: ``,
  },
  /* **** question 11 **** */
  {
    id: 11,
    question: `11. Implement a function that takes a sorted array of integers and returns the index of a target number, or -1 if it's not found (using binary search). ?`,
    javaScriptCode: `/** JavaScript **/
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 9;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, target)); // Output: 4

// Another Method

let result = arr.findIndex((eachValue) => eachValue === target);
console.log(result); // Output: 4`,
    pythonCode: ``,
  },
  /* **** question 12 **** */
  {
    id: 12,
    question: `12. Highest repeating number and occurrence ?`,
    javaScriptCode: `/** JavaScript **/

const input = [1, 1, 2, 4, 1, 5, 2, 6];

const countsObj = {};
let highestCount = 0;
let highestNumber = null;

for (let i = 0; i < input.length; i++) {
  const number = input[i];
  countsObj[number] = countsObj[number] ? countsObj[number] + 1 : 1;
  if (countsObj[number] > highestCount) {
    highestCount = countsObj[number];
    highestNumber = number;
  }
}
console.log(countsObj); // { '1': 3, '2': 2, '4': 1, '5': 1, '6': 1 }

// Output: highest repeatingnumber is 1, occurence is 3`,
    pythonCode: ``,
  },
  /* **** question 13 **** */
  {
    id: 13,
    question: `13. Write a function that takes an array of integers and returns a new array with all the duplicates removed. ?`,
    javaScriptCode: `/** JavaScript **/
const arr = [1, 2, 3, 1, 2, 4, 5, 4];

let uniqueArry = [];

for (let i = 0; i < arr.length; i++) {
  if (uniqueArry.indexOf(arr[i]) === -1) {
    uniqueArry.push(arr[i]);
  }
}
console.log(uniqueArry);  // Output: [ 1, 2, 3, 4, 5 ]
`,
    pythonCode: ``,
  },
  /* **** question 14 **** */
  {
    id: 14,
    question: `14. Implement a function that takes an array of objects and sorts them by a given property.?`,
    javaScriptCode: `/** JavaScript **/
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

function sortByProperty(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}

const sortByAge = sortByProperty(people, "age");
console.log(sortByAge);

//Output:
[
  { name: "Charlie", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];`,
    pythonCode: `/** Python **/
people = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 20},
]

def sort_by_property(arr, prop):
    return sorted(arr, key=lambda x: x[prop])

sortByAge = sort_by_property(people, "age")
print(sortByAge)

// Output: 
[
{'name': 'Charlie', 'age': 20}, 
 {'name': 'Alice', 'age': 25},
 {'name': 'Bob', 'age': 30}
 ]
`,
  },
  /* **** question 15 **** */
  {
    id: 15,
    question: `15. Write a function that takes a string and returns the number of vowels it contains.?`,
    javaScriptCode: `/** JavaScript **/
const str = "Hello World";

function countVowels(str) {
  const vowles = ["a", "e", "i", "o"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowles.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str)); //Output: 3`,
    pythonCode: `/** Python **/
str = "Hello World"

def count_vowles(str):
    vowles = ["a", "e", "i", "o"]
    count = 0
    for char in str:
        if char in vowles:
            count += 1
    return count

print(count_vowles(str)) // Output: 3`,
  },
  /* **** question 16 **** */
  {
    id: 16,
    question: `16. Implement a function that takes a number and returns its factorial. ?`,
    javaScriptCode: `/** JavaScript **/
let n = 4;

function factorial(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(n)); //Output: 24
`,
    pythonCode: ``,
  },
  /* **** question 17 **** */
  {
    id: 17,
    question: `17. Implement a function that takes an array of integers and returns the largest product of any two integers.?`,
    javaScriptCode: `/** JavaScript **/
const arr = [4, 1, 0, 9, 7, 2, 4, 1, 6];

let largestProduct = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] * arr[j] > largestProduct) {
      largestProduct = arr[i] * arr[j];
    }
  }
}
console.log(largestProduct); //Output: 63`,
    pythonCode: `/** Python **/
arr = [4, 1, 0, 9, 7, 2, 4, 1, 6]

largestProduct = 0
for i in range(len(arr)):
    for j in range(i+1, len(arr)):
        if arr[i] * arr[j] > largestProduct:
            largestProduct = arr[i] * arr[j]
            
print(largestProduct) // Output: 63
`,
  },
  /* **** question 18 **** */
  {
    id: 18,
    question: `18. Implement a function that takes a string as input and returns the length of the longest substring without repeating characters.?`,
    javaScriptCode: `/** JavaScript **/
str = "abcabcbb";

function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let currentSubstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charIndex = currentSubstr.indexOf(char);

    if (charIndex !== -1) {
      currentSubstr = currentSubstr.slice(charIndex + 1);
    } else {
      currentSubstr += char;
      maxLength = Math.max(maxLength, currentSubstr.length);
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring(str));  //Output: 3`,
    pythonCode: ``,
  },
  /* **** question 19 **** */
  {
    id: 19,
    question: `19. Find the maximum value using Reduce method?`,
    javaScriptCode: `/** JavaScript **/
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

const result = arr.reduce((acc, cur) => (cur > acc ? cur : acc));
console.log(result); //3000
`,
    pythonCode: ``,
  },
  /* **** question 20 **** */
  {
    id: 20,
    question: `20. Write a function that takes a number as input and returns its English representation (e.g. 1234 -> "one thousand two hundred thirty-four").?`,
    javaScriptCode: `/** JavaScript **/
const numbers = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function convertNumberToString(number) {
  if (number < 10) {
    return numbers[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    return tens[Math.floor(number / 10)] + " " + numbers[number % 10];
  } else if (number < 1000) {
    return (
      numbers[Math.floor(number / 100)] +
      " hundred " +
      convertNumberToString(number % 100)
    );
  } else {
    return (
      convertNumberToString(Math.floor(number / 1000)) +
      " thousand " +
      convertNumberToString(number % 1000)
    );
  }
}

console.log(convertNumberToString(5476)); // five thousand four hundred seventy six
`,
    pythonCode: ``,
  },
  /* **** question 21 **** */
  {
    id: 21,
    question: `21. Sum of numbers using Recursive function ?`,
    javaScriptCode: `num = 4;
function sumOfNumbers(num) {
  if (num <= 1) {
    return num;
  } else {
    return num + sumOfNumbers(num - 1);
  }
}
console.log(sumOfNumbers(num)); // 10`,
    pythonCode: ``,
  },
  /* **** question 22 **** */
  {
    id: 22,
    question: `22. print 1 to 10 using Recursive function ?`,
    javaScriptCode: `/** JavaScript **/
function countNumbers(start, end) {
  if (start > end) {
    return;
  }
  console.log(start);
  countNumbers(start + 1, end);
}
countNumbers(1, 10); // 1 2 3 4 5 6 ...10`,
    pythonCode: ``,
  },
  /* **** question 23 **** */
  {
    id: 23,
    question: `23. print first non repeating character ? `,
    javaScriptCode: `/** JavaScript **/
let str = "abcab";

let obj = {};
for (let i = 0; i < str.length; i++) {
  obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
}

console.log(obj); // { a: 2, b: 2, c: 1 }

for (j in obj) {
  if (obj[j] === 1) {
    console.log(j); // C
  }
}

/*Another Method*/

for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    console.log(str[i]); // C
  }
}`,
    pythonCode: ``,
  },
  /* **** question 24 **** */
  {
    id: 24,
    question: `24. Order of Output for below code?`,
    javaScriptCode: `console.log(1); 

setTimeout(function () {
  console.log(2);
}, 1000); 

setTimeout(function () {
  console.log(3);
}, 0);

console.log(4);

// Order of Output is 1 4 3 2`,
    pythonCode: ``,
  },
  /* **** question 25 **** */
  {
    id: 25,
    question: `25. Output for below code?`,
    javaScriptCode: `function x() {
  setTimeout(function () {
    console.log(i);
  }, 1000);
  var i = 1;
}
x();
// Output: 1`,
    pythonCode: ``,
  },
  /* **** question 26 **** */
  {
    id: 26,
    question: `26. write the JavaScript function that takes an n-digit number, sums the digits, and repeats the process until the sum is less than or equal to 10 ?`,
    javaScriptCode: `let result;
function sumData(num) {
  let str = num.toString().split("");
  let summing = str.reduce((a, b) => parseInt(a) + parseInt(b));
  if (summing > 10) {
    sumData(summing);
  } else {
    result = summing;
  }
}

sumData(5431);

console.log(result); // 4`,
    pythonCode: ``,
  },
  {
    id: 27,
    question: `27. Write a logic to move all 0's to the end in an array ?`,
    javaScriptCode: `function moveZerosToEnd(arr) {
  let numZeros = 0;
  
  // Loop through the array, counting the number of zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numZeros++;
    }
  }
  
  // Create a new array with all non-zero elements in the original array
  let result = arr.filter((elem) => elem !== 0);
  
  // Add the appropriate number of zeros to the end of the new array
  for (let i = 0; i < numZeros; i++) {
    result.push(0);
  }
  
  return result;
}

let arr = [1, 0, 2, 0, 3, 0, 4, 0, 5];
let result = moveZerosToEnd(arr);
console.log(result); // [1, 2, 3, 4, 5, 0, 0, 0, 0]`,
    pythonCode: ``,
  },
  {
    id: 28,
    question: `28. Input: searchBoxKey  Output: search_Box_Key`,
    javaScriptCode: `const str = "searchBoxKey";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    result = result + "_" + str[i];
  } else {
    result = result + str[i];
  }
}

console.log(result); //search_Box_Key
`,
    pythonCode: ``,
  },
  {
    id: 29,
    question: `29. Output of Below Code ?`,
    javaScriptCode: `const obj = {
  name: "vinay",
  age: 20,
};

console.log(Object.keys(obj)); //[ 'name', 'age' ]

const output = Object.keys(obj).map((value) => [value, obj[value]]);

console.log(output); // [ [ 'name', 'vinay' ], [ 'age', 20 ] ]
`,
    pythonCode: ``,
  },
  {
    id: 30,
    question: `30. Output of Below Code?`,
    javaScriptCode: `function numberGenerator() {
  return 1;
  return 2;
}
console.log(numberGenerator()); // 1 normal function will not execute 2nd return statement

// Convert any Function into generator
function* numberGeneratorWithGenerator() {
  yield 1;
  yield 2;
}

const result = numberGeneratorWithGenerator();

console.log(result.next().value); // 1
console.log(result.next().value); // 2
console.log(result.next().value); // undefined
`,
    pythonCode: ``,
  },
  {
    id: 31,
    question: `31. Find Missing Number in Sequency ?`,
    javaScriptCode: `let arr = [1, 4, 5, 2, 8];
let n = 10;
let result = [];

for (let i = 1; i < n; i++) {
  if (arr.indexOf(i) === -1) {
    result.push(i);
  }
}

console.log(result); // [3, 6, 7, 9]
`,
    pythonCode: ``,
  },
  {
    id: 32,
    question: `32. Sort array by even and odd numbers ?`,
    javaScriptCode: `let arr = [9, 8, 6, 5, 2, 4, 1, 10];

function sortByEvenOdd(arr) {
  const even = arr.filter((item) => item % 2 === 0).sort((a, b) => a - b);
  const odd = arr.filter((item) => item % 2 !== 0).sort((a, b) => a - b);

  return [...even, ...odd];
}

console.log(sortByEvenOdd(arr)); //  [2, 4, 6, 8, 10, 1, 5, 9]`,
    pythonCode: ``,
  },
  {
    id: 33,
    question: `33. Find Longest String in Array ?`,
    javaScriptCode: `let arr = ["HTML", "CSS", "JAVASCRIPT"];

function findLongestArray(arr) {
  let result = "";
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      result = arr[i];
      len = arr[i].length;
    }
  }
  return result;
}

console.log(findLongestArray(arr)); // JAVASCRIPT`,
    pythonCode: ``,
  },
  {
    id: 34,
    question: `34. Sort array of Strings by word length ?`,
    javaScriptCode: `let arr = ["HTML", "CSS", "JAVASCRIPT", "python", "PHP", "Java"];

function sortByWordLength(arr) {
  let result = arr.sort((a, b) => a.length - b.length);

  return result;
}

console.log(sortByWordLength(arr)); // ['CSS', 'PHP', 'HTML', 'Java', 'python', 'JAVASCRIPT']`,
    pythonCode: ``,
  },
  {
    id: 35,
    question: `35. How to check two array are equal or not?`,
    javaScriptCode: `let arr1 = [100, 200, 300];
let arr2 = [100, 500, 300];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // false`,
    pythonCode: ``,
  },
  {
    id: 36,
    question: `36. Remove Duplicates in array of objects?`,
    javaScriptCode: `let obj = [
  { id: 1, name: "John", price: 10 },
  { id: 2, name: "Jane", price: 20 },
  { id: 1, name: "John", price: 10 },
  { id: 3, name: "Mike", price: 30 },
  { id: 4, name: "Jane", price: 40 },
  { id: 3, name: "Mike", price: 30 },
];

function removeDuplicates(obj) {
  let arr = obj.map((item) => JSON.stringify(item));
  let uniqueArr = Array.from(new Set(arr));
  let result = uniqueArr.map((item) => JSON.parse(item));
  return result;
}

console.log(removeDuplicates(obj));
// Output:
[
  { id: 1, name: "John", price: 10 },
  { id: 2, name: "Jane", price: 20 },
  { id: 3, name: "Mike", price: 30 },
  { id: 4, name: "Jane", price: 40 },
];
`,
    pythonCode: ``,
  },
  {
    id: 37,
    question: `37. Output of Below Code ?`,
    javaScriptCode: `// Question 1
function fruit() {
  console.log(name); // undefined
  console.log(price); // Error

  var name = "apple";
  let price = 23;
}
fruit();

///////////////////////////////////////////////////////////////

// Question 2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i); // 3 3 3
}

///////////////////////////////////////////////////////////////

// Question 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i); // 0 1 2
}

///////////////////////////////////////////////////////////////

// Question 4
console.log(+true); // 1
console.log(typeof +true); // Number


///////////////////////////////////////////////////////////////

// Question 5
console.log(!"vinay"); // false
console.log(typeof "vinay"); // String

///////////////////////////////////////////////////////////////

// Question 6
let data = "size";
const bird = {
  size: "small",
};
console.log(bird[data]); // small
console.log(bird["size"]); // small
console.log(bird.size); // small
console.log(bird.data); // undefined


///////////////////////////////////////////////////////////////

// Question 7
let c = { name: "vinay" };
let d;
d = c;
c.name = "kumar";
console.log(d.name); // kumar

///////////////////////////////////////////////////////////////

// Question 8
var x;
var x = 10;
console.log(x); //10

///////////////////////////////////////////////////////////////

// Question 9
var x;
let x = 10;
console.log(x); // Error (Identifier 'x' has already been declared)

///////////////////////////////////////////////////////////////

// Question 11
let a = 3;
let b = new Number(3);
console.log(a == b); // true
console.log(a === b); // false
console.log(typeof b); // Object

///////////////////////////////////////////////////////////////

// Question 12
function fruit() {
  console.log("woof!"); // woof!
}
fruit.name = "apple";
console.log(fruit()); // undefined

///////////////////////////////////////////////////////////////

// Question 13
let number = 0;
console.log(number++); // 0
console.log(++number); // 2
console.log(number); // 2

///////////////////////////////////////////////////////////////

// Question 14
function getAge(...args) {
  console.log(typeof args);
}
getAge(21); // Object

///////////////////////////////////////////////////////////////

// Question 15
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge(); // Error (age is not defined)

///////////////////////////////////////////////////////////////

// Question 16
const sum = eval("10*10+5");
console.log(sum); // 105

///////////////////////////////////////////////////////////////

// Question 20
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4
}

// Question 21
const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("second"));
const baz = () => console.log("Third");
bar();
foo();
baz();

//outPut:
first
Third
second

///////////////////////////////////////////////////////////////

// Question 23
const person = { name: "vinay" };
function sayHi(age) {
  return "{this.name} is {age}";
}
console.log(sayHi.call(person, 21)); // vinay is 21
console.log(sayHi.bind(person, 21)); // ƒ sayHi(age) { return "{this.name} is {age}";}

///////////////////////////////////////////////////////////////

// Question 24
function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi()); // number

///////////////////////////////////////////////////////////////

// Question 25
function sayHi() {
  return () => 0;
}
console.log(typeof sayHi()); // function

///////////////////////////////////////////////////////////////

// Question 26
console.log(typeof typeof 1); // string

///////////////////////////////////////////////////////////////

// Question 27
const numbers = [1, 2, 3];
numbers[9] = 11;
console.log(numbers); // [1, 2, 3, empty × 6, 11]

///////////////////////////////////////////////////////////////

// Question 28
const numbers = [1, 2, 3];
numbers[3] = numbers;
console.log(numbers); //  [1, 2, 3, Array(4)]...Array(4) infinity loop

///////////////////////////////////////////////////////////////

// Question 30
console.log(!!null); // false
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true

///////////////////////////////////////////////////////////////

// Question 32
console.log([..."vinay"]); // ['v', 'i', 'n', 'a', 'y']

///////////////////////////////////////////////////////////////

// Question 37
let data = 3 + 4 + "5";
console.log(data); // 75
console.log(typeof data); // string

///////////////////////////////////////////////////////////////

// Question 38
console.log(typeof 3 + 4 + "5"); // number45
console.log(3 + 4 + "5"); // 75

///////////////////////////////////////////////////////////////

// Question 39
console.log(typeof (3 + 4 + +"5")); // number
console.log(3 + 4 + +"5"); // 12

///////////////////////////////////////////////////////////////

// Question 40
console.log([] == []); // false

///////////////////////////////////////////////////////////////

// Question 41
let data = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
console.log(data); // [undefined, undefined, undefined]

///////////////////////////////////////////////////////////////

// Question 42
// Pass By Reference
const person = { name: "vinay" };
function getInfo(member) {
  member.name = "kumar";
}
getInfo(person);
console.log(person); // {name: 'kumar'}

///////////////////////////////////////////////////////////////

// Question 43
function Car() {
  this.make = "tata";
  return { make: "kia" };
}
const myCar = new Car();
console.log(myCar.make); // kia

///////////////////////////////////////////////////////////////

// Question 44
(() => {
  let x = (y = 10);
})();
console.log(typeof x); // undefined

///////////////////////////////////////////////////////////////

// Question 45
(() => {
  let x = (y = 10);
})();
console.log(typeof y); // undefined
console.log(y); // 10

///////////////////////////////////////////////////////////////

// Question 46
(() => {
  let x = 10;
})();
(() => {
  let x = 10;
})();
console.log(typeof x); // undefined

///////////////////////////////////////////////////////////////

// Question 47
(() => {
  let x = (y = 10);
})();
(() => {
  let x = (y = 20);
})();
console.log(y); // 20

///////////////////////////////////////////////////////////////

// Question 48
let x = 100;
(() => {
  var x = 20;
})();
console.log(x); // 100

function example() {
  var x = 1;
  let y = 2;
  const z = 3;
  if (true) {
    var x = 4; // same variable as x above
    let y = 5; // different variable than y above
    const z = 6; // different variable than z above
  }
  console.log(x); // logs 4
  console.log(y); // logs 2
  console.log(z); // logs 3
}
example();

///////////////////////////////////////////////////////////////

// Question 49
console.log(!true - true); // -1

///////////////////////////////////////////////////////////////

// Question 50
console.log(true + +"10"); // 11
`,
    pythonCode: ``,
  },
  {
    id: 38,
    question: `38. Write a groupBy function to group users based on a property like name, age, id Dynamically change property ?`,
    javaScriptCode: `const users = [
  { id: 1, name: "Rahul", age: 30 },
  { id: 7, name: "John", age: 30 },
  { id: 3, name: "David", age: 50 },
  { id: 4, name: "Abhi", age: 40 },
  { id: 5, name: "Smith", age: 40 },
];

function groupBy(users, property) {
  const grouped = {};
  for (const user of users) {
    const key = user[property];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(user);
  }
  return grouped;
}
const groupedByAge = groupBy(users, "age");
console.log(groupedByAge);

 //Output:
 {
    30: [
      { id: 1, name: "Rahul", age: 30 },
      { id: 7, name: "John", age: 30 }
    ],
    50: [
      { id: 3, name: "David", age: 50 }
    ],
    40: [
      { id: 4, name: "Abhi", age: 40 },
      { id: 5, name: "Smith", age: 40 }
    ]
  }`,
    pythonCode: ``,
  },
  {
    id: 39,
    question: `39. Write a function to return sum of parameters for below with n numbers of parameters => sum(2, 3)(3, 4, 6)(4)...(n)();`,
    javaScriptCode: `function sum(...args) {
  let sum = args.reduce((total, num) => total + num, 0);

  function innerSum(...innerArgs) {
    if (innerArgs.length === 0) {
      return sum;
    }
    sum += innerArgs.reduce((total, num) => total + num, 0);
    return innerSum;
  }
  return innerSum;
}

console.log(sum(2, 3)(3, 4, 6)(4)()); // Output: 22

the sum is calculated as follows:
Initial sum: 2 + 3 = 5
Next call: 5 + 3 + 4 + 6 = 18
Next call: 18 + 4 = 22
Final call: returns 22
`,
    pythonCode: ``,
  },
];

const ObjBluePrint = {
  id: 1,
  question: ``,
  javaScriptCode: ``,
  pythonCode: ``,
};

class JavaScript extends Component {
  state = { sortingFlag: true };

  sortByDescending = (obj, prop) => {
    return obj.sort((a, b) => b[prop] - a[prop]);
  };

  sortByAscending = (obj, prop) => {
    return obj.sort((a, b) => a[prop] - b[prop]);
  };

  onClickSorting = () => {
    const { sortingFlag } = this.state;
    this.setState({ sortingFlag: !sortingFlag });
  };

  render() {
    const { sortingFlag } = this.state;
    sortingFlag
      ? this.sortByAscending(javascriptobj, "id")
      : this.sortByDescending(javascriptobj, "id");
    const sortingText = sortingFlag ? "Sort Desc" : "Sort Asc";

    return (
      <div className="main-container">
        <div className="btn-container">
          <h1 className="obj-len">Total Questions: {javascriptobj.length}</h1>
          <button className="button" onClick={this.onClickSorting}>
            {sortingText}
          </button>
        </div>
        <div className="about-container">
          {javascriptobj.map((eachItem) => (
            <div className="question 1">
              <h1 className="question-header">{eachItem.question}</h1>
              <div className="code">
                <SyntaxHighlighter language="javascript" style={okaidia}>
                  {eachItem.javaScriptCode}
                </SyntaxHighlighter>
                <hr className="line" />
                <SyntaxHighlighter language="javascript" style={okaidia}>
                  {eachItem.pythonCode
                    ? eachItem.pythonCode
                    : `# /** Python **/ No Code`}
                </SyntaxHighlighter>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JavaScript;
