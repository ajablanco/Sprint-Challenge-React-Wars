import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import axios from "axios";

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

      <Footer />
    </div>
  );
}

export default App;
