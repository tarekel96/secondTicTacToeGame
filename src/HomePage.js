import React, { Component } from "react";
import "./HomePage.css";
import { Button } from "react-bootstrap";

class HomePage extends Component {
  // state = {};

  redirectUser(e) {
    e.preventDefault();
    window.location.href = "/App";
  }
  render() {
    return (
      <div className="">
        <div className="main-page">
          <div className="top-section">
            <h1 id="intro">Welcome to Tic Tacs & Toes!</h1>
          </div>
          <div class="mid" />
          <div className="bottom-section">
            <Button
              id="startButton"
              className="border border-dark"
              bsStyle="danger"
              bsSize="large"
              active
              onClick={this.redirectUser}
            >
              START
            </Button>
          </div>
          <div id="desContainer">
            <h3 id="description">Press START to Begin</h3>
          </div>
          <div className="signiture">
            <h3 id="design">Designed by Tarek El-Hajjaoui</h3>
            <footer>© Copyright 2018 Tarek El-Hajjaoui</footer>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
