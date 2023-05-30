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
  {
    id: 42,
    question: `42. what is temporial dead zone in javascript ?`,
    answer: [
      `The Temporal Dead Zone (TDZ) in JavaScript is a behavior that is related to the way that variables are hoisted and scoped in the language. It's a concept that's related to the use of the let and const keywords to declare variables.`,
      `When a variable is declared using let or const, it is not available for use until it has been fully initialized. This means that there is a "dead zone" in the code, between the point where the variable is declared and the point where it is initialized, where it cannot be accessed. Attempting to access a variable during this period will result in a reference error.`,
    ],
    code: `console.log(x); // ReferenceError: x is not defined

let x = 5;`,
    video: `https://www.youtube.com/watch?v=HQm5OohZtB4`,
  },
  {
    id: 43,
    question: `43. Explain how does browser understands JSX/JS ?`,
    answer: [
      `JSX is a syntax extension for JavaScript that is commonly used with the React library to build user interfaces for web applications. When a web page containing JSX is loaded in a browser, the browser itself does not understand JSX directly. Instead, the JSX code must be transpiled into plain JavaScript code that the browser can interpret and execute.`,
      `To transpile JSX code into plain JavaScript code, developers use a tool called a JSX compiler or transpiler. One of the most popular JSX transpilers is Babel, which can be used to convert JSX code into JavaScript that is compatible with all modern browsers.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 44,
    question: `44. what is polyfill ? write a polyfill for forEach method ?`,
    answer: [
      `In web development, a polyfill is a piece of code that provides modern functionality on older browsers that do not natively support it. Polyfills typically use JavaScript to add new functionality to the browser by detecting if a feature is missing and then providing a custom implementation to fill the gap.`,
      `For example, the forEach method is a relatively new addition to the JavaScript language, and it may not be available on older browsers. A polyfill for the forEach method could be used to provide a similar functionality on those browsers that do not natively support it.`,
    ],
    code: `if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    for (var i = 0, len = this.length; i < len; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
`,
    video: ``,
  },
  {
    id: 45,
    question: `45. ES6/ES7 things you have used ?`,
    answer: [
      `ES6:
Arrow functions,
Template literals,
Destructuring assignment,
Spread syntax,
Rest parameters,
Classes,
let and const`,
      `ES7:
Promises,

Async/await`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 46,
    question: `47. why do we need arrow functions ?`,
    answer: [
      `Arrow functions are a feature introduced in ES6 that provide a more concise and cleaner syntax for writing function expressions in JavaScript. Here are a few reasons why they are useful:`,
      `1.Shorter syntax: Arrow functions have a shorter syntax than regular functions, which can make the code easier to read and write. They allow you to omit the function keyword and use a concise syntax for defining the function parameters and body.`,
      `2.Implicit return: Arrow functions have an implicit return feature that allows you to return a value without having to use the return keyword. If the function body consists of a single expression, that expression will be returned automatically. This can make the code more concise and easier to read.`,
      `3.this binding: In traditional functions, the value of the this keyword depends on how the function is called, which can sometimes lead to confusion and bugs. In arrow functions, the value of this is inherited from the surrounding lexical scope, which can make the code more predictable and easier to reason about.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 47,
    question: `48. what does objevct.freeze does ?`,
    answer: [
      `In JavaScript, Object.freeze() is a method that freezes an object by preventing new properties from being added to it, existing properties from being removed or modified, and the object's [[Prototype]] from being changed.`,
      `When an object is frozen, it becomes immutable, meaning that its properties cannot be changed. Any attempt to modify the object or its properties will fail silently in non-strict mode or throw a TypeError in strict mode.`,
    ],
    code: `const myObject = {
  name: 'John',
  age: 30
};

// Freeze the object
Object.freeze(myObject);

// Try to modify the object
myObject.name = 'Jane'; // This will fail silently in non-strict mode

console.log(myObject); // Output: { name: 'John', age: 30 }
`,
    video: ``,
  },
  {
    id: 48,
    question: `49. what is event bubbling and how to prevent it ?`,
    answer: [
      `Event bubbling is a mechanism in which events triggered on a child element of the DOM hierarchy will "bubble up" and be handled by parent elements in sequence until the top-level parent element is reached.`,
      `For example, if you have a button inside a div element and both have a click event listener, clicking on the button will trigger its click event first, followed by the click event of the div element. This happens because the click event bubbles up from the button to its parent elements in the DOM hierarchy.`,
      `In some cases, you may want to prevent event bubbling to avoid unwanted behavior or improve performance. To prevent event bubbling, you can use the event.stopPropagation() method inside the event listener of the child element. This method stops the event from propagating up the DOM hierarchy and prevents any parent elements from receiving the event.`,
      `Note that while preventing event bubbling can be useful in some cases, it can also make it harder to maintain and debug your code. Be sure to use it judiciously and only when necessary.`,
    ],
    code: `<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  const childElement = document.querySelector('#child');
  const parentElement = document.querySelector('#parent');

  childElement.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Child element clicked');
  });

  parentElement.addEventListener('click', function() {
    console.log('Parent element clicked');
  });
</script>
`,
    video: ``,
  },
  {
    id: 49,
    question: `49. Expain when you decide where to use class component over functional component ?`,
    answer: [
      `Performance: Functional components are generally faster and easier to optimize than Class components, especially if you are using React's memo or useCallback hooks to memoize props or functions. If your component does not need to maintain a state or use lifecycle methods, it is generally recommended to use a Functional component.`,
      `Code organization: If you have a large component with complex logic, it might be easier to organize your code using a Class component, especially if you have a lot of methods and helper functions. With a Class component, you can keep all of your logic within a single class, whereas with a Functional component, you might need to split your logic across multiple functions.`,
      `In summary, if you need to maintain a state or use lifecycle methods, you should use a Class component. If performance is a concern, or if your component does not need to maintain a state or use lifecycle methods, you should use a Functional component.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 50,
    question: `50. what are the security measures you take while building an application ?`,
    answer: [
      `Input validation: Validate user input to ensure that it is the expected format and length, and does not contain any malicious code or characters. Use input validation techniques such as whitelisting, blacklisting, and regular expressions to ensure that only valid input is accepted.`,
      `Authentication and authorization: Implement authentication and authorization mechanisms to ensure that only authorized users can access sensitive data and perform actions within the application. This may include using password policies, multi-factor authentication, and role-based access control.`,
      `Secure communication: Use secure communication protocols such as HTTPS and SSL/TLS to encrypt data in transit between the client and server. This helps to prevent man-in-the-middle attacks and eavesdropping.`,
      `Error handling: Implement proper error handling to prevent sensitive information from being leaked in error messages, and to ensure that any errors or exceptions are logged and reported appropriately.`,
      `Access control: Implement access control mechanisms to ensure that users can only access the data and functionality that they are authorized to access. This may include using role-based access control, attribute-based access control, and least privilege access.`,
      `Security testing: Perform regular security testing and code reviews to identify and address potential security vulnerabilities. This may include using automated vulnerability scanners, manual penetration testing, and code reviews.`,
      `Regular updates and patches: Keep your application and underlying infrastructure up-to-date with the latest security patches and updates to ensure that any known security vulnerabilities are addressed.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 51,
    question: `51. what is BOM/DOM ? and their different ?`,
    answer: [
      `BOM stands for Browser Object Model, and it represents the objects and methods provided by the browser itself. This includes objects such as window, history, navigator, and screen, which provide information about the browser and its environment. The BOM is not standardized and may vary between different browsers.`,
      `DOM, on the other hand, stands for Document Object Model, and it represents the objects and methods that represent the structure and content of an HTML or XML document. This includes elements such as document, element, and node, which allow you to access and manipulate the content of a web page. The DOM is standardized by the W3C and is consistent across different browsers.`,
      `The key difference between the BOM and DOM is that the BOM represents the browser and its environment, while the DOM represents the content of a web page. The BOM is used to perform tasks such as opening new windows, navigating back and forward in history, and detecting the user's screen resolution. The DOM, on the other hand, is used to manipulate the structure and content of a web page, such as adding, removing, or modifying HTML elements.`,
      `In summary, BOM and DOM are two different models used to represent a web page in a browser. The BOM represents the browser and its environment, while the DOM represents the content of a web page. The BOM is not standardized and may vary between different browsers, while the DOM is standardized by the W3C and is consistent across different browsers.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 52,
    question: `52. what is the difference between promise/async-await ? when should we use promise, when should we use async-await ?`,
    answer: [
      `Promises and async/await are both mechanisms for handling asynchronous operations in JavaScript.`,
      `Promises were introduced in ES6 and provide a way to handle asynchronous operations without using callbacks. A Promise represents a value that may not be available yet, but will be at some point in the future. Promises are chainable and can be used to handle success and failure of asynchronous operations.`,
      `Async/await, on the other hand, is a syntax introduced in ES2017 that allows you to write asynchronous code that looks like synchronous code. Async functions return Promises and use the await keyword to pause execution until a Promise is resolved. This makes it easier to write asynchronous code that is easy to read and understand.`,
      `Here are some general guidelines on when to use Promises vs. async/await:`,
      `1. Promises are a good choice when you need to handle a sequence of asynchronous operations that depend on each other. Promises can be chained together using .then() to ensure that each operation is executed in the correct order.`,
      `2. Async/await is a good choice when you have a complex asynchronous operation that involves multiple Promises. Async/await allows you to write asynchronous code that is more readable and easier to understand.`,
      `3. If you need to handle errors in a complex way, Promises might be a better choice. Promises provide a .catch() method that can be used to handle errors that occur during the execution of the Promise chain.`,
      `4. If you need to work with non-Promise-based APIs or libraries, you might need to use Promises. Many APIs and libraries still use callbacks, which can be wrapped in Promises to make them easier to work with.`,
      `In general, async/await is a more modern and readable way of handling asynchronous code, while Promises are a more low-level mechanism for handling asynchronous operations. Both Promises and async/await have their use cases and can be used together depending on the requirements of your application.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 53,
    question: `53. Uses of promises.all, promise.any ?`,
    answer: [
      `Both Promise.all() and Promise.any() are methods available on the Promise object in JavaScript, and they are useful for handling multiple Promises at once.`,
      `Promise.all() takes an array of Promises and returns a Promise that resolves with an array of the results when all of the Promises in the array have resolved. If any Promise in the array rejects, the returned Promise will reject with the reason of the first Promise that was rejected.`,
      `Promise.any() is a new method introduced in ES2021 that takes an array of Promises and returns a Promise that resolves with the value of the first Promise in the array that resolves. If all Promises in the array reject, the returned Promise will reject with an AggregateError containing the reasons of all rejected Promises.`,
      `In summary, Promise.all() is useful when you want to wait for multiple Promises to resolve before continuing, while Promise.any() is useful when you want to get the result of the first Promise that resolves out of multiple Promises.`,
    ],
    code: `//**Here's an example of using Promise.all():**//

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)); // [1, 2, 3]


//**Here's an example of using Promise.any():**//

const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'promise1 rejected'));
const promise2 = Promise.resolve('promise2 resolved');
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, 'promise3 rejected'));

Promise.any([promise1, promise2, promise3])
  .then(value => console.log(value)) // 'promise2 resolved'
  .catch(reasons => console.log(reasons)) // AggregateError: All promises were rejected

  
`,
    video: ``,
  },
  {
    id: 54,
    question: `54. Difference between function expression and function declaration ?`,
    answer: [
      `Function declarations are hoisted, while function expressions are not.`,
      `Function declarations define named functions, while function expressions can define anonymous functions or named functions assigned to a variable.`,
      `Function expressions can be used as part of an expression, while function declarations can only be used as standalone statements.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 55,
    question: `55. About "This" Output`,
    answer: [],
    code: `// ***regular function*** //
const obj = {
  name: "John",
  greet: function() {
    console.log(Hello, {this.name});
  }
};

obj.greet(); // output: Hello, John

const func = obj.greet;
func(); // output: Hello, undefined
-----------------------------------------

// ***arrow function*** //
const obj = {
  name: "John",
  greet: function() {
    const func = () => {
      console.log(Hello, {this.name});
    };
    func();
  }
};
obj.greet(); // output: Hello, John


const obj = {
  name: "John",
  greet: () => {
    console.log(Hello, {this.name});
  }
};
obj.greet(); // output: Hello, undefined

When using an arrow function as a method of an object, 
this is lexically scoped to the enclosing scope, 
which is the global scope in this case 
(since the arrow function is defined at the top level). 
Therefore, this.name will refer to the name property of the global object,
 which is undefined since it doesn't exist. 
 So the output of obj.greet() will be Hello, undefined.

-----------------------------------------


// ***Case 1: Global scope*** //
console.log(this); // output: Window (in browser) or global (in Node.js)
-----------------------------------------


// ***Case 2: Regular function with implicit binding*** //
const person = {
  name: "John",
  greet: function() {
    console.log(Hello, {this.name});
  }
};

person.greet(); // output: Hello, John
-----------------------------------------


// ***Case 3: Regular function with explicit binding*** //
function greet() {
  console.log(Hello, {this.name});
}

const person = { name: "John" };

greet.call(person); // output: Hello, John
greet.apply(person); // output: Hello, John

const boundGreet = greet.bind(person);
boundGreet(); // output: Hello, John
-----------------------------------------


// ***Case 4: Constructor functions*** //
const person = {
  name: "John",
  greet: function() {
    const func = () => {
      console.log(Hello, {this.name});
    };
    func();
  }
};
person.greet(); // output: Hello, John


const person = {
  name: "John",
  greet: () => {
    console.log(Hello, {this.name});
  }
};
person.greet(); // output: Hello, undefined

-----------------------------------------

// **Case 5: Arrow functions** //
const person = {
  name: "John",
  greet: function() {
    const func = () => {
      console.log(Hello, {this.name});
    };
    func();
  }
};

person.greet(); // output: Hello, John
-----------------------------------------


// ***Case 6: DOM event listeners*** //
const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log(this); // output: the <button> element that fired the event
});
-----------------------------------------

// ***Case 7: Function called without a context*** //
function greet() {
  console.log(this);
}

greet(); // output: undefined in strict mode, Window (in browser) or global (in Node.js) in non-strict mode
-----------------------------------------


// ***Case 8: Arrow function with no enclosing scope*** //
const func = () => {
  console.log(this);
};

func(); // output: undefined
-----------------------------------------


// ***Case 9: Object property with undefined value*** //
const obj = {
  prop: undefined,
  func: function() {
    console.log(this);
  }
};

obj.func(); // output: undefined
-----------------------------------------


// ***Case 10: Event listeners*** //
const button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log(this); // output: <button> element that fired the event
});

const func = button.addEventListener("click", function() {
  console.log(this); // output: undefined
}.bind(this));

`,
    video: ``,
  },
  {
    id: 56,
    question: `56. Debouncing in JavaScript ?`,
    answer: [
      `Debouncing is a technique in JavaScript programming that is used to limit the number of times a function is called. It is often used in scenarios where a function may be called multiple times in quick succession, such as when the user is typing into a search bar or resizing a window.`,
      `The basic idea behind debouncing is to delay the execution of a function until after a certain period of time has passed since the last time it was called. If the function is called again before this time period has elapsed, the timer is reset and the function is delayed again.`,
    ],
    code: `function debounce(func, delay) {
  let timeoutId;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}


const button = document.querySelector('button');

function handleClick() {
  console.log('Button clicked!');
}

const debouncedClick = debounce(handleClick, 1000);

button.addEventListener('click', debouncedClick);

`,
    video: ``,
  },
  {
    id: 57,
    question: `57. what is the use of dangeroslySetInnerHTML ?`,
    answer: [
      `dangerouslySetInnerHTML is a React method that allows you to render raw HTML content within a component. The name "dangerously" is used because it's easy to misuse this method and introduce security vulnerabilities, such as cross-site scripting (XSS) attacks, if you're not careful.`,
      `The dangerouslySetInnerHTML method is typically used when you need to render HTML content that has been generated dynamically, such as content retrieved from a database or API. By default, React escapes any HTML tags in the content to prevent XSS attacks, but if you use dangerouslySetInnerHTML, you can tell React to render the HTML as-is.`,
      `It's important to note that using dangerouslySetInnerHTML can introduce security vulnerabilities if you're not careful. You should always validate and sanitize any HTML content that you're rendering with this method to prevent XSS attacks. Additionally, you should only use this method when you trust the source of the HTML content, such as when rendering content that you've generated yourself.`,
    ],
    code: `function MyComponent(props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
  );
}
`,
    video: ``,
  },
  {
    id: 58,
    question: `58. why first query outout is 1 and second query output is undefined ?`,
    answer: [
      `In the first query, the output is 1 because the variable i is declared using the var keyword inside the function x(), which creates a variable with function scope. When the setTimeout function is called, it schedules the execution of the anonymous function inside it after a delay of 1000 milliseconds. By this time, the var i = 1 statement has already been executed, and the value of i is 1. So, when the anonymous function inside setTimeout is executed, it logs the value of i, which is 1.`,
      `In the second query, the output is undefined because the variable x is declared using the var keyword inside the function xyx(), which creates a variable with function scope. When the console.log(x) statement is executed, the JavaScript interpreter first looks for a locally scoped variable named x within the xyx() function. Since the variable x is declared locally within xyx(), but has not yet been assigned a value, the value of x is undefined at that point. So, when console.log(x) is executed, it outputs undefined.`,
    ],
    code: `function x() {
      setTimeout(function () {
        console.log(i);
      }, 1000);
      var i = 1;
    }
    x(); //Output: 1


var x = 21;
var xyx = function () {
  console.log(x);
  var x = 20;
};
xyx(); //Output: undefined
    `,
    video: ``,
  },
  {
    id: 59,
    question: `59. is that possible to change the name of object which is created using "const" ?`,
    answer: [
      `even though a is declared as a constant, it is still possible to modify the properties of the object it points to. Therefore, in the next line, the property name of the object is changed to "Coforge" using the dot notation to access the property.`,
      `Since a is still pointing to the same object in memory, the console.log(a.name) statement will output "Coforge", which is the new value assigned to the name property. The output will be:`,
      ``,
    ],
    code: `const a = {
  name: "NIIT",
  location: "Noida"
};

a.name = "Coforge";
console.log(a.name); //Output: Coforge
`,
    video: ``,
  },
  {
    id: 60,
    question: `60. What is the ouput of below code ?`,
    answer: [],
    code: `let a = [1, 2];
a.length = 0;
console.log(a); //Output: []
`,
    video: ``,
  },
  {
    id: 61,
    question: `61. What is the output of the following code when using var and let, and why do they produce different outputs?`,
    answer: [
      `With var:`,
      `The output of this code will be 10 lines of "10", each printed with a delay of 0 milliseconds due to the way the setTimeout() function works with var. This happens because with var, the variable i is declared with function scope, not block scope. When the setTimeout() function is called, it schedules the execution of the anonymous arrow function inside it after a delay of 0 milliseconds (due to the default timeout value of setTimeout()). By the time the anonymous arrow function is executed, the for loop has already completed, and the value of i is 10. Therefore, when the anonymous arrow function inside setTimeout() is executed, it logs the value of i, which is 10 in all cases, since that was the final value of i at the end of the loop.`,
      `With let:`,
      `If you replace var with let in the original code, the output will be 10 lines of 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 respectively. This happens because with let, the variable i is declared with block scope, which means it's a new i for each iteration of the loop. When the setTimeout() function is called, it schedules the execution of the anonymous arrow function inside it after a delay of 0 milliseconds. At that point, each iteration of the loop has its own value of i. Therefore, when the anonymous arrow function inside setTimeout() is executed, it logs the value of the i variable that was created in the corresponding iteration of the loop, resulting in the expected output of 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 respectively.`,
    ],
    code: `for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // Output:  10 lines of "10"


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // Output:  1,2,3...9
`,
    video: ``,
  },
  {
    id: 62,
    question: `62. Explain the below code ?`,
    answer: [
      `The code you provided is an immediately invoked function expression (IIFE) that declares a variable a and assigns it the value of b, which is set to 5. In JavaScript, when a variable is declared without the var, let, or const keyword, it becomes implicitly global. In this case, b is declared without var, making it a global variable.`,
      ` it's important to note that b would be accessible as a global variable outside the function scope, while a would only be accessible within the scope of the IIFE.`,
    ],
    code: `(function(){
  var a = b = 5;
})()`,
    video: ``,
  },
  {
    id: 63,
    question: `63. Explain below code ?`,
    answer: [
      `var a = 3;: This line declares a variable a and assigns it the initial value of 3.`,
      `var b = a++;: In this line, the current value of a (which is 3) is assigned to the variable b. The ++ operator is the post-increment operator, which means it increments the value of a after the assignment takes place. Therefore, b receives the initial value of a, which is 3, and then a is incremented to 4.`,
      `var c = ++a;: Here, the ++ operator is the pre-increment operator, which increments the value of a before the assignment. So, a is incremented to 5, and then that new value (5) is assigned to the variable c.`,
      `console.log(a, b, c);: This line outputs the values of a, b, and c to the console. At this point, a is 5 (as it was incremented in the previous step), b is 3 (as it received the initial value of a before the increment), and c is 5 (as it received the incremented value of a).`,
      `In summary, the code snippet demonstrates the difference between the post-increment (a++) and pre-increment (++a) operators. The post-increment operator (a++) assigns the current value of a to the variable and then increments a. On the other hand, the pre-increment operator (++a) increments a and then assigns the new value to the variable.`,
    ],
    code: `var a = 3;
var b = a++;
var c = ++a;
console.log(a, b, c); // Output: a=5; b=3; c=5;`,
    video: ``,
  },
  {
    id: 64,
    question: `64. What is Generator Function in Javascript ?`,
    answer: [
      `In JavaScript, a generator function is a special type of function that can be paused and resumed during its execution. It allows you to define an iterative algorithm by writing code that can yield multiple values over time, rather than returning a single value like regular functions.`,
      `Generator functions are useful for implementing lazy iteration and can be used to create custom iterable objects. They provide a powerful mechanism for controlling and generating sequences of values in a controlled and efficient manner.`,
    ],
    code: `function numberGenerator() {
  return 1;
  return 2;
}
console.log(numberGenerator()); // 1 Normal function will not execute 2nd return statement

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
    video: ``,
  },
  {
    id: 65,
    question: `65. console.log({} === {})? what is the output ?`,
    answer: [
      `The output of the code console.log({} === {}) would still be false.`,
      `In JavaScript, the === operator checks for strict equality between two objects. When comparing two objects with ===, it checks if the objects being compared are references to the exact same object in memory.`,
      `In this case, {} creates two separate object instances, and even though they may have the same properties and values, they are distinct objects occupying different memory locations. Therefore, the comparison evaluates to false because the two objects are not the same object in memory.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 66,
    question: `66 what is Minification ?`,
    answer: [
      `Minification is the process of reducing the size of a file by removing unnecessary characters and whitespace without affecting its functionality. It is commonly applied to JavaScript, CSS, and HTML files used in web development to optimize the delivery of web assets to users.`,
      `Removal of Whitespace and Comments: Extra spaces, line breaks, and comments that are not required for the code's functionality are removed. This includes both single-line and multi-line comments.`,
      `Shortening Variable and Function Names: Longer variable and function names are replaced with shorter, typically single-character, names. This reduces the size of the code without affecting its behavior. This technique is known as variable/function name mangling.`,
      `Compression of Textual Content: The text content of the file is compressed using algorithms like gzip or Brotli. These algorithms analyze the repetitive patterns in the text and replace them with shorter representations, further reducing the file size.`,
      `Concatenation and Combining Files: In web development, multiple JavaScript or CSS files may be combined into a single file to reduce the number of HTTP requests required to load the page. This reduces the overhead associated with individual file requests.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 67,
    question: `67 what is use of Minification ?`,
    answer: [
      `Reduced Network Transfer: Smaller file sizes lead to faster file transfers over the network, resulting in improved website performance. This is especially important for users with slower internet connections or accessing websites from mobile devices.`,
      `Faster Parsing: Removing unnecessary characters and reducing the overall size of the code results in faster parsing and execution by the browser. This helps to reduce the time taken to load and render web pages.`,
      `Bandwidth Savings: Minification reduces the amount of data transferred between servers and clients, resulting in reduced bandwidth usage and cost savings, especially for high-traffic websites.`,
      `Improved Caching: Minified files can be cached more effectively by web browsers and content delivery networks (CDNs) because they have smaller file sizes. This leads to faster subsequent page loads for returning users.`,
      `Minification is commonly performed as part of the build process or deployment pipeline for web applications. There are several minification tools and libraries available that automate the process and make it easy to integrate into the development workflow.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 68,
    question: `68 what is IIFEs ? one usecase of IIFE ?`,
    answer: [
      `IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that is executed immediately after it is defined. The main purpose of using an IIFE is to create a new scope for the function, preventing variable name conflicts and keeping the global scope clean.`,
      `The advantage of using an IIFE in this case is that the count variable is not accessible from the outside, preventing direct modification of the counter value. The only way to interact with the counter is through the methods exposed in the returned object.`,
      `IIFEs are also commonly used in module patterns and older JavaScript code where module systems were not available, as they provide a way to achieve encapsulation and maintain private state within a function scope.`,
    ],
    code: `var counter = (function() {
  var count = 0;  // Private variable

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  // Expose public interface
  return {
    increment: increment,
    decrement: decrement,
    getCount: getCount
  };
})();

console.log(counter.getCount()); // 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
`,
    video: ``,
  },
  {
    id: 68,
    question: `68 what is pass by value / pass by reference ?`,
    answer: [
      `"Pass by value" and "pass by reference" are two different approaches for passing arguments to functions in programming languages. They determine how the values of variables are accessed and modified within a function. Let's explore each concept:`,
      `In pass by value, a copy of the value of the variable is passed to the function. Any modifications made to the parameter inside the function do not affect the original variable outside the function.`,
      `Typically, primitive data types such as numbers, booleans, and strings are passed by value.`,
    ],
    code: `function increment(num) {
  num += 1;
  console.log(num); // 6
}

var numValue = 5;
increment(numValue);
console.log(numValue); // 5 (unchanged)
`,
    video: ``,
  },
  {
    id: 69,
    question: `69. what is pass by reference ?`,
    answer: [
      `In pass by reference, a reference to the original variable is passed to the function. Any modifications made to the parameter inside the function will affect the original variable outside the function.`,
      `When a function receives a reference to an object or array, modifications made to the parameter inside the function will be reflected in the caller's scope.`,
      `Pass by reference is typically used for complex data types like objects and arrays.`,
    ],
    code: `function updateArray(arr) {
  arr.push(4);
  console.log(arr); // [1, 2, 3, 4]
}

var arrayRef = [1, 2, 3];
updateArray(arrayRef);
console.log(arrayRef); // [1, 2, 3, 4] (modified)
`,
    video: ``,
  },
  {
    id: 70,
    question: `70 what is difference b/w await and yield keyword ?`,
    answer: [
      `The await keyword is used in asynchronous functions, which are functions that perform asynchronous operations and return promises. It can only be used inside an async function.`,
      `When await is used before a promise, it pauses the execution of the async function until the promise is fulfilled or rejected.`,
      `The yield keyword is used in generator functions to pause the execution of the function and produce a value.`,
      `Generator functions are special functions that can be paused and resumed, allowing for the generation of a sequence of values over time.`,
      `Each time the yield keyword is encountered in a generator function, it pauses the function's execution and returns a value. The function can later be resumed from where it left off.`,
      `Generator functions are typically used with iterators to generate a sequence of values lazily, on-demand.`,
      `In summary, await is used in asynchronous functions to pause and wait for promises to resolve, while yield is used in generator functions to pause and produce a sequence of values. Both keywords help manage asynchronous and sequential code execution, but in different contexts.`,
    ],
    code: `function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
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
