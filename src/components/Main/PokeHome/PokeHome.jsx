import React, { useContext } from "react";
import { Blocks } from 'react-loader-spinner';
import { PokeContext } from "../../../context/PokeContext";
import List from "./List";

const PokeHome = () => {

  const { pokeList } = useContext(PokeContext);

  return (
    <section id="pokeHome">
      {pokeList
        ? <List list={pokeList}/>
        : <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />}
    </section>
  );
};

export default PokeHome;
