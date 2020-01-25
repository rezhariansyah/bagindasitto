import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
