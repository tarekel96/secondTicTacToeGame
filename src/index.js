import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./index.css";
import App from "./App";

/* Here we will create our routes right off the bat in order to 
prevent the user from getting very far in our app without authentication. */
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>,
  document.getElementById("root")
);
