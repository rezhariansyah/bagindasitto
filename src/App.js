import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Favicon from "./assets/banners/icon/favicon.ico"
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Phinisi from "./screens/phinisi/Phinisi";
import About from "./screens/about/About";
import Travel from "./screens/travel/Travel";
import Contact from "./screens/contact/Contact";
import Panrita from "./screens/panrita/Panrita";
import Tamparang from "./screens/tamparang/Tamparang";
import Lopi from "./screens/lopi/Lopi";
import Bali from "./screens/bali/Bali";
import Sulawesi from "./screens/sulawesi/Sulawesi";
import RajaAmpat from "./screens/rajaampat/RajaAmpat";
import Sumba from "./screens/sumba/Sumba";
import Flores from "./screens/flores/Flores";
import komodo from "./screens/komodo/komodo";
import collaboration from "./screens/Collaboration/Collaboration";
import YoutubeContent from "./screens/youtubeContent/YoutubeContent";
import BrandPromotion from "./screens/brandPromotion/BrandPromotion";

function App() {
  return (
    <div>
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Baginda Sitto</title>
      <meta name="description" content="Hello, as a Bira based Architects, Boat Consultant, and Content Creator. Sitto and team has completed several boat design and construction project - Producing Eco Friendly Boat, Out of Box design, and Boat according to cruise safety standards. We're also your travelmate,
      let's go on an adventure" data-react-helmet="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="shortcut icon" href={Favicon}/>
    </Helmet>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/phinisi" component={Phinisi} exact />
        <Route path="/about" component={About} exact />
        <Route path="/collaboration" component={collaboration} exact />
        <Route path="/travel" component={Travel} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/panrita" component={Panrita} exact />
        <Route path="/tamparang" component={Tamparang} exact />
        <Route path="/lopi" component={Lopi} exact />
        <Route path="/bali" component={Bali} exact />
        <Route path="/sulawesi" component={Sulawesi} exact />
        <Route path="/rajaampat" component={RajaAmpat} exact />
        <Route path="/sumba" component={Sumba} exact />
        <Route path="/flores" component={Flores} exact />
        <Route path="/komodo" component={komodo} exact />
        <Route path="/youtube-content" component={YoutubeContent} exact />
        <Route path="/brand-promotion" component={BrandPromotion} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
