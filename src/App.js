import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Phinisi from "./screens/phinisi/Phinisi";
import About from "./screens/about/About";
import Tips from "./screens/tips/Tips";
import Travel from "./screens/travel/Travel";
import Contact from "./screens/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/phinisi" component={Phinisi} exact />
      <Route path="/about" component={About} exact />
      <Route path="/tips" component={Tips} exact />
      <Route path="/travel" component={Travel} exact />
      <Route path="/contact" component={Contact} exact />
    </BrowserRouter>
  );
}

export default App;
