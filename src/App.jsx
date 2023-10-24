import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import data from "../src/data.jsx";
import "./App.css";

function App() {
  const cards = data.map(data => <Card key={data.id} {...data}/>);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
