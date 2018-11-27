import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toeURL: "https://i.imgur.com/s0gSzN0.png",
      value: null
      //       squares: Array(9).fill(null)
    };
  }
  //   insertToe() {
  //     "";
  //   }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: <img src={this.state.toeURL} /> });
          // eslint-disable-next-line
          //   concat(<img src={this.props.toeURL} />);
          // eslint-disable-next-line
          //   append(<img src={this.props.toeURL} />);
          // eslint-disable-next-line
          //   append(<img src={this.props.toeURL} />);
        }}
      >
        {this.state.value}
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       toeURL: "https://i.imgur.com/s0gSzN0.png",
  //       value: null
  //       //       squares: Array(9).fill(null)
  //     };
  //   }
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

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
