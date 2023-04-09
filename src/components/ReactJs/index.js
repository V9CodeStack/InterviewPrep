import { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./index.css";

const reactjsobj = [
  /* **** question 1 **** */
  {
    id: 1,
    question: `1. Explain the difference between state and props in React. ?`,
    answer: [
      `Props: Short for "properties," props are immutable data that is passed down from a parent component to a child component. They are used to configure and customize a component based on the needs of the parent component. A child component cannot modify its own props; they are read-only. Props can be any type of data, including numbers, strings, objects, or functions.`,
      `State: State represents the internal data of a component and can be modified within the component using the setState() method. State changes trigger re-renders of the component and any child components that depend on it. State should be used for data that is local and private to the component and cannot be modified by other components. Like props, state can also be any type of data.`,
      `In summary, props are used to pass data down from a parent to a child component, while state is used to manage internal data of a component that can change over time.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 2 **** */
  {
    id: 2,
    question: `2. What are the lifecycle methods of React?`,
    answer: [
      `componentDidMount(): This method is called after the component is mounted (rendered) on the DOM. It is a good place to initialize data that requires DOM nodes, such as making an API call to fetch data.`,
      `componentDidUpdate(prevProps, prevState): This method is called after the component is updated, either from a change in props or state. It is a good place to update the component's data, such as making another API call to fetch new data.`,
      `componentWillUnmount(): This method is called just before the component is removed from the DOM. It is a good place to clean up any resources used by the component, such as cancelling timers or removing event listeners.`,
      `shouldComponentUpdate(nextProps, nextState)`,
      `getDerivedStateFromProps(props, state)`,
      `getSnapshotBeforeUpdate(prevProps, prevState)`,
      `componentDidCatch(error, info)`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 3 **** */
  {
    id: 3,
    question: `3. What is the Virtual DOM in React and how does it improve performance?`,
    answer: [
      `When a change occurs, React first updates the Virtual DOM and then compares it to the previous version of the Virtual DOM to find the minimal set of changes required to update the actual DOM. This process is known as "reconciliation."`,
      `By using the Virtual DOM, React reduces the number of direct manipulations to the actual DOM, which can be slow and expensive. Updating the Virtual DOM is fast and lightweight because it only updates the parts of the UI that have changed. Additionally, by finding the minimal set of changes required, React minimizes the number of operations needed to update the actual DOM.`,
      `Overall, the Virtual DOM helps to improve performance by reducing the amount of work required to update the UI, resulting in faster and smoother rendering of React components.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 4 **** */
  {
    id: 4,
    question: `4. What are Higher-Order Components (HOCs) in React?`,
    answer: [
      `Higher-Order Components (HOCs) are a pattern in React that allows developers to reuse component logic across multiple components. HOCs are functions that take a component as an argument and return a new component with additional functionality.`,
      `The basic idea behind HOCs is to separate concerns between components, such as rendering UI and fetching data. For example, a component might need to fetch data from an API and render it. Instead of putting both of these concerns in one component, we can use an HOC to handle the data fetching and return a new component that renders the data.`,
      `HOCs are often used for cross-cutting concerns, such as authentication, logging, or data fetching. By wrapping a component with an HOC, we can add these features to multiple components without duplicating code.`,
      `HOCs are a powerful pattern in React, but they can also make the component hierarchy more complex and introduce additional layers of abstraction. It is important to use them judiciously and only when necessary.`,
    ],
    code: `/** App.js **/
import React from "react";
import Hoc from "./Hoc";

const App = (props) => {
  return <h1>Welcome User !! {props.name}</h1>;
};
export default Hoc(App);


/** Hoc.js **/
import { Component } from "react";

const Hoc = (Component) => {
  return class extends Component {
    state = { auth: true };

    render() {
      return (
        <div>
          {this.state.auth ? <Component name="name" /> : <h1>Please Login</h1>}
        </div>
      );
    }
  };
};
`,
    video: `https://www.youtube.com/watch?v=y6S7j6ny6AQ`,
  },
  /* **** question 5 **** */
  {
    id: 5,
    question: `5. What is Redux and why is it used in React?`,
    answer: [
      `Redux is a state management library for JavaScript applications. It provides a predictable state container to manage the state of an application in a centralized manner, making it easier to reason about changes to the state and allowing for easier debugging and testing.`,
      `Redux is commonly used in React applications to manage the state of components across the application. Since React is a component-based library, data can be passed between components using props. However, when the application grows in size and complexity, it can become difficult to manage the state of components across the application. Redux simplifies this process by providing a centralized store where the state of the entire application can be managed.`,
      `In summary, Redux is used in React to manage the state of an application in a predictable, centralized, and efficient manner, which can help improve the overall performance and maintainability of the application.`,
    ],
    code: ``,
    video: `https://www.youtube.com/watch?v=Or2_k1bMYfI`,
  },
  /* **** question 6 **** */
  {
    id: 6,
    question: `6. Explain the concept of React Hooks.?`,
    answer: [
      `React Hooks are a feature introduced in React 16.8 that allows developers to use state and other React features in functional components. Prior to Hooks, state and other React features were only available in class components.`,
      `Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. There are several built-in Hooks in React, including useState(), useEffect(), useContext(), and many more.`,
      `The most commonly used Hook is useState(), which allows functional components to use state. useState() returns an array with two values: the current state and a function to update the state. By using this Hook, functional components can now manage state, and re-render when the state changes.`,
      `The useEffect() Hook is used to handle side effects in functional components, such as fetching data from an API or setting up event listeners. It allows functional components to manage their lifecycle events, such as component did mount and component did update.`,
      `Overall, Hooks provide a simpler and more consistent way to reuse logic and manage state in functional components. They allow functional components to have the same features and capabilities as class components, making them more powerful and flexible.`,
      `useState - Allows you to add state to functional components`,
      `useEffect - Allows you to run a function after the component has rendered`,
      `useContext - Allows you to use a context in your component`,
      `useReducer - Allows you to manage more complex state in your component`,
      `useCallback - Allows you to memoize functions so they don't have to be re-created on every render`,
      `useMemo - Allows you to memoize the result of a function so it doesn't have to be re-computed on every render`,
    ],
    code: `import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`,
    video: ``,
  },
  /* **** question 7 **** */
  {
    id: 7,
    question: `7. How does React handle events?`,
    answer: [
      `React handles events in a cross-browser compatible way, using a synthetic event system. This means that instead of directly handling events in the browser, React uses a virtual event system that captures and normalizes events across all browsers.`,
      `Overall, React's event system provides a consistent and cross-browser compatible way to handle events in React components.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 8 **** */
  {
    id: 8,
    question: `8. What are controlled and uncontrolled components in React?`,
    answer: [
      `Controlled components: Controlled components are components that are fully controlled by React. This means that the component's value is controlled by React state, and any changes to the value are handled by updating the state. In other words, the component's value is always derived from the state of the parent component, and any changes to the value are communicated to the parent component via callbacks.`,
      `Uncontrolled components: Uncontrolled components are components that rely on the browser to handle user input. The component's value is read directly from the DOM using a ref, and changes to the value are not controlled by React state. Instead, any changes to the value are handled by the browser's default behavior.`,
      `In summary, controlled components are fully controlled by React state, while uncontrolled components rely on the browser to handle user input. The choice between controlled and uncontrolled components depends on the specific requirements of the component and the application.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 9 **** */
  {
    id: 9,
    question: `9. Explain the concept of React Router and how it is used.?`,
    answer: [
      `React Router is a popular routing library for React that allows you to create single-page applications with multiple views and URLs. It enables you to define routing rules that map specific URLs to specific components, allowing you to create a dynamic user interface that updates based on the URL.`,
      `Overall, React Router provides a powerful and flexible way to manage routing in React applications, allowing you to create dynamic user interfaces that respond to changes in the URL.`,
    ],
    code: `import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}
`,
    video: ``,
  },
  /* **** question 10 **** */
  {
    id: 10,
    question: `10. How do you optimize a React application's performance?`,
    answer: [
      `Use React.memo: This is a higher-order component that can be used to memoize a component, meaning that it will only re-render when its props have changed.`,
      `Use shouldComponentUpdate: This lifecycle method can be used to optimize a component's rendering by preventing unnecessary updates. By comparing the current props and state to the previous ones, you can determine whether the component needs to be re-rendered or not.`,
      `Use the virtual DOM effectively: The virtual DOM is one of the key features of React, and it can greatly improve performance by reducing the number of actual DOM updates. Make sure you're using it effectively by minimizing the number of DOM elements you're manipulating and using the key prop to help React identify which elements have changed.`,
      `Use code splitting: Code splitting is a technique that involves breaking your application's code into smaller chunks that can be loaded on demand, rather than all at once. This can improve performance by reducing the amount of code that needs to be loaded and parsed initially.`,
      `Use lazy loading: Lazy loading is a technique that involves deferring the loading of certain components until they are actually needed. This can reduce the initial load time of your application and improve performance.`,
      `Optimize your images and other assets: Large images and other assets can slow down your application's performance. Make sure you're optimizing them for web use by compressing them and reducing their file size.`,
      `Use server-side rendering: Server-side rendering can greatly improve the initial load time of your application by rendering the initial HTML on the server, rather than waiting for it to be generated by the client.`,
      `Use profiling tools: React comes with a built-in profiling tool that can help you identify performance bottlenecks in your application. Use this tool to identify areas that need optimization and make targeted improvements.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 11 **** */
  {
    id: 11,
    question: `11. what is pure component in React ?`,
    answer: [
      `In React, a pure component is a component that doesn't depend on any state or props other than those passed to it. A pure component is only re-rendered when the props passed to it change.`,
      `To create a pure component in React, you can either use the React.PureComponent class or write a custom component that extends React.Component and implements the shouldComponentUpdate() lifecycle method.`,
      `The shouldComponentUpdate() method is used to determine if a component should be updated or not. By default, it returns true which means that the component will always update when its props or state change. However, you can override this method to provide your own implementation that determines when the component should update based on its props and state.`,
      `Using pure components can improve performance in React by reducing the number of unnecessary re-renders, especially in large and complex applications.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 12 **** */
  {
    id: 12,
    question: `12. what is alternative of component did mount in functional component ?`,
    answer: [
      `In functional components, we can use the useEffect hook as an alternative to componentDidMount and componentWillUnmount lifecycle methods.`,
      `To achieve the same functionality as componentDidMount, we can use useEffect with an empty dependency array []. This will execute the effect only once, after the initial render.`,
      ,
    ],
    code: `import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // code to be executed after the component mounts
    return () => {
      // code to be executed before the component unmounts
    }
  }, []); // empty dependency array indicates this effect should only be executed once
  return (
    // component rendering
  );
}
`,
    video: ``,
  },
  /* **** question 13 **** */
  {
    id: 13,
    question: `13. what is alternative of component will unmount in functional component?`,
    answer: [
      `In functional components, we can use the useEffect hook as an alternative to componentDidMount and componentWillUnmount lifecycle methods.`,
      `To achieve the same functionality as componentWillUnmount, we can return a function from the useEffect callback. This function will be executed before the component unmounts.`,
      ,
    ],
    code: `import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // code to be executed after the component mounts
    return () => {
      // code to be executed before the component unmounts
    }
  }); // no dependency array indicates this effect should execute on every re-render
  return (
    // component rendering
  );
}
`,
    video: ``,
  },
  /* **** question 14 **** */
  {
    id: 14,
    question: `14. what is useRef ? give sample example `,
    answer: [
      `useRef is a hook in React that provides a mutable reference object that persists throughout the lifecycle of a component. It can be used to store a reference to a DOM element, to store a value that is mutable but doesn't need to trigger a re-render, or to store any other value that needs to persist between renders.`,
    ],
    code: `import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = 'Button clicked';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
`,
    video: ``,
  },
  /* **** question 15 **** */
  {
    id: 15,
    question: `15. what is Router and write s simple example of two page Router ?`,
    answer: [
      `In React, Router is used to manage the navigation of components in a Single Page Application (SPA). It allows you to create different routes for your application, so that when the user enters a specific URL, a particular component will be rendered on the page.`,
    ],
    code: `import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
`,
    video: ``,
  },
  /* **** question 16 **** */
  {
    id: 16,
    question: `16. How would you handle the situation of a UI crash during the rendering part in kreact, for both functional and component-based components?`,
    answer: [
      `In React, if the UI crashes during rendering, we can use an Error Boundary to handle the situation. In kreact, we can achieve this by creating a Component or Functional Component that implements the componentDidCatch() method to catch any errors that occur during rendering.`,
      `For a Class Component, we can create an Error Boundary component by implementing the componentDidCatch()`,
      `For a Functional Component, we can use a higher-order component to wrap our component `,
    ],
    code: `//**Class Component**//
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
// We can then wrap any component we want to protect with the ErrorBoundary component as follows:
<ErrorBoundary>
  <ComponentThatMightCrash />
</ErrorBoundary>


//**Functional Component**//
function withErrorBoundary(Component) {
  return function WrappedComponent(props) {
    const [hasError, setHasError] = useState(false);
    function componentDidCatch(error, info) {
      console.log(error, info);
      setHasError(true);
    }
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <Component {...props} />;
  }
}
// We can then wrap any functional component we want to protect with the withErrorBoundary higher-order component as follows:
const ComponentThatMightCrash = withErrorBoundary(function MyComponent(props) {
  // Component code here
});

`,
    video: ``,
  },
  /* **** question 17 **** */
  {
    id: 17,
    question: `17. using class component, fetch data from API and filter data only if the age is < 50 ?`,
    answer: [],
    code: `import { Component } from "react";

class App extends Component {
  state = { mainData: [] };

  fetchData = async () => {
    const url =
      "https://hub.dummyapis.com/employee?noofrecords=10&idStarts=1001";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ mainData: data });
  };

  componentDidMount() {
    this.fetchData();
  }

  filterdData = (mainData) => {
    const applyFilter = mainData.filter((eachData) => eachData.age < 50);
    return applyFilter;
  };

  render() {
    const { mainData } = this.state;
    const filterData = this.filterdData(mainData);

    return (
      <div>
        <ul>
          {filterData.map((eachData) => (
            <li key={eachData.id}>
              {eachData.firstName} {eachData.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// Output
Toni 37
Mabel 39
Meredith 46
Kris 25
Libby 27
`,
    video: ``,
  },
  /* **** question 18 **** */
  {
    id: 18,
    question: `18. using functional component, fetch data from API and filter data only if the age is < 50 ?`,
    answer: [],
    code: `import { useEffect, useState } from "react";

const App = () => {
  const [mainData, setMainData] = useState([]);

  const fetchData = async () => {
    const url = "https://hub.dummyapis.com/employee?noofrecords=10&idStarts=1001";
    const response = await fetch(url);
    const data = await response.json();
    setMainData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterdData = (mainData) => {
    const applyFilter = mainData.filter((eachData) => eachData.age < 50);
    return applyFilter;
  };

  const filterData = filterdData(mainData);

  return (
    <div>
      <ul>
        {filterData.map((eachData) => (
          <li key={eachData.id}>
            {eachData.firstName} {eachData.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// Output
Toni 37
Mabel 39
Meredith 46
Kris 25
Libby 27
`,
    video: ``,
  },
  /* **** question 19 **** */
  {
    id: 19,
    question: `19. Lifecycle methods In React functional components ?`,
    answer: [
      `In React functional components, lifecycle methods can be implemented using the useEffect hook. The useEffect hook is a function that gets called after every rendering of a component. It allows us to define some side-effects, such as fetching data, manipulating the DOM, or subscribing to a WebSocket. Here are some examples:`,
    ],
    code: `1. componentDidMount() equivalent in functional component:

import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This will be called after the first render
    // Add the logic for componentDidMount here
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

 
2. componentDidUpdate() equivalent in functional component:

import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will be called after every render
    // Add the logic for componentDidUpdate here
    document.title = Count: {count};
  });

  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}


3. componentWillUnmount() equivalent in functional component:

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This will be called after the first render
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // This function will be called when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return <div>{seconds} seconds</div>;
}
 `,
    video: ``,
  },
  /* **** question 20 **** */
  {
    id: 20,
    question: `20. what is useReducer ?`,
    answer: [
      `useReducer is a hook in React that allows you to manage state by dispatching actions that update the state based on the previous state. It is similar to Redux, but built into React. Here is a simple example:`,
    ],
    code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
`,
    video: ``,
  },
  /* **** question 21 **** */
  {
    id: 22,
    question: `22. what is middleware in Redux ? what is purpose of middleware ?`,
    answer: [
      `In Redux, middleware is a way to modify the behavior of the dispatch function. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer. Middleware allows you to add additional functionality to Redux, such as logging, handling asynchronous actions, or modifying actions before they reach the reducer.`,
      `The purpose of middleware is to provide a way to add custom behavior to Redux without modifying the core library. It allows developers to add reusable code that can be shared across multiple projects. Middleware is a way to separate concerns and make the code more modular and easier to maintain.`,
      `Logging middleware: This middleware logs all dispatched actions and the resulting state changes.`,
      `Thunk middleware: This middleware allows you to write action creators that return a function instead of an action object. This is useful for handling asynchronous actions, such as fetching data from an API.`,
      `Saga middleware: This middleware allows you to handle complex side effects, such as calling multiple APIs or dispatching multiple actions in response to a single action.`,
      `Overall, middleware in Redux is a powerful tool for adding functionality to the library and customizing it to fit the needs of your application.`,
    ],
    code: `const logMiddleware = store => next => action => {
  if (action.type === 'ADD_ITEM') {
    console.log('Item added:', action.payload);
  }
  return next(action);
}

const store = createStore(reducer, applyMiddleware(logMiddleware));

In this example, logMiddleware is a function that takes the Redux store as an argument 
and returns another function that takes next as an argument. next is a function that 
represents the next middleware or the reducer that will handle the action. Finally, 
the middleware returns a function that takes action as an argument.

When an action is dispatched to the store, the middleware intercepts it and logs the 
message before passing the action on to the next middleware or the reducer.
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

class ReactJs extends Component {
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
      ? this.sortByAscending(reactjsobj, "id")
      : this.sortByDescending(reactjsobj, "id");
    const sortingText = sortingFlag ? "Sort Desc" : "Sort Asc";

    return (
      <div className="main-container">
        <div className="btn-container">
          <h1 className="obj-len">Total Questions: {reactjsobj.length}</h1>
          <button className="button" onClick={this.onClickSorting}>
            {sortingText}
          </button>
        </div>
        <div className="about-container">
          {reactjsobj.map((eachItem) => (
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
export default ReactJs;
