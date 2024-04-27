import React from "react";
import "../styles/CharacterCard.css"; 

const CharacterCard = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="character-card-overlay" onClick={onClose}>
      <div
        className="character-card-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CharacterCard;
