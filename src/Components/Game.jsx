import React, { Component } from "react";
import Board from "./Board";
// import "../index.css";
class Game extends Component {
  state = {
    history: [
      {
        squares: [null, null, null, null, null, null, null, null, null, null],
      },
    ],
    stepNumber: 0,
    isNextX: true,
  };
  /**
   * renders the Game Component
   */
  render() {
    
    const current = this.state.history[this.state.stepNumber].squares;
    let winner = this.calculateWinner(current);
    console.log(`Game render called ${current} ${winner}`);
    const status = winner
      ? `The winner is ${winner}`
      : `Next player - ${this.state.isNextX ? "X" : "0"}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={(i) => {
                console.log(`onClick for Board ${i}`);
              this.handleClick(i); //finally handleClick needs to be called from a place where this is bound the Game Component object
            }}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.getHistoryLinks()}</ol>
        </div>
      </div>
    );
  }
  /**
   * handles click events on a square with index i by taking a copy of history upto stepNumber modifying the history at stepnumber if there is no winner yet and the square is blank
   * updates the state with the new history new stepnumber and the new value of isNextX
   */
  handleClick(i) {
    console.log(`handleClick ${i}`);
    const newHistory = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = this.state.history[this.state.stepNumber].squares.slice();
    if (this.calculateWinner(current) || current[i]) return;
    current[i] = this.state.isNextX ? "X" : "0";
    this.setState({
      history: newHistory.concat([{ squares: current }]),
      stepNumber: this.state.stepNumber + 1,
      isNextX: !this.state.isNextX,
    });
  }

  /**
   * creates list of history links for each element of history binds to each list element a function that sets the current stepNumber to that list element's corresponding history index
   */
  getHistoryLinks() {
    return this.state.history.map((historyObj, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            this.goBackInTime(index);
          }}
        >
          {index ? `Move ${index}` : "Game Start"}
        </li>
      );
    });
  }
  /**
   * a function that sets the current stepNumber to particular index in history
   */
  goBackInTime(i) {
    this.setState({
      history: this.state.history,
      stepNumber: i,
      isNextX: i % 2 ? false : true,
    });
  }
  /*
   *to calculate winner by checking horizontal vertical or diagonal line have same element if no winner returns null
   */
  calculateWinner(squares) {
      console.log(`calculate winner called ${squares}`);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = null;
    lines.forEach((line) => {
      if (winner) return;
      let winnerFound =
        squares[line[0]] === squares[line[1]] &&
        squares[line[1]] === squares[line[2]] &&
        (squares[line[0]] === "X" || squares[line[0]] === "0");
        console.log(`value of winnerFound ${winnerFound} ${line}`);
      if (winnerFound) winner = squares[line[0]];
    });
    console.log(`value of winner ${winner}`);
    return winner;
  }
}

export default Game;
