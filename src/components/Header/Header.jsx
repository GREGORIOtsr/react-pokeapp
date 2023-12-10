import React from "react";
import Nav from './Nav';
import logoUrl from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img src={logoUrl} alt="Pokeball logo" id="pokeball-logo"/>
      <Nav />
    </header>
  );
};

export default Header;
