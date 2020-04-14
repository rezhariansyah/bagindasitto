import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Phinisi from "./screens/phinisi/Phinisi";
import UnderConstruction from "./screens/underConstruction/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/phinisi" component={Phinisi} exact />
      <Route path="/under-construction" component={UnderConstruction} exact />
    </BrowserRouter>
  );
}

export default App;
