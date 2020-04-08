import React, { Component } from "react";
// import "../index.css";
class Square extends Component {
  render() {
    console.log(`Square render called`);
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
export default Square;
