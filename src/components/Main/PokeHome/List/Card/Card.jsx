import React from "react";
import { Link } from "react-router-dom";

const Card = ({url, name, id, query, type1, type2}) => {
  return (
    <li className="cardContainer">
      <img src={url} alt={name + ' official artwork'} className="card-image"/>
      <Link className="card-name"
        to={{
          pathname: '/pokemon/' + id,
          search: query,
        }}
      >
        {name}
      </Link>
      <div className={`cardTypes-${type1}`}>
        <p>{type1}</p>
        {type2 != 'none' ? <p>{type2}</p> : ''}
      </div>
    </li>
  );
};

export default Card;
