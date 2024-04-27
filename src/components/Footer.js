import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© 2024 Genshin Impact Character Showcase. All rights reserved.</p>
      <p>
        Data provided by{" "}
        <a href="https://genshin.dev" target="_blank" rel="noopener noreferrer">
          genshin.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
