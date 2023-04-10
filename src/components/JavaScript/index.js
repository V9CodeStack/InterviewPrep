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
  /* **** question 13 **** */
  {
    id: 13,
    question: `13. What is the difference between a callback function and a promise in JavaScript?`,
    answer: [
      `In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when the other function completes its task. A promise, on the other hand, is an object that represents a value that may not be available yet, but will be resolved in the future. The main differences between a callback function and a promise are:`,
      `Error handling: In a callback function, error handling is typically done by passing an error object to the callback function. In a promise, errors are handled using the .catch() method, which allows you to handle any errors that occur during the promise chain.`,
      `Chaining: Promises can be chained together, making it easy to perform a series of asynchronous tasks in a specific order. Callback functions, however, can be more difficult to chain together.`,
      `Readability: Promises are often considered to be more readable than nested callbacks, because they allow you to write asynchronous code in a way that looks similar to synchronous code.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 14 **** */
  {
    id: 14,
    question: `14. Explain the concept of "this" in JavaScript.?`,
    answer: [
      `The value of "this" depends on how the function is called.`,
      `When a function is called in the global scope, "this" refers to the global object, which is typically the window object in a web browser. However, when a function is called as a method of an object, "this" refers to the object itself.`,
    ],
    code: ``,
    video: `https://www.youtube.com/watch?v=2fhrSd0ctBc`,
  },
  /* **** question 15 **** */
  {
    id: 15,
    question: `15. What is the difference between the "for" loop and the "for...in" loop in JavaScript?`,
    answer: [
      `The for loop uses a counter variable to iterate over the elements of an array, while the for...in loop uses a property name to iterate over the properties of an object.`,
      `In general, it's recommended to use the for loop for iterating over arrays and the for...in loop for iterating over the properties of an object. However, it's important to be aware of the differences between the two and choose the appropriate loop depending on the context.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 16 **** */
  {
    id: 16,
    question: `16. What is a JavaScript event loop, and how does it work?`,
    answer: [
      `The JavaScript event loop is a mechanism that allows JavaScript to handle asynchronous events such as user input, network requests, and timers. It is responsible for handling the execution of JavaScript code and managing the order in which events are processed.`,
      `At a high level, the event loop works by continuously checking a queue of events and executing any pending events in the queue. When an event occurs, it is added to the end of the queue. When the JavaScript engine is idle, the event loop will take the first event in the queue and execute its associated callback function. Once the function has completed, the event loop will move on to the next event in the queue, if there is one.`,
      `One important feature of the event loop is that it operates on a single thread. This means that only one task can be executed at a time, and long-running tasks can block the thread and cause the UI to freeze. To avoid this, developers can use asynchronous programming techniques such as callbacks, promises, and async/await to schedule tasks and allow the event loop to continue processing events.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 17 **** */
  {
    id: 17,
    question: `17. What is a higher-order function in JavaScript? Provide an example.?`,
    answer: [
      `In JavaScript, a higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. Higher-order functions are a powerful and flexible feature of the language, and can be used to create abstractions, compose functions, and implement many common programming patterns.`,
    ],
    code: `function mapArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const squares = mapArray(numbers, function(num) {
  return num * num;
});

console.log(squares); // Output: [1, 4, 9, 16]
`,
    video: `https://www.youtube.com/watch?v=YbiwZXenseU`,
  },
  /* **** question 18 **** */
  {
    id: 18,
    question: `18. Explain the difference between slice() and splice() methods in JavaScript. ?`,
    answer: [
      `slice() is used to create a new array containing a subset of the elements from the original array, while splice() is used to modify the original array by adding or removing elements from it.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 19 **** */
  {
    id: 19,
    question: `19. How would you explain the concept of "scope" in JavaScript? `,
    answer: [
      `Global Scope: Variables and functions that are defined outside of any function or block have global scope. They can be accessed from anywhere in the code.`,
      `Local Scope: Variables and functions that are defined inside a function or block have local scope. They can only be accessed from within the function or block where they are defined.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 20 **** */
  {
    id: 20,
    question: `20. Explain the concept of "prototypal inheritance" in JavaScript.?`,
    answer: [``],
    code: ``,
    video: ``,
  },
  /* **** question 21 **** */
  {
    id: 21,
    question: `21. How would you implement a debounce function in JavaScript?.?`,
    answer: [``],
    code: ``,
    video: ``,
  },
  /* **** question 22 **** */
  {
    id: 22,
    question: `22. What is the difference between "localStorage" and "sessionStorage" in JavaScript ?`,
    answer: [
      `The main difference between localStorage and sessionStorage is that localStorage persists data even when the browser is closed and reopened, while sessionStorage only stores data for a single session (i.e., until the browser is closed). This means that data stored in localStorage can be accessed across different tabs and windows of the same browser, while data stored in sessionStorage is only accessible within the same tab or window that created it.`,
      `Data stored in localStorage does not expire, while data stored in sessionStorage is cleared when the session ends (i.e., when the tab or window is closed).`,
      `localStorage has no specific storage limit (although browsers may set their own limits), while sessionStorage has a storage limit of around 5-10 MB.`,
      `localStorage data is available across all windows and tabs from the same origin, while sessionStorage data is only available within the same window/tab from the same origin.`,
    ],
    code: `localStorage.setItem('key', 'value');
    const value = localStorage.getItem('key');
    localStorage.removeItem('key');
    `,
    video: ``,
  },
  /* **** question 23 **** */
  {
    id: 23,
    question: `23. What is the difference between "async" and "defer" attributes in JavaScript script tags?`,
    answer: [
      `The async and defer attributes are used in script tags in HTML to control how JavaScript files are loaded and executed. The main difference between these attributes is when the JavaScript code is executed in relation to the rest of the page content.`,
      `The async attribute tells the browser to download the script file asynchronously while continuing to parse the HTML document. This means that the script file is downloaded in the background, and the browser does not wait for the file to be fully downloaded before continuing to parse and render the page. When the file is downloaded, it is executed immediately, regardless of whether the page has finished loading or not. This is useful for scripts that do not depend on the rest of the page content, such as tracking or analytics scripts.`,
      `The defer attribute, on the other hand, tells the browser to download the script file in the background while continuing to parse the HTML document. However, unlike the async attribute, the defer attribute does not execute the script file until the HTML document has finished parsing. This ensures that the script does not interfere with the rendering of the page and is executed in the order in which it appears in the HTML document. This is useful for scripts that need to interact with the page content or depend on other scripts that have been loaded.`,
      `In summary, the async attribute loads and executes the script file asynchronously and does not wait for the page to finish loading, while the defer attribute loads the script file asynchronously but defers execution until the HTML document has finished parsing.`,
    ],
    code: `<!-- Load script asynchronously -->
<script async src="script.js"></script>

<!-- Load script deferred -->
<script defer src="script.js"></script>`,
    video: ``,
  },
  /* **** question 24 **** */
  {
    id: 25,
    question: `25. Explain the difference between setTimeout() and setInterval() in JavaScript.?`,
    answer: [
      `setTimeout() is used to execute a piece of code once after a specified amount of time has elapsed. `,
      `setInterval(), on the other hand, is used to execute a piece of code repeatedly at a specified interval of time.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 25 **** */
  {
    id: 25,
    question: `26. What is the purpose of the fetch() method in JavaScript? Provide an example.?`,
    answer: [
      `The fetch() method in JavaScript is used to make network requests and retrieve resources from a server using HTTP or HTTPS. It returns a Promise that resolves to the response from the server.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 26 **** */
  {
    id: 26,
    question: `26. How would you implement inheritance in JavaScript?`,
    answer: [
      `Inheritance in JavaScript refers to the ability of an object to inherit properties and methods from another object. It is implemented using the prototype chain, where objects can have a prototype object that they inherit properties and methods from. Inheritance is an important concept in object-oriented programming as it allows for code reuse and promotes modular and efficient code. In JavaScript, inheritance can be achieved using a combination of object constructors, the prototype property, and the Object.create() method.`,
    ],
    code: `class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  getPersonalDetails() {
    console.log("personal details");
  }
}

class Employee extends Person {
  constructor(name, phone, salary, company) {
    super(name, phone);
    this.salary = salary;
    this.company = company;
  }
}

p1 = new Person("abc", 424626362);

e1 = Employee("cdb", 323872323, 4600, "Amazon");`,
    video: `https://www.youtube.com/watch?v=rponDyXJL4s`,
  },
  /* **** question 27 **** */
  {
    id: 27,
    question: `27. What is the difference between "primitive" and "reference" types in JavaScript?`,
    answer: [
      `Primitive types include:

    Numbers,
    Strings,
    Booleans,
    Undefined,
    Null,
    Symbols (new in ES6),
    
    These types are immutable, which means that their values cannot be changed once they are created.`,
      `reference types include:

Objects,
Arrays,
Functions,
These types are mutable, which means that their values can be changed after they are created. When a variable holds a reference type, it actually holds a reference to a location in memory where the object is stored. When you assign a reference type to another variable, you are creating a new reference to the same object in memory.`,
    ],
    code: `var x = 5;
var y = x;
y = 6;
console.log(x); // Output: 5
console.log(y); // Output: 6

var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
`,
    video: ``,
  },
  /* **** question 28 **** */
  {
    id: 28,
    question: `28. How would you explain the concept of "asynchronous programming" in JavaScript?`,
    answer: [
      `Asynchronous programming is a programming paradigm that allows multiple tasks to be executed concurrently, without blocking the execution of the main program. In JavaScript, asynchronous programming is achieved through the use of callbacks, promises, and async/await functions.`,
      `In traditional synchronous programming, each task is executed sequentially, one after the other. If a task takes a long time to complete, it can block the execution of the entire program, making it unresponsive.`,
      `Asynchronous programming allows tasks to be executed in the background, without blocking the main program. This allows for better responsiveness and smoother user experience. For example, when a webpage is loading data from a server, asynchronous programming allows the page to continue to respond to user input, even while the data is being fetched.`,
      "Callbacks, promises, and async/await functions are all mechanisms that allow JavaScript developers to write asynchronous code in a more readable and maintainable way. By using these mechanisms, developers can avoid nested callbacks and manage the flow of asynchronous code more easily.",
    ],
    code: ``,
    video: ``,
  },
  /* **** question 29 **** */
  {
    id: 29,
    question: `29. Explain the difference between a "callback", "promise" and "Async/Await" in JavaScript.?`,
    answer: [
      `In JavaScript, a "callback" is a function that is passed as an argument to another function and is invoked inside that function. The purpose of a callback is to allow asynchronous operations to be executed in a specific order. When an asynchronous operation is completed, the callback function is invoked to handle the result.`,
      `A "promise" is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to manage asynchronous operations and to handle their results when they are completed. They provide a more structured way to handle asynchronous code compared to callbacks. Promises have three states: "pending", "fulfilled", or "rejected".`,
      `Async/Await is a newer syntax for dealing with Promises. Async/Await is a way of writing asynchronous code that looks more like synchronous code. It makes asynchronous code easier to read and write.`,
      `Callbacks can lead to "callback hell", a situation where multiple nested callbacks make the code hard to read and maintain. Promises and Async/Await, on the other hand, provide a cleaner and more organized way to handle asynchronous operations, making the code easier to read and maintain. Additionally, promises have additional features such as chaining and error handling, which makes them more powerful than callbacks.`,
    ],
    code: `/** Callbacks **/
function getData(callback) {
  setTimeout(() => {
    callback('Data from server')
  }, 2000)
}
function displayData(data) {
  console.log(data)
}
getData(displayData) // Output: Data from server


/** Promises **/
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from server')
    }, 2000)
  })
}
getData()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })


/** Async/Await **/
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getData()`,
    video: ``,
  },
  /* **** question 30 **** */
  {
    id: 30,
    question: `30. What is the purpose of the bind() method in JavaScript? Provide an example.`,
    answer: [``, ``, ``],
    code: ``,
    video: ``,
  },
  /* **** question 31 **** */
  {
    id: 31,
    question: `31. What is the difference between "event bubbling" and "event capturing" in JavaScript?`,
    answer: [
      `Event capturing and event bubbling are two different phases in the event propagation process. Event capturing starts from the top-most element in the DOM hierarchy and moves down to the target element, while event bubbling starts from the target element and moves up to the top-most element.`,
      `On the other hand, event delegation is a technique in which a parent element listens to events that occur on its child elements. This is often used to improve performance and simplify code, especially when dealing with dynamically generated elements or a large number of similar elements.`,
      `In event delegation, you add an event listener to a parent element and use the event.target property to determine which child element was the actual target of the event. This allows you to handle events on many child elements with a single event listener on the parent element, rather than adding a separate event listener to each child element.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 32 **** */
  {
    id: 32,
    question: `32. How would you explain the concept of "callbacks hell" in JavaScript?`,
    answer: [
      `Callback hell is a situation where there are too many nested callbacks in asynchronous JavaScript code, making it difficult to read, maintain, and debug. This happens when a function requires the result of another function, and that function requires the result of yet another function, and so on. As a result, the code becomes deeply nested, making it difficult to read and debug. This can lead to bugs and errors that are hard to trace and fix.`,
    ],
    code: `getUserData(function(userData) {
  getProfile(userData, function(profileData) {
    getFriends(profileData, function(friendsData) {
      // do something with friendsData
    });
  });
});
`,
    video: ``,
  },
  /* **** question 33 **** */
  {
    id: 33,
    question: `33. Explain the difference between a "shallow copy" and a "deep copy" in JavaScript.?`,
    answer: [
      `In JavaScript, objects and arrays are reference types, which means that when we create a new variable and assign it to an object or array, the new variable actually references the original object or array.`,
      `A shallow copy means that only the first level of the object or array is copied. If the object or array contains other objects or arrays, those nested objects or arrays are still references to the original ones. So any changes made to the nested objects or arrays in the original will also affect the copied object or array.`,
      `A deep copy, on the other hand, means that the entire object or array is copied, including all nested objects or arrays. So any changes made to the original object or array will not affect the copied one.`,
    ],
    code: `/**** Shallow copy ****/
const original = { name: 'John', hobbies: ['reading', 'cooking'] };

const shallowCopy = Object.assign({}, original);

console.log(shallowCopy); // { name: 'John', hobbies: ['reading', 'cooking'] }

original.name = 'Jane';
original.hobbies.push('painting');

console.log(original); // { name: 'Jane', hobbies: ['reading', 'cooking', 'painting'] }
console.log(shallowCopy); // { name: 'John', hobbies: ['reading', 'cooking', 'painting'] }


/**** Deep copy ****/
const original = { name: 'John', hobbies: ['reading', 'cooking'] };

const deepCopy = JSON.parse(JSON.stringify(original));

console.log(deepCopy); // { name: 'John', hobbies: ['reading', 'cooking'] }

original.name = 'Jane';
original.hobbies.push('painting');

console.log(original); // { name: 'Jane', hobbies: ['reading', 'cooking', 'painting'] }
console.log(deepCopy); // { name: 'John', hobbies: ['reading', 'cooking'] }`,
    video: ``,
  },
  /* **** question 34 **** */
  {
    id: 34,
    question: `34. Explain the purpose of the "use strict" directive in JavaScript.?`,
    answer: [
      `It prevents the use of undeclared variables by throwing an error when an undeclared variable is used.`,
      `It disallows duplicate parameter names in function definitions.`,
      `It makes it impossible to assign values to read-only properties and global objects.`,
      `It disallows the use of some reserved keywords as variable names, such as "eval" and "arguments".`,
      `In short, the "use strict" directive helps to ensure that your JavaScript code is executed in a more secure and reliable way, by enforcing a stricter set of rules.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 35 **** */
  {
    id: 35,
    question: `35. What is the difference between "bind", "call", and "apply" methods in JavaScript?`,
    answer: [
      `In JavaScript, bind(), call(), and apply() are methods that allow you to change the this keyword inside a function.`,
      `bind() creates a new function with the same body as the original function but with a different this value, and returns that function without calling it. This can be useful for creating a function with a fixed this value that you can pass around as a callback.`,
      `call() and apply() both call the function immediately with a specified this value, and can also pass arguments to the function. The difference between call() and apply() is in how they pass arguments. call() accepts an argument list, while apply() accepts an array of arguments.`,
    ],
    code: `const person = {
  name: 'John',
  sayHi: function(greeting) {
    console.log({greeting}, my name is {this.name});
  }
};

const otherPerson = {
  name: 'Jane'
};

// using call()
person.sayHi.call(otherPerson, 'Hello');
// output: Hello, my name is Jane

// using apply()
person.sayHi.apply(otherPerson, ['Hi there']);
// output: Hi there, my name is Jane

// using bind()
const greet = person.sayHi.bind(otherPerson, 'Hey');
greet();
// output: Hey, my name is Jane
`,
    video: ``,
  },
  /* **** question 36 **** */
  {
    id: 36,
    question: `36. What is the purpose of the Array.from() method in JavaScript? Provide an example.?`,
    answer: [
      `The Array.from() method in JavaScript creates a new array instance from an array-like or iterable object. This method is useful when working with objects that are not actually arrays but have a similar structure, like the NodeList returned by document.querySelectorAll().`,
    ],
    code: `// creating an array-like object
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// using Array.from() to create a new array
const newArray = Array.from(arrayLike);

console.log(newArray); // output: ['a', 'b', 'c']


const str = 'hello';
const newArray = Array.from(str);

console.log(newArray); // output: ['h', 'e', 'l', 'l', 'o']

`,
    video: ``,
  },
  /* **** question 37 **** */
  {
    id: 37,
    question: `37. what is event loop in javascript ?`,
    answer: [
      `The event loop is one of the most important concepts in JavaScript that determines how JavaScript handles the execution of multiple tasks. JavaScript is a single-threaded language, meaning it can only execute one task at a time, but it can delegate time-consuming tasks to other processes or threads.`,
      `The event loop is the mechanism that allows JavaScript to handle asynchronous events, such as user input, server responses, or timers, in a non-blocking way. It continuously checks the call stack and the message queue to see if there are any functions waiting to be executed.`,
      `When the call stack is empty, the event loop checks the message queue for the next event. If there is an event, the associated callback function is added to the call stack for execution. If there are no events, the event loop continues to wait for new events to arrive.`,
      `In this way, the event loop manages the execution of asynchronous code in JavaScript, allowing it to handle multiple tasks simultaneously without blocking the execution of other code.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 38 **** */
  {
    id: 38,
    question: `38. What is the precedence in the event loop? What is the highest precedence between Promise and setTimeout?`,
    answer: [
      `In the JavaScript event loop, tasks are prioritized based on their type and order. The tasks are divided into two main categories:`,
      `Synchronous Tasks: These tasks are executed immediately and are given the highest priority. They are executed in the order in which they are received.`,
      `Asynchronous Tasks: These tasks are not executed immediately, but are put in a queue and executed only when the stack is empty. They are further divided into two categories:

      a. Microtasks: These are high-priority tasks and are executed immediately after the current task has completed. Examples include Promise callbacks and process.nextTick().
      
      b. Macrotasks: These are low-priority tasks and are executed after all the microtasks have been completed. Examples include setTimeout() and setInterval().`,
      `Promise has a higher precedence over setTimeout in the event loop. When a Promise resolves, it immediately goes to the microtask queue, which has a higher priority than the task queue where setTimeout callbacks are queued.`,
      `This means that even if a Promise and a setTimeout are both ready to be executed, the Promise will be executed first before the setTimeout callback.`,

      `The event loop follows this sequence of execution:

      1. Execute a Synchronous Task if there is any.
      
      2. Execute all Microtasks that are currently in the queue.
      
      3. Wait for I/O operations or other asynchronous tasks to complete and add their respective callbacks to the task queue.
      
      4. Execute all Macrotasks that are currently in the queue.
      
      5. Go back to step 1 and repeat the process.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 39 **** */
  {
    id: 39,
    question: `39. what are the ES6 features ?`,
    answer: [
      `1. let and const keywords for block-scoped variables
2. Arrow functions for concise function syntax
3. Template literals for easier string interpolation
4. Classes for defining object blueprints
5. Enhanced object literals for simpler object definition
6. Spread and rest operators for easily manipulating arrays and objects
7. Destructuring for extracting values from arrays and objects
8. Default function parameters for more robust function declarations
9. Promises for improved handling of asynchronous operations
10. Modules for organizing code into reusable components`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 40 **** */
  {
    id: 40,
    question: `40. what is difference between spread operator and rest operator ? give me one example with array and object ?`,
    answer: [
      `spread operator is used to expand an array or object into individual elements. `,
      `Rest operator is used to represent an indefinite number of arguments as an array.`,
    ],
    code: `/**spread operator**/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'Toronto', country: 'Canada' };
const combined = { ...obj1, ...obj2 };

console.log(combined); // { name: 'Alice', age: 25, city: 'Toronto', country: 'Canada' }


/**Rest operator**/
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age, ...rest } = person;

console.log(name); // 'John'
console.log(age); // 30
console.log(rest); // { city: 'New York', country: 'USA' }`,
    video: ``,
  },
  /* **** question 41 **** */
  {
    id: 41,
    question: `41. what is Destructuring in JavaScript?`,
    answer: [
      `Destructuring is a feature in JavaScript that allows us to extract data from arrays and objects into separate variables.`,
    ],
    code: `const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]


const person = {
  name: "John",
  age: 30,
  city: "New York"
};
const { name, age, city } = person;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"

`,
    video: ``,
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
