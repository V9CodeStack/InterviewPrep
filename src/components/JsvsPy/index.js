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
