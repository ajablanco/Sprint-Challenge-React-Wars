import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import axios from "axios";
import Form from "./components/Form";
import Pag from "./components/Pagination";

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    console.log("React Wars");

    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("ERROR!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="charCards">
        {character.map((human, id) => {
          return <CharacterCard className="charCard" key={id} human={human} />;
        })}
      </div>
      <Form />
      <Pag />
      <Footer />
    </div>
  );
}

export default App;
