import React, { Component } from "react";
// import "./HomePage.css";

class HomePage extends Component {
  // state = {};
  render() {
    return (
      <div className="">
        <div className="main-page">
          <div className="top-section">
            <h1>Hello World</h1>
          </div>
          <div className="bottom-section">
            <button onClick={this._handleLogout}>LOGOUT</button>
          </div>
          <div className="signiture">
            <h1>Designed by Tarek El-Hajjaoui</h1>
            <footer>© Copyright 2018 Tarek El-Hajjaoui</footer>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
