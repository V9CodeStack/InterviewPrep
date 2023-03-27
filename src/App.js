// npm install prismjs

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import JavaScript from "./components/JavaScript";
import ReactJs from "./components/ReactJs";
import Html from "./components/Html";
import Css from "./components/Css";
import JsvsPy from "./components/JsvsPy";

import "./App.css";

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/InterviewPrep/" component={JavaScript} />
          <Route exact path="/Reactjs" component={ReactJs} />
          <Route exact path="/html" component={Html} />
          <Route exact path="/css" component={Css} />
          <Route exact path="/jsvspy" component={JsvsPy} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
