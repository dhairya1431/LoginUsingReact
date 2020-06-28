import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Further from "./components/Further";
import About from "./components/About";

/** Main component of the applications */

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Further} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
