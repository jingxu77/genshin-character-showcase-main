import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://genshin.jmp.blue/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Genshin Impact Characters</h1>
        <CharacterList characters={characters} />
      </div>
      <Footer />
    </>
  );
}

export default App;
