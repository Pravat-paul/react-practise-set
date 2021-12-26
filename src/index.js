import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Navigation from "./navigation/navigation";
import Test from './methodComponents/Test';
import TodoApp from "./methodComponents/todos/TodoApp";
import ButtonClickApp from "./classComponents/buttonClickApp";
import Clock from "./classComponents/clock";
import ToggleButton from "./classComponents/toggleButton";
import Greeting from "./methodComponents/greeting/greeting";
import TemperatureCalculateApp from "./methodComponents/temperatureConversion/temperatureCalculateApp";
import reportWebVitals from "./reportWebVitals";

const Home = lazy(() => import('./methodComponents/home'));

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/todo" component={TodoApp} />
        <Route exact path="/buttonClick" component={ButtonClickApp} />
        <Route exact path="/toggleButton" component={ToggleButton} />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/greeting" component={Greeting} />
        <Route
          path="/temperatureConversion"
          component={TemperatureCalculateApp}
        />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
