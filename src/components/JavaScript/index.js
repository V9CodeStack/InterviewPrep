import { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./index.css";

const javascriptobj = [
  /* **** question 1 **** */
  {
    id: 1,
    question: `1. What are closures in JavaScript? Provide an example of how they can
    be used ?`,
    answer: [
      `In JavaScript, a closure is a function that has access to the
    variables in its outer lexical environment, even after that
    environment has been destroyed. Closures are created when a function
    is defined inside another function, and the inner function captures
    references to variables in the outer function's scope chain.`,
    ],
    code: `function outerFunction() {
  var outerVariable = 10;
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

var innerFunc = outerFunction(); // innerFunc is now a closure

innerFunc(); // logs 10 to the console
`,
    video: `https://www.youtube.com/watch?v=jW_JlAMsd2w&t=1512s`,
  },
  /* **** question 2 **** */
  {
    id: 2,
    question: `2. what is  currying ?`,
    answer: [
      `Currying is a technique used in functional programming where a function with multiple arguments is transformed into a series of functions, each taking a single argument. The resulting functions can be called one at a time and each call returns a new function that expects the next argument in the original function.`,
    ],
    code: `function add(x) {
  return function(y) {
    return x + y;
  };
}

var addFive = add(5); // returns a new function that expects one argument
console.log(addFive(3)); // logs 8`,
    video: `https://www.youtube.com/watch?v=slL9YvE6hso`,
  },
  /* **** question 3 **** */
  {
    id: 3,
    question: `3. What is the difference between == and === in JavaScript?`,
    answer: [
      `In JavaScript, == and === are comparison operators used to compare values. The main difference between them is that == performs type coercion before comparing the values, while === does not.`,
    ],
    code: `console.log(1 == "1"); // logs true
console.log(1 === "1"); // logs false`,
    video: ``,
  },
  /* **** question 4 **** */
  {
    id: 4,
    question: `4. Explain the difference between null and undefined in JavaScript.`,
    answer: [
      `the difference between null and undefined is that undefined is used when a variable or property has not been assigned a value, while null is used when a variable or property intentionally has no value.`,
      `Another key difference is that undefined is a primitive value in JavaScript, while null is an object`,
    ],
    code: `console.log(typeof undefined); // logs "undefined"
console.log(typeof null); // logs "object"

var obj = null;
console.log(obj.foo); // throws an error (cannot read property 'foo' of null)`,
    video: ``,
  },
  /* **** question 5 **** */
  {
    id: 5,
    question: `5. How would you explain the concept of "hoisting" in JavaScript?`,
    answer: [
      `In JavaScript, "hoisting" is a term used to describe the behavior of moving variable and function declarations to the top of their respective scopes during the compilation phase, before the code is executed.`,
      `This means that regardless of where a variable or function is declared in the code, it is treated as if it has been declared at the top of its scope.`,
      `Even though the foo() function is called before it is declared in the code, it still logs "hello" because the function declaration is hoisted to the top of its scope.

      It's important to note that only variable and function declarations are hoisted, not their assignments or initializations. So in the first example above, a is initialized with undefined, but the value 10 is not assigned to it until later in the code.`,
    ],
    code: `console.log(a); // logs undefined
var a = 10;

foo(); // logs "hello"
function foo() {
  console.log("hello");
}
`,
    video: ``,
  },
  /* **** question 6 **** */
  {
    id: 6,
    question: `6. what are the variables and functions are not hoisted ?`,
    answer: [
      `Function expressions`,
      `Let and const declarations`,
      `Class declarations`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 7 **** */
  {
    id: 7,
    question: `7. What are the different ways to create an object in JavaScript?`,
    answer: [`Object literals`, `Constructor functions`, `ES6 Classes`],
    code: `Object literals:
    var person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};

Constructor functions:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  }
}
var john = new Person("John", 30);
john.sayHello(); // logs "Hello, my name is John"

ES6 Classes:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}
var john = new Person("John", 30);
john.sayHello(); // logs "Hello, my name is John"
`,
    video: ``,
  },
  /* **** question 8 **** */
  {
    id: 8,
    question: `8. Explain the difference between synchronous and asynchronous code in JavaScript ?`,
    answer: [
      `Synchronous code in JavaScript is executed in a sequence. In other words, each line of code is executed one after the other, and each line of code must finish executing before the next line can be executed. This means that if a function takes a long time to complete, it will block the entire thread and prevent any other code from executing until it's finished.`,
      `Asynchronous code in JavaScript, on the other hand, does not block the entire thread. Instead, it allows other code to be executed while it is waiting for an operation to complete. Asynchronous code is typically used for operations that take a long time to complete, such as network requests or file I/O`,
      `In summary, the key difference between synchronous and asynchronous code in JavaScript is that synchronous code blocks the entire thread and executes in a sequence, while asynchronous code allows other code to be executed while it's waiting for an operation to complete.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 9 **** */
  {
    id: 9,
    question: `9. What is the difference between let, var, and const in JavaScript?`,
    answer: [
      ` var, let, and const are used to declare variables in JavaScript, but they have different scoping and reassignment rules. var is function-scoped, can be redeclared, and can be reassigned. let and const are block-scoped, cannot be redeclared, and const variables cannot be reassigned.`,
    ],
    code: `function example() {
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

var x = 1;
var x = 2; // allowed
console.log(x); // logs 2

let y = 3;
let y = 4; // not allowed
console.log(y); // throws an error

const z = 5;
const z = 6; // not allowed
console.log(z); // throws an error

const x = 1;
x = 2; // not allowed
console.log(x); // logs 1

let y = 3;
y = 4; // allowed
console.log(y); // logs 4

var z = 5;
z = 6; // allowed
console.log(z); // logs 6

`,
    video: ``,
  },
  /* **** question 10 **** */
  {
    id: 10,
    question: `10. How would you handle errors in JavaScript code?`,
    answer: [
      `Using try-catch blocks: A try-catch block is used to handle runtime errors that occur in JavaScript code. In a try-catch block, the code that may throw an error is wrapped in a try block, and the error handling code is placed in the catch block. If an error is thrown in the try block, the catch block is executed.`,
    ],
    code: `try {
  // code that may throw an error
} catch (error) {
  // error handling code
}
`,
    video: ``,
  },
  /* **** question 11 **** */
  {
    id: 11,
    question: `11. How does event bubbling work in JavaScript?`,
    answer: [
      `When an event occurs on an element, such as a click or a keypress, the event is first triggered on that element. Then, the event is propagated up the DOM tree from the innermost element to the outermost element`,
      `Event bubbling can be useful for implementing event delegation, which is a technique for attaching event listeners to a parent element and handling events for its child elements. By handling events at the parent level, we can avoid the overhead of attaching multiple event listeners to individual child elements.`,
    ],
    code: ``,
    video: `https://www.youtube.com/watch?v=NQadrCcpQKw`,
  },
  /* **** question 12 **** */
  {
    id: 12,
    question: `12. What is Event Delegation ?`,
    answer: [
      `Event delegation is a technique in JavaScript where instead of attaching an event listener to each individual element, a single event listener is attached to a parent element to listen for events on its child elements. When an event is triggered on a child element, the event "bubbles" up the DOM tree and is caught by the event listener attached to the parent element. This allows for more efficient event handling and can simplify code in situations where there are many child elements that need event listeners.`,
      `For example, if you have a list of items and you want to attach a click event listener to each item, instead of attaching the event listener to each item, you can attach it to the parent <ul> element and use event delegation to handle the click event on each child <li> element. This way, you only need one event listener instead of one for each item.`,
    ],
    code: ``,
    video: `https://www.youtube.com/watch?v=NQadrCcpQKw`,
  },
];

const ObjBluePrint = {
  id: 1,
  question: ``,
  answer: [``, ``, ``],
  code: ``,
  video: ``,
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
              <ul className="ul">
                {eachItem.answer.map((eachAnswer) => (
                  <li className="answer">{eachAnswer}</li>
                ))}
              </ul>
              <div className="code">
                <SyntaxHighlighter language="javascript" style={okaidia}>
                  {eachItem.code}
                </SyntaxHighlighter>
              </div>
              <a href={eachItem.video} target="_blank">
                {eachItem.video}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JavaScript;
