import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Favicon from "./assets/banners/icon/favicon.ico"
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
    <div>
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Baginda Sitto</title>
      <meta name="description" content="Hello, as a Bira based Architects, Boat Consultant, and Content Creator. Sitto and team has completed several boat design and construction project - Producing Eco Friendly Boat, Out of Box design, and Boat according to cruise safety standards. We're also your travelmate,
      let's go on an adventure" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="shortcut icon" href={Favicon} />
    </Helmet>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/phinisi" component={Phinisi} exact />
        <Route path="/about" component={About} exact />
        <Route path="/tips" component={Tips} exact />
        <Route path="/travel" component={Travel} exact />
        <Route path="/contact" component={Contact} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
