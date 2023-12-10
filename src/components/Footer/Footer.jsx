import React from "react";
import gitURL from '../../assets/github.png';

const Footer = () => {
  return (
    <footer>
      <p>API: <a href="https://pokeapi.co/">PokeAPI</a></p>
      <a href="https://github.com/GREGORIOtsr" id="gitLink"><img src={gitURL} alt="GitHub logo" /></a>
    </footer>
  )
};

export default Footer;
