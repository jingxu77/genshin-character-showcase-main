import "../styles/CharacterList.css";
import "../styles/CharacterCard.css";

import { useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function CharacterList({ characters }) {
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterDetails, setCharacterDetails] = useState({});
  const [isCharacterCardOpen, setCharacterCardOpen] = useState(false);

  // Filter out the Traveler character cards
  const filteredCharacters = characters.filter(
    (character) =>
      character.toLowerCase().includes(search.toLowerCase()) &&
      !character.startsWith("traveler-"),
  );
  const handleCardClick = (character) => {
    axios
      .get(`https://genshin.jmp.blue/characters/${character}`)
      .then((response) => {
        setCharacterDetails(response.data);
        setSelectedCharacter(character);
        setCharacterCardOpen(true);
      })
      .catch((error) =>
        console.error("Error fetching character details:", error),
      );
  };
  const closeCard = () => {
    setCharacterCardOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="character-list-container">
      <input
        type="text"
        placeholder="Enter character name or select below..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div
            className="character-card"
            key={character}
            onClick={() => handleCardClick(character)}
          >
            <img
              src={`https://genshin.jmp.blue/characters/${character}/icon-big`}
              alt={character}
            />
          </div>
        ))}
      </div>
      <CharacterCard isOpen={isCharacterCardOpen} onClose={closeCard}>
        <div className="character-content">
          <img
            src={`https://genshin.jmp.blue/characters/${selectedCharacter}/card`}
            alt={selectedCharacter}
            className="character-portrait"
          />
          <div className="character-info">
            <h2>{characterDetails.name}</h2>
            <p>
              <b>Element:</b> {characterDetails.vision}
            </p>
            <p>
              <b>Rarity:</b> {characterDetails.rarity}
            </p>
            <p>
              <b>Region:</b> {characterDetails.nation}
            </p>
            <p>{characterDetails.description}</p>
          </div>
        </div>
      </CharacterCard>
    </div>
  );
}

export default CharacterList;
