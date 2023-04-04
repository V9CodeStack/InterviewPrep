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
