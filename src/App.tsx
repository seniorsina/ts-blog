import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
