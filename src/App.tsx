import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
