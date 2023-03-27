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
