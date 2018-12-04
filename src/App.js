import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

// Square functional component - only contains a render method and does not have its own state
// always pass props as an argument for functional components
function Square(props) {
  return (
    // use 'props' instead of 'this.props' instead now
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      toeURL: "https://i.imgur.com/s0gSzN0.png",
      ticTacURL: "https://i.imgur.com/O2ieQGA.png",
      // sets the first move of game to be 'Toes'
      toesIsNext: true
    };
  }

  // everytime the user clicks a square, a new set of squares is re-rendered with the result of the click (maintain immutability)
  handleClick(i) {
    // slice was used in order to maintain immutability because it creates a copy of the square array, instead of directly modifying the current square array.
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // if toesIsNext is true, it will output a "toes" the next time a user clicks
    squares[i] = this.state.toesIsNext ? (
      // eslint-disable-next-line
      <img src={this.state.toeURL} />
    ) : (
      // eslint-disable-next-line
      <img src={this.state.ticTacURL} />
    );
    this.setState({ squares: squares, toesIsNext: !this.state.toesIsNext });
  }

  renderSquare(i) {
    return (
      <Square
        // these are the props for the Square component
        // each Square will now receive a value prop that will either be toes picture, tic-tacs picture, or null for empty squares.
        value={this.state.squares[i]}
        // onClick function is passed down to the Square, a child component of Board
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      // displaying the winner does not work yet
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.toesIsNext ? "Toes" : "Tic Tac");
    }

    return (
      <div>
        {/* eslint-disable-next-line */}
        {/* <img alt="toe picture" src={this.state.toeURL} /> */}
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  redirectUser(e) {
    e.preventDefault();
    window.location.href = "/App";
  }
  redirectUserHome(e) {
    e.preventDefault();
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <div id="topButtons">
          <Button
            id="resetButton"
            className="border border-dark"
            bsStyle="danger"
            bsSize="large"
            active
            onClick={this.redirectUserHome}
          >
            HOME
          </Button>
          <Button
            id="homeButton"
            className="border border-dark"
            bsStyle="danger"
            bsSize="large"
            active
            onClick={this.redirectUser}
          >
            RESET
          </Button>
        </div>
        {/* <span>sample text &nbsp;</span> */}
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        <div id="instructionsCon">
          <h4 id="gameInstructions">
            Unfortunately, the game does not keep track of each player's moves
            nor who wins/loses YET, but stay tuned!
          </h4>
        </div>
        <h3 id="design">Designed by Tarek El-Hajjaoui</h3>
        <footer>© Copyright 2018 Tarek El-Hajjaoui</footer>
      </div>
    );
  }
}

// helper function provided by React tutorial
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//         // previous functional state code in the smallest child component
//         // onClick={() => {
//         //   this.setState({ value: <img src={this.state.toeURL} /> });
//         // }}
//       >
//         {/* gets value from the Square within the Board component */}
//         {this.props.value}
//       </button>
//     );
//   }
// }
