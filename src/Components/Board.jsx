import React, { Component } from "react";
import Square from "./Square";
// import "../index.css";
class Board extends Component {
  //each invoaction of renderSquare will create a new Square component that will be bound to the new function that calls props.onlcikc with i value
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          console.log(`onClick for square ${i}`);
          this.props.onClick(i);
        }}
      />
    );
  }

  render() {
    console.log(`Board render called`);
    return (
      <div>
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
export default Board;
