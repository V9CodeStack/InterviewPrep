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
console.log(flatternArry(arr)); // Output: [13, 12, 7, 4, 10, 11, 9, 6]`,
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

console.log(maximunSubArraySum(arr)); // Output: 10`,
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
