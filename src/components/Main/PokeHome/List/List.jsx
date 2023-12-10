import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from './Card';

const List = ({ list }) => {

  const printCards = () => {
    return list.map(p => (
      <Card
        key={uuidv4()}
        url={p.sprites.other['official-artwork']['front_default']}
        name={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
        id={p.id}
        query={`?name=${p.name.charAt(0).toUpperCase() + p.name.slice(1)}&url=${p.sprites.other['official-artwork']['front_default']}&type1=${p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.slice(1)}&type2=${p.types.length > 1 ? p.types[1].type.name.charAt(0).toUpperCase() + p.types[1].type.name.slice(1) : 'none'}&height=${p.height}&weight=${p.weight}&hp=${p.stats[0].base_stat}&atk=${p.stats[1].base_stat}&def=${p.stats[2].base_stat}&spatk=${p.stats[3].base_stat}&spdef=${p.stats[4].base_stat}&spd=${p.stats[5].base_stat}`}
        type1={p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.slice(1)}
        type2={p.types.length > 1 ? p.types[1].type.name.charAt(0).toUpperCase() + p.types[1].type.name.slice(1) : 'none'}
      />
    ));
  };

  return (
    <ul id="listContainer">
      {printCards()}
    </ul>
  );
};

export default List;
