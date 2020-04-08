import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
//can comment this out css provided by create-react-app by default

// import "./index.css";
import Game from "./Components/Game.jsx";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tic Tac Toe Game</p>
      </header> */}
      <Game />
    </div>
  );
}

export default App;
