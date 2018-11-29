import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
    // if toesIsNext is true, it will output a "toes" the next time a user clicks
    squares[i] = this.state.toesIsNext ? (
      <img src={this.state.toeURL} />
    ) : (
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
    const status =
      "Next player: " +
      (this.state.xIsNext ? (
        // eslint-disable-next-line
        <img src={this.state.toeURL} />
      ) : (
        // eslint-disable-next-line
        <img src={this.state.ticTacURL} />
      ));

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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

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
