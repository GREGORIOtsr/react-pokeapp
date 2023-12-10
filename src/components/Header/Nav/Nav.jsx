import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeContext } from "../../../context/PokeContext";

const Nav = () => {

  const { pokeList } = useContext(PokeContext);

  const p = pokeList ? pokeList[24] : '';
  const query = p ? `?name=${p.name.charAt(0).toUpperCase() + p.name.slice(1)}&url=${p.sprites.other['official-artwork']['front_default']}&type1=${p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.slice(1)}&type2=${p.types.length > 1 ? p.types[1].type.name.charAt(0).toUpperCase() + p.types[1].type.name.slice(1) : 'none'}&height=${p.height}&weight=${p.weight}&hp=${p.stats[0].base_stat}&atk=${p.stats[1].base_stat}&def=${p.stats[2].base_stat}&spatk=${p.stats[3].base_stat}&spdef=${p.stats[4].base_stat}&spd=${p.stats[5].base_stat}` : '';
  
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to={'/search'} className="nav-link">Search</Link>
        </li>
        <li>
          <Link className="nav-link" to={{
            pathname: '/pokemon/24',
            search: query,
          }}>
            Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
