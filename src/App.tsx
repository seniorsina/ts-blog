import Create from "./component/Create";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./component/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/posts/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
